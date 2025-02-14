import * as zed from "zed";

interface BootstrapSettings {
  versions: string[];
}

const defaultSettings: BootstrapSettings = {
  versions: ["5"] // Default to Bootstrap 5
};

// Load the class databases
const bootstrapDbs = {
  "2": require("./db/2.json"),
  "3": require("./db/3.json"),
  "4": require("./db/4.json"),
  "5": require("./db/5.json")
};

export function activate(context: zed.ExtensionContext) {
  // Register completion provider
  context.subscriptions.push(
    zed.languages.registerCompletionItemProvider("html", {
      provideCompletionItems(document: zed.TextDocument, position: zed.Position) {
        // Check if we're in a class attribute
        const linePrefix = document.lineAt(position).text.substr(0, position.character);
        if (!linePrefix.match(/class=["|']/)) {
          return;
        }

        // Get configured Bootstrap versions
        const settings = zed.workspace.getConfiguration("bootstrap-autocomplete");
        const versions = settings.get<string[]>("versions") || defaultSettings.versions;

        // Build completions from all configured versions
        const completions: zed.CompletionItem[] = [];

        versions.forEach(version => {
          const db = bootstrapDbs[version];
          db.classes.forEach(className => {
            completions.push({
              label: className,
              kind: zed.CompletionItemKind.Class,
              detail: `Bootstrap ${version}`,
              insertText: className
            });
          });
        });

        return completions;
      }
    })
  );
}

export function deactivate() {}

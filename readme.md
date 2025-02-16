# Zed-BootstrapAutocomplete

[![Required Zed Build](https://img.shields.io/badge/Zed-Latest-orange.svg?style=flat-square)](https://zed.dev)
[![GitHub Actions](https://img.shields.io/github/actions/workflow/status/jfcherng-sublime/ST-BootstrapAutocomplete/python.yml?branch=st4&style=flat-square)](https://github.com/jfcherng-sublime/ST-BootstrapAutocomplete/actions)
[![Package Control](https://img.shields.io/packagecontrol/dt/BootstrapAutocomplete?style=flat-square)](https://packagecontrol.io/packages/BootstrapAutocomplete)
[![GitHub tag (latest SemVer)](https://img.shields.io/github/tag/jfcherng-sublime/ST-BootstrapAutocomplete?style=flat-square&logo=github)](https://github.com/jfcherng-sublime/ST-BootstrapAutocomplete/tags)
[![Project license](https://img.shields.io/github/license/jfcherng-sublime/ST-BootstrapAutocomplete?style=flat-square&logo=github)](https://github.com/jfcherng-sublime/ST-BootstrapAutocomplete/blob/st4/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/jfcherng-sublime/ST-BootstrapAutocomplete?style=flat-square&logo=github)](https://github.com/jfcherng-sublime/ST-BootstrapAutocomplete/stargazers)
[![Donate to this project using Paypal](https://img.shields.io/badge/paypal-donate-blue.svg?style=flat-square&logo=paypal)](https://www.paypal.me/jfcherng/5usd)

This Zed Editor plugin means to unify other [Bootstrap](https://github.com/twbs/bootstrap) autocompletion plugins.

- [Bootstrap 3 Autocomplete](https://packagecontrol.io/packages/Bootstrap%203%20Autocomplete)
- [Bootstrap 4 Autocomplete](https://packagecontrol.io/packages/Bootstrap%204%20Autocomplete)
- [Bootstrap 4x Autocomplete](https://packagecontrol.io/packages/Bootstrap%204x%20Autocomplete)
- Maybe more implicit ones...

This plugin is designed to support various versions of Bootstrap's autocompletion with ease.
At this moment, it supports Bootstrap 2, 3, 4 and 5 (default). If you find a missing class name,
an issue or pull request is always welcome.

![screenshot-st4](https://raw.githubusercontent.com/jfcherng-sublime/ST-BootstrapAutocomplete/st4/docs/screenshot-st4.png)

## Installation

This package is available on Package Control by the name of [BootstrapAutocomplete](https://packagecontrol.io/packages/BootstrapAutocomplete).

## Global Settings

From the main menu: `Preferences` » `BootstrapAutocomplete` » `Settings`

```js
{
    // scopes that this plugin should activated
    "selectors": [
        "text.html string.quoted - meta.path - meta.item-access",
        "text.html meta.attribute-with-value.class",
    ],
    // targeted Bootstrap versions (available versions are: "2", "3", "4", "5")
    "versions": ["5"],
}
```

## Project Settings

You most likely want to use only a specific version of Bootstrap in a project.
In that case, you can specify the version(s) you want to use in your project settings.

From the main menu: `Project` » `Edit Project`

```js
{
    "folders":
    [
        // ...
    ],
    "settings": {
        // settings here will override global settings
        "BootstrapAutocomplete": {
            // use Bootstrap 4 for this project.
            "versions": ["4"],
        },
    },
}
```

## For Plugin Developers

This plugin's autocompletion lists are extracted from

- Official Bootstrap `v2.3.2`
- Official Bootstrap `v3.4.1`
- Official Bootstrap `v4.6.2`
- Official Bootstrap `v5.3.3`

with `scripts/extract_class_names_auto.sh`.

```bash
# setup environment
python -m venv .venv
. .venv/Scripts/activate # if on Windows
. .venv/bin/activate # if not on Windows
python -m pip install -U -r requirements.txt

# extract class names
./scripts/extract_class_names_auto.sh
```

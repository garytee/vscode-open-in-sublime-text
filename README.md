# VSC Open in Sublime Text

Adds a command for opening the current project in [Sublime Text](https://www.sublimetext.com/).

- If there is a file open, it will open the git repo for that file
- If it is a workspace, it will ask you what folder you would like to open
- It will automatically find the best git repo to open

## Install

Run the following in the command palette:

```shell
ext install vscode-open-in-sublime-text
```

## Usage

It adds 1 command to the command palette and 1 item to the context menu:

```js
'Open in Sublime Text' // Open the current project in Sublime Text
```

## Hints

Map `Open in Sublime Text` action to this extension, add this to your `keybindings.json` file:

```json
  { "key": "⌘⌃S", "command": "openInSublimeText.open" }
``````

## License

MIT © Gary Tietjen

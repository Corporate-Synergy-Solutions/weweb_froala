# Element component starter

This is an element for [weweb.io](https://www.weweb.io/).

## Installation

To run locally, first install all dependencies with `npm i`

## Start

To serve locally, run `npm run serve --port=[PORT]`, and then go to Weweb editor, open developper popup and add your custom element.

## Build

Before release, you can check build error by running `npm run build --name=my-element`

## Releases

### 0.0.1

Initial release

## Features

1. Available properties
    - Key: to add froala key.
    - Placeholder text: set placeholder text for editor.
    - Spellcheck: turn on/off spellcheck in editor.
    - Content variable id: to bind editor content to certain variable.
    - Disable editor: to bind variable for disabling editor.
    - Image, Video, File Url: URL for uploading video, file, url.
    - Custom allow types: to allow user turn off/on some file extension.
    - Word counter: to show/hide word counter.
    - Word counter max: to limit word on editor (only show if word counter is on)

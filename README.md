# CC Docs 

This site was built from a template for creating documentation with [Nextra](https://nextra.site).

- [Theme Configuration](https://nextra.site/docs/docs-theme)
- [Guide](https://nextra.site/docs/guide)
- [Mermaid](https://mermaid.js.org/intro/)

## Local Development

First, run `npm i` to install the dependencies.

Then, run `npm dev` to start the development server and visit localhost:3000.

## Adding a new document

### Adding locally
1. In the pages directory, create a new markdown `*.mdx` file.
1. Update the `_meta.json` file in the directory to control the name of the sidbar link and its location in the list.
1. Add any content to the markdown file. You can use [MDX](https://mdxjs.com/getting-started) syntax.
1. Commit your changes and push to GitHub. The site will automatically update.

### Adding directly in GitHub
**Note:** _You must be a member of the [Combined Curiosity organization](https://github.com/combined-curiosity)_
1. Navigate to the `pages` directory.
1. Click the `Add file` button and select `Create new file`.
1. Name the file with the `.mdx` extension.
1. Add any content to the markdown file. You can use [MDX](https://mdxjs.com/getting-started) syntax.
1. Commit your changes and push to GitHub. The site will automatically update.

## Editing a document

### Editing locally
1. In the pages directory, find the markdown `*.mdx` file you want to edit.
1. Edit the file.
1. Commit your changes and push to GitHub. The site will automatically update.

### Editing directly in GitHub
**Note:** _You must be a member of the [Combined Curiosity organization](https://github.com/combined-curiosity)_
1. Navigate to the `pages` directory.
1. Find the markdown `*.mdx` file you want to edit.
1. Click the file name to open the file.
1. Click the pencil icon to edit the file.
1. Edit the file.
1. Commit your changes and push to GitHub. The site will automatically update.

## Removing a document

### Removing locally
_We should not remove documentation but we can hide it._
1. In the pages directory, find the markdown `*.mdx` file you want to remove.
1. Add some text to the top of the file to indicate that it is no longer available.
    ```md copy
    # _This document is no longer applicable_
    ```
1. In the `_meta.json` file in the directory, add `"display": "hidden` to the file's entry.
    ```json filename="_meta.json"
    {
      ...
      "removed-doc": {
      "display": "hidden"
      }
      ...
    }
    ```
1. Commit your changes and push to GitHub. The site will automatically update.

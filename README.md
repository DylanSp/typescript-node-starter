# Opinionated TypeScript/Node Starter Template

This is a template for writing TypeScript/Node projects using a somewhat opinionated dev stack. Choices made:

- Linting: ESLint
- Code formatting: Prettier, set to run on file save
- Testing: Jest

`npm` is used by default, but to use Yarn v1, just remove `package-lock.json` and run `yarn install`. Not tested with Yarn 2.

## Using This Template

- See [GitHub's instructions](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template) to create your repository based on this template.
- Add your name to [`LICENSE`](LICENSE) on the line below "Copyright (c) 2020 Dylan Sprague"; the format should be "Copyright (c) [year][your name]".
- Update the repository and author fields in [`package.json`](package.json).

## Recommended VSCode plugins

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

# Opinionated TypeScript/Node Starter Template

This is a template for writing TypeScript/Node projects using a somewhat opinionated dev stack. Choices made:

- Linting: ESLint (v9, using the flat config format)
- Code formatting: Prettier, set to run on file save
- Testing: Node built-in test runner.

This template fully supports ES Modules.

`npm` is used; yarn and pnpm are not tested.

## Using This Template

- See [GitHub's instructions](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template) to create your repository based on this template.
- Add your name to [`LICENSE`](LICENSE) on the line below "Copyright (c) 2020 Dylan Sprague"; the format should be "Copyright (c) [year][your name]".
- Update the repository and author fields in [`package.json`](package.json).

## Recommended VSCode plugins

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Notes on dependencies/configuration

- `eslint-plugin-prettier` is required to make ESLint report Prettier errors and show them as warnings in VS Code.
- `.prettierrc.cjs` needs the `.cjs` extension so it can use `module.exports`, which isn't valid when using ES modules.
- The `typescript.preferences.importModuleSpecifierEnding: js` VS Code setting ensures that automatic imports will use a `.js` file ending, which is necessary when using Typescript with ES Modules.

# Compiler's website

[`compiler.la`](https://compiler.la)

Deployed via [Netlify](https://www.netlify.com)   
[![Netlify Status](https://api.netlify.com/api/v1/badges/e6111c60-0ee2-4b02-a925-165411bb767b/deploy-status)](https://app.netlify.com/sites/compilerla/deploys)

## Design

We have a Figma file with the current designs, broken into the following sections/pages:

| Section | Description |
| ------- | ------------ |
| [🎨 Styleguide](https://www.figma.com/file/2gq3WJFdRFDefyHcgFMUGt/Current-compiler.la?node-id=0%3A1) | Colors, typography, and visual assets |
| [❖ Components](https://www.figma.com/file/2gq3WJFdRFDefyHcgFMUGt/Current-compiler.la?node-id=2%3A2) | Reusable design elements like buttons, navbar, etc. |
| [🏗 Information architecture](https://www.figma.com/file/2gq3WJFdRFDefyHcgFMUGt/Current-compiler.la?node-id=2%3A3) | Mocks of the actual pages, with Flows |

We also have 2 Prototypes/Flows that demonstrate navigation and usage of the site:

| Flow | Description |
| ------- | ------------ |
| [🏠 Homepage](https://www.figma.com/proto/2gq3WJFdRFDefyHcgFMUGt/Current-compiler.la?page-id=2%3A3&node-id=8%3A59&viewport=646%2C299%2C0.21&scaling=min-zoom&starting-point-node-id=8%3A59&show-proto-sidebar=1) | Starting on the homepage https://compiler.la |
| [💼 Jobs](https://www.figma.com/proto/2gq3WJFdRFDefyHcgFMUGt/Current-compiler.la?page-id=2%3A3&node-id=10%3A101&viewport=646%2C299%2C0.21&scaling=min-zoom&starting-point-node-id=10%3A101&show-proto-sidebar=1) | Starting on the Jobs listing page https://compiler.la/jobs |

## Development

### Running a local instance

This is a [Jekyll][jekyll] static site. Development is done within a container-based environment using [VS Code with devcontainers](#vs-code-with-devcontainers). This repository includes a [`.devcontainer/devcontainer.json`](devcontainer-config-file) file that configures remote container development.

Once inside the devcontainer in VS Code, you can press `Ctrl/Cmd+Shift+B` to run the `Jekyll: Build Dev` [task](https://code.visualstudio.com/docs/editor/tasks) defined in [`.vscode/tasks.json`][vscode-task-config-file], which builds the site and starts the Jekyll development server. The site will then be running at <http://localhost:4000>. Auto rebuild/reload will be active and will watch the site files for changes.

## VS Code with devcontainers

### Install the `Remote - Containers` extension

[VS Code][vscode] can be used together with Docker via the [Remote - Containers][vscode-containers] extension to enable a container-based development environment.
### Open the repository with VS Code

With the [Remote - Containers][vscode-containers] extension enabled, open the folder containing this repository inside Visual
Studio Code.

You should receive a prompt in the Visual Studio Code window; click `Reopen in Container` to run the development environment
inside a container.

If you do not receive a prompt, or when you feel like starting from a fresh environment:

1. `Ctrl/Cmd+Shift+P` to bring up the command palette in Visual Studio Code
1. Type `Remote-Containers` to filter the commands
1. Select `Rebuild and Reopen in Container`

### Exiting devcontainers

To close out of the container and re-open the directory locally in Visual Studio Code:

1. `Ctrl/Cmd+Shift+P` to bring up the command palette in Visual Studio Code
1. Type `Remote-Containers` to filter the commands
1. Select `Reopen Locally`

[jekyll]: https://jekyllrb.com
[devcontainer-config-file]: https://github.com/compilerla/compiler.la/blob/main/.devcontainer/devcontainer.json
[vscode-task-config-file]: https://github.com/compilerla/compiler.la/blob/main/.vscode/tasks.json
[vscode]: https://code.visualstudio.com/
[vscode-containers]: https://code.visualstudio.com/docs/remote/containers

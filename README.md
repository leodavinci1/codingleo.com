# codingleo.com

- [Codebase](#codebase)
- [Technologies](#technologies)
- [Folder Structure](#folder-structure)
- [Ducks Pattern](#ducks-pattern)
- [Code Style](#code-style)
- [Initial Setup](#initial-setup)
- [Running Locally](#running-locally)

## Codebase

### 💻 Technologies

Here's a list of the main technologies used:

- **React**: Frontend React App
- **ThreeJS**: Create and animate 3D graphics
- **GSAP**: High-Performance animation library
- **Styled Components**: Styling for components
- **Redux**: Application state container
- **Redux-Saga**: Middleware used by Redux store to communicate with different states asynchronously.
- **Redux Sauce**: Tool for creating and organizing reducers, actions, and types for Redux.


### 🦆 Ducks Pattern

The main structural difference of the Ducks pattern is that it combines reducers, types, and actions into a single file, and with the help of Redux Sauce, we have a global state, actions, types, reducers, and initial state for each necessary page or structure. Thus, making files less extensive and easy to maintain.


### ✨ Code Style

We run Prettier and ESLint to maintain basic code quality standards, which are based on the [airbnb](https://github.com/airbnb/javascript) standard. ESLint is also run in the pipeline to ensure that no low-quality code enters the repository. To facilitate the process of addressing ESLint configuration issues, download the VS Code extension [Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint) and configure it to format the code on "Format on save".


### ⚙️ Installation

We have only two installation steps for the application:

1. **Install yarn**: We use [yarn](https://yarnpkg.com) to manage JavaScript code dependencies. Read the [documentation](https://yarnpkg.com/en/docs/install) for installation instructions.
2. **Install dependencies**: To install project dependencies, simply run the command:
`yarn`

### 🔥 Running Locally

1. **Start**: To run locally, simply execute the command:
`yarn start`
2. **Lint**: To test syntax according to lint settings, run the command:
`yarn lint`

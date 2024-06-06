# Static Web Template

This is a static web template built with React, Vite, Tailwind CSS, and DaisyUI.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Development Server](#running-the-development-server)
- [Building the Project](#building-the-project)
- [Serving the Built Project](#serving-the-built-project)
- [Formatting Code](#formatting-code)

## Prerequisites

Ensure you have the following software installed on your system:

- [Node.js](https://nodejs.org/en/download/) (version 14 or later)
- npm (comes with Node.js)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/static-web-template.git
    cd static-web-template
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

## Running the Development Server

To start the development server and run the application locally:

```bash
npm run dev
```

Open your browser and navigate to http://localhost:3000 to see the application.
Building the Project

To build the project for production:

bash

npm run build

The output will be in the dist directory.
Serving the Built Project

To serve the built project locally, you can use a static server such as serve.

    Install serve (if not already installed):

    bash

npm install -g serve

Serve the dist directory:

bash

    npx serve dist

    This will start a local server and you can access the application at http://localhost:3000.

Formatting Code

This project uses Prettier for code formatting. You can check and format the code with the following scripts:

    Check code formatting:

    bash

npm run prettier:check

Automatically format code:

bash

    npm run prettier:write


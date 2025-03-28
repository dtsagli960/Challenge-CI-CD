# Challenge-CI-CD Project

## Overview

This project is a Node.js server application using Express and Mongoose. It includes TypeScript for type checking and Vitest for testing. The project is set up with CI/CD workflows for deployment and Cypress component tests.

## CI/CD Setup

### Deployment Workflow

The deployment workflow is set up to automatically deploy to Render the application when changes are pushed to the main branch. The workflow includes the following steps:

1. **Install Dependencies**: Installs the project dependencies.
2. **Build**: Compiles the TypeScript code.
3. **Deploy**: Deploys the application to the specified environment.

### Cypress Component Tests Workflow

This workflow is triggered on pull requests to the develop branch. It checks out the code, sets up Node.js, installs dependencies, and runs Cypress component tests. The workflow includes the following steps:

1. **Install Dependencies**: Installs the project dependencies.
2. **Build**: Compiles the TypeScript code.
3. **Run Tests**: Runs the Cypress component tests.

Test ci

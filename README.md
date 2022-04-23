# ui-testing-playground
The purpose of the project is to test the UI Test Automation Playground (http://www.uitestingplayground.com/) using Cypress.

# Getting started with Cypress
Cypress is an end-to-end testing framework, JavaScript-based test automation tool for the modern web.

Cypress enables you to write all types of tests:
- End-to-end tests
- Integration tests
- Unit tests

Check the [Cypress Documentation](https://docs.cypress.io/guides/overview/why-cypress#What-you-ll-learn) out.

## Project Prerequisites (to run local)
### Operating System

- **macOS** 10.9 and above (64-bit only)
- **Linux** Ubuntu 12.04 and above, Fedora 21 and Debian 8 (64-bit only)
- **Windows** 7 and above (64-bit only)

### Node.js
- Node.js 12 or 14 and above

### Linux
- Ubuntu/Debian

```
apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
```

- CentOS

```
yum install -y xorg-x11-server-Xvfb gtk2-devel gtk3-devel libnotify-devel GConf2 nss libXScrnSaver alsa-lib
```

## Running project

| Command | Description |
| :------- | :------- |
| npm run cy:open | Opens the Cypress Test Runner. |
| npm run cy:run | To run all the present tests in headless mode. |
| npm run cy:run --spec | To run our specific spec file we use --spec option by passing the path and file name as arguments. |

# ui-testing-playground
The purpose of the project is to test the [UI Test Automation Playground](http://www.uitestingplayground.com/) using Cypress.

Folder structure:

```
.circleci/
    config.yml

cypress/
    constants/
        selectors/
        texts/
    fixtures/
    integration/
    plugins/
    support/

node_modules/
.gitignore
cypress.json
package-lock.json
package.json
README.md
```

### Project details

- Language: Javascript
- Package manager: npm
- Test framework: Cypress
- Reports: Mochawesome and Mocha Junit
- CI platform: CircleCi

#### Scenarios covered
- Dynamic ID:
  - It is important to practice how to select elements in other ways, so we will not have the dependency with ID.

- Load Delay:
  - We can see similar load delay on elements in the react applications, and Cypress handles that automatically, then we can be focussed in the test itself. 

- Sample App:
  - It demonstrates kind of a login page, which is the most important page in all the applications that require authentication.

- Text Input:
  - Depending on the text input, we need to run key validations like max length, characters accepted, etc. That will be important to keep the consistency. Even though for most applications these validations are done in the backend, there are a few applications in which the frontend is responsible for validating that.

#### Reports

- CI:
  - In the `Test` tab you will find if something went wrong
  - In the `Artifacts` tab you will find the reports


- Local after run the project: `cypress/reports/index.html`

The folder report and the report itself are generated in every run.


# Getting started with Cypress
Cypress is an end-to-end testing framework, JavaScript-based test automation tool for the modern web.

Cypress enables you to write all types of tests:
- End-to-end tests
- Integration tests
- Unit tests

Check the [Cypress Documentation](https://docs.cypress.io/guides/overview/why-cypress#What-you-ll-learn) out.

## Continuous Integration with CircleCI
Continuous integration improves team productivity, efficiency, confidence, and happiness. Find problems and solve them quickly. Release higher quality, more stable products.


CircleCI is a cloud-based CI/CD tool that automates installation and delivery procedures. Since it is a cloud-based CI/CD tool, it eliminates the redundancy of a dedicated server and cuts down the cost of maintenance of a constant local server host. 

See more about [CircleCi](https://circleci.com/docs/).

The project is integrated with CircleCI:

- CircleCI Project: [ui-testing-playground](https://app.circleci.com/pipelines/github/bqmelo/ui-testing-playground?branch=main&filter=all)

#### Reports

You can find the reports for each CI run by:

- Acessing the build run you desire
- In the `Test` tab you will find if something went wrong
- In the `Artifacts` tab you will find the Mochawesome and Mocha Junit reports


## Project Prerequisites
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
### Installation


```
npm install
```

## Running project locally

After install all the dependencies, you can use one of the commands below to start testing.

| Command | Description |
| :------- | :------- |
| npm run cy:open | Opens the Cypress Test Runner. |
| npm run cy:run | To run all the present tests in headless mode. |
| npm run cy:run --spec | To run our specific spec file we use --spec option by passing the path and file name as arguments. |


# Next Steps
1. Find a solution in CircleCi to use the `execute shell` to execute a .bash in the project, or execute the `Calliope POST request` directly in config.yml for sending the test results to the Calliope platform.
2. Refine the reports and specs in code to get more clear results.
3. Integrate project in another CI to get knowledge in other platforms.

# playwright-work-demo
Current status of Tests : [![Playwright Tests](https://github.com/zac11/playwright-work-demo/actions/workflows/playwright.yml/badge.svg)](https://github.com/zac11/playwright-work-demo/actions/workflows/playwright.yml)

## Simple Test Framework with Playwright
This is a simple sample test framework using Page Object Model in Playwright. Tests are written in `.ts`, and run only on Chrome, but in parallel.


## Setup
Since this is based on Playwright with TS, so the pre-requisite is that you should have NodeJS installed on your system.
Once NodeJS is installed.

- Clone the repo : `gh repo clone zac11/playwright-work-demo` (or using `git clone zac11/playwright-work-demo`)
- Install the `npm` dependencies using `npm i` or `npm install`
- See the `Running tests` section on how to run the tests


## Structure
The primary directories are as follows
- .github : Contains the `.yaml` files for Github Actions CI.
- data : Contains the different data providers. 
- locators : Contains locator classes. All classes inside this folder has locators.
- pages : Page class contains the methods/assertions per page.
- tests : Contain the tests for the web pages


## System Under Test
The system under test is : https://tutorialsninja.com/demo/


## Libraries Used 
- Playwright : For driving the UI tests
- faker : For creating fake data
- cryptoJS : For encrypting passwords ( not done yet)
- excelJS : For handling excel data in TS
- yaml : For handling yaml data in TS.


## Config
There are three different configuration files for this tests 
- playwright.config.ts - If you want to run tests on your local , then use this - used by default.
- playwright.ci.config.ts - If you want to run tests in CI - this is used for running tests in Github Actions.
- playwright.allure.config.ts - If you want to generate allure reports.

## Running tests
To run all tests on local run
```npx playwright test```


To run all tests in CI - mode (headless)
```npm run test-ci ```

To run tests and generate an allure report
```npm run alluretests```

## Emails
The tests run on a periodic basis and sends email of your test run in to your email.
To change the secrets and allow the emails to be sent to your email id - you will have to
- Enable 2 step verification in Google - read https://support.google.com/accounts/answer/185839?sjid=10946954775658853155-AP
- Create app specific password in Gmail - read https://support.google.com/mail/answer/185833?hl=en-GB
- Store the email and the app password in Github Secrets in your repo - as `EMAIL_USERNAME` and `EMAIL_PASSWORD`
- Change the `to` and `from` fields in the `Send email` section in the `playwright.yml` file insde the `.github` folder


## Report
Reports are hosted on the Github pages. Open https://<githubusername>.github.io/playwright-work-demo after running your tests.
For my tests reports are at https://zac11.github.io/playwright-work-demo
You can read this here : https://harshitshah156.medium.com/host-your-automation-report-on-github-pages-with-github-actions-69f80857bd28


## Docker
The test suite contains a docker file that enables you to run the commands in Docker in local/ci systems
- Build the docker file : `docker build -t pw .` 

here you can replace `pw` with whatever tag name you want to give - it could be `docker build -t testing .`

- Once the Dockerfile is built, then run that using `docker run -it pw:latest npm run test-ci` - replace the tag name (`pw`) with whatever tag name you've given

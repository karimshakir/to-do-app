# ToDoozy

This README covers an overview of the exercise, the user story that needs to be
implemented, and application bootstrapping.

## Exercise Overview and Expectations

This exercise presents you with an existing application and a user story that
needs to be implemented within that application. You will be expected to
implement the user story to the best of your ability while adhering to the
standards established by the application. Once you have completed implementing
the user story you will need to send us a zip or tar ball of the application
code. We recommend using the following command from within the directory that
contains the application to generate the archive:

`tar --exclude='./node_modules' --exclude='./.git' --exclude='./app-web/vendor'
-czf ../code_challenge.tar.gz .`

After running the command, there should be a `code_challenge.tar.gz` file in the
parent directory that you can send.

### Technology overview

The application consists of a Rails 5 application running on Ruby 2.5.1 and an
Angular 1.4.6 application that relies on Node 8.1.4. This example application is
modeled after a long standing application that has been through several versions
of front end and back end frameworks and may not utilize all of the most recent
features of the underlying frameworks. An overview of all of the dependencies
the application requires is later in this document.

* Front End Application
  * Application logic is in the `app-web/app` folder
  * Tests are housed in the `spec/app-web/app` folder
* Backend Application
  * Follows standard Ruby and rspec conventions

### Coding Expectations

Both the front end and back end applications adhere to standard conventions and
you are expected to continue following them.

* Front End Application
  * Unit tests for the services, controllers, and views
  * Test coverage at or close to full coverage pre-compilation
  * All code passes the linter that is run when files are compiled
  * Files and tests are named consistently with each other
* Backend Application
  * Unit tests for the models, controllers, and views
  * Test coverage at or close to full coverage
  * Syntax generally follows the AirBnB style guide but is not enforced

## Assessment Overview

How will you be assessed? We asked a handful of our existing engineers to
complete the same exercise we are giving you. Based on their submissions an
ideal implementation was created. Based on that implementation we drafted a
scoring rubric that will be used as your sample is evaluated. While we cannot
share the details with you there are several high level areas we are interested
in.

* Running tests that cover your newly added code
* Following the patterns established by the application
* Implementation of the user story
* Are the acceptance criteria met

## User Story

As a todoozy user I want to be able to edit the to do items so that I can
correct mistakes in the title or description, change the priority of the item,
and mark it complete.

Acceptance Criteria:
1. On the To Do Item List screen there is a pencil next to the title of each
   to do item that links to the edit screen for that item
2. On the To Do Item Show screen there is a pencil next to the title of the to
   do item that links to the edit screen for that item
3. On the To Do Item Edit screen...
   1. there are fields for title, description, and priority that mimic the
      fields on the To Do Item New screen
   2. there is a check box that allows me to mark the item as complete.
   3. there is a cylon displayed until the to do item data is loaded
   4. all fields and checkboxes are filled in based on the existing data for
      the to do item.
   5. the title field is required to submit the edit form
   6. there is a submit button that allows me to save my changes
   7. the submit button is disabled after pressing to prevent multiple submits
   8. there is a cylon/spinner present after hitting the submit button to let
      me know something is happening
   9. There are breadcrumbs that link me to the home screen, the To Do Item
      Show screen for the To Do Item that is being edited, and the word 'Edit'
      at the end that does not have a link
4. After submitting on the To Do Item Edit screen I am automatically redirected
   back to the To Do Item Show Screen and I see the changes I just made.

### Supporting Screenshots

There are screen shots in the `docs` folder that should assist in mapping terms
like `To Do Item List screen` to the correct pages in the application. The
screens have example data in them and are strictly for illustrative purposes.

### Other Notes

* Font awesome is included for any icon needs

## Application Bootstrapping

Todoozy has two primary components: a Rails backend, and an Angular.js frontend.

### Dependencies

- Ruby 2.5.1 - We recommend using [rbenv](https://github.com/sstephenson/rbenv)
  to manage ruby versions on your local workstation.
- Python 2.7.13 - We recommend using [pyenv](https://github.com/pyenv/pyenv) to
  manage python versions on your local workstation. None of the application is
  written in python by one of the JavaScript dependencies relies on it.
- [Bundler](http://bundler.io/) - Application depenency manager. Use
  `gem install bundler` to get situated.
- PostgreSQL (and development headers) - For OSX,
  [Postgres.app](http://postgresapp.com/) is a very convenient package. The
  default development configuration expects postgres running locally on the
  default port. Alternatively, you can install postgres through homebrew with
  `brew install postgres`.
- [Node.js](http://nodejs.org/) - We recommend using
  [nvm](https://github.com/creationix/nvm) to manage node versions locally. See
  the .node-version file for the version the application currently depends on.
- [Bower](http://bower.io/) - Use and installation is hooked into `npm install`.
  Optional: Install globally with `npm install -g bower`.
- [Gulp](http://gulpjs.com/) - Similarly to bower, this package is specified in
  `npm install`. Optional: Install globally with `npm install -g gulp`.
- make - We use make to facilitate consistent application interaction commands.
  The command is installed by default on most linux distributions and if you
  have homebrew installed on OSX you'll likely have it too.

### Installation

Prerequisite: These installation steps assume that you have the following
installed and running:

- Postgres
- NodeJS (see `.node-version` for the current version)
- Ruby (see `.ruby-version` for the current version)

1. `gem install bundler`
2. `make db`
3. `make js_env`
4. `bundle exec rails db:seed`
5. `make start`

After make start, the application should be running on http://localhost:3000.
You can login using the username and password `whatever`. You can then start
creating to do items and exploring the application.

### Testing

- `make test` will run ruby spec tests. (some db prep plus rake test). Look in
  the `spec/` folder for those tests.
- `make js_test` runs karma tests. Look in `spec/app-web/app/` for those tests.
- `make js_test_watch` runs karma tests as above, continuously

Coverage reports are created after test runs. Run unit tests (`make test` and
`make js_test`) to generate or update the reports. To see a report, open the
appropriate file in a browser:

* Ruby tests: `coverage/index.html`
* JS tests: `coverage/js-report-html/index.html`

Ruby coverage is currently configured to require a minimum of 90% coverage.
Introducing changes that drop it below that will cause test runs to fail.

#### Additional Testing Commands

To run a specific spec test file: `bundle exec rspec spec/<filename>`

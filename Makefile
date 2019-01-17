#!/bin/bash

RUBY_VERSION = $(shell cat .ruby-version)
VPATH = $(PATH)
BUNDLE = bundle exec
FOREMAN = foreman start

##### Development Help #####
help:
	cat README.md

annotate:
	$(BUNDLE) annotate --exclude tests,fixtures,factories,serializers

start: env js_env
	$(BUNDLE) $(FOREMAN)

##### Tests #####
test: env
	$(BUNDLE) rspec

js_test: js_env
	npm test

js_test_watch: js_env
	npm run test-watch

js_dev: js_env
	npm run watch

lint:
	./node_modules/.bin/eslint --ext .js app-web/app/ spec/app-web/app/

features: env js_env
	$(BUNDLE) rake features

##### Data #####
db: env
	@echo "*** Setting up db stuff for test/development environments"
	@echo "*** This assumes you have postgres running locally and your default role has the necessary permissions"
	@echo "*** This will fail if a connection to the database is open"
	@echo ""
	dropdb todoozy_test --if-exists
	createdb todoozy_test
	dropdb todoozy --if-exists
	createdb todoozy
	$(BUNDLE) rails db:schema:load
	$(BUNDLE) rails db:schema:load RAILS_ENV=test

##### Dependencies #####
env:
	bundle install

js_env:
	npm install

##### Methods that are not associated or targeting a file #####
.PHONY: help annotate start test js_test js_test_watch js_dev lint features db env js_env

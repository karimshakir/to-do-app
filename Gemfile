source 'https://rubygems.org'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '5.2.0'

gem 'jbuilder' # Build JSON view support
gem 'pg' # Postgres

# Authentication
gem 'devise'

group :development do
  gem 'annotate'
  gem 'rake'
  gem 'rubocop'
end

group :test, :development do
  gem 'factory_bot_rails'
  gem 'foreman'
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'simplecov', :require => false
  gem 'puma'
end

group :test do
  gem 'rspec-rails'
  gem 'rails-controller-testing'
  gem 'capybara'
  gem 'capybara-angular'
  gem 'database_cleaner'
  gem 'poltergeist'
  gem 'rspec-activemodel-mocks'
  gem 'rspec-collection_matchers'
  gem 'selenium-webdriver'
  gem 'webmock'
end

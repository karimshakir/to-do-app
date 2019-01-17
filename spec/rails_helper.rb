require 'spec_helper'

ENV["RAILS_ENV"] ||= 'test'
require File.expand_path("../../config/environment", __FILE__)
abort("The Rails environment is running in production mode!") if Rails.env.production?
require 'rspec/rails'

require 'webmock/rspec'
require 'rspec/active_model/mocks'
require 'rspec/collection_matchers'

WebMock.disable_net_connect!(allow: %r{/registry/tasks})

ActiveRecord::Migration.check_pending!

# rails 4.1 will take care of the test migrations itself
ActiveRecord::Migration.maintain_test_schema! if ActiveRecord::Migration.respond_to?(:maintain_test_schema!)

# Requires supporting ruby files with custom matchers and macros, etc,
# in spec/support/ and its subdirectories.
Dir[Rails.root.join("spec/support/**/*.rb")].each { |f| require f }

RSpec.configure do |config|
  # Remove this line if you're not using ActiveRecord or ActiveRecord fixtures
  config.fixture_path = "#{::Rails.root}/spec/fixtures"

  config.include ActionDispatch::TestProcess

  # If you're not using ActiveRecord, or you'd prefer not to run each of your
  # examples within a transaction, remove the following line or assign false
  # instead of true.
  config.use_transactional_fixtures = true

  config.infer_spec_type_from_file_location!
  config.filter_rails_from_backtrace!

  config.include FactoryBot::Syntax::Methods

  config.include Devise::Test::ControllerHelpers, type: :controller

  config.global_fixtures = :all
end

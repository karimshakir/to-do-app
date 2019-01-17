require_relative 'boot'

require 'rails/all'
require 'logger'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

require File.expand_path('../../lib/middleware/authenticate_header', __FILE__)

module Todoozy
  class Application < Rails::Application
    config.load_defaults 5.2
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
    # Run "rake -D time" for a list of tasks for finding time zone names. Default is UTC.
    # config.time_zone = 'Central Time (US & Canada)'

    # The default locale is :en and all translations from config/locales/*.rb,yml are auto loaded.
    # config.i18n.load_path += Dir[Rails.root.join('my', 'locales', '*.{rb,yml}').to_s]
    # config.i18n.default_locale = :de
    config.i18n.enforce_available_locales = true

    config.middleware.insert 0, ::Middleware::AuthenticateHeader

    log_level_env =  ENV["LOG_LEVEL"]
    if %w[DEBUG INFO WARN ERROR FATAL UNKNOWN].include?(log_level_env)
      config.log_level = log_level_env
    else
      config.log_level = "INFO"
    end
  end
end

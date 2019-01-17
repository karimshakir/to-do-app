# Be sure to restart your server when you modify this file.

Todoozy::Application.config.session_store :cookie_store,
                                          key: '_todoozy_session',
                                          expire_after: 1.week

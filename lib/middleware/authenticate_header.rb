module Middleware
  class AuthenticateHeader
    def initialize(app)
      @app = app
    end

    def call(env)
      status, headers, response = @app.call(env)
      headers.delete('WWW-Authenticate') if status == 401
      [status, headers, response]
    end
  end
end

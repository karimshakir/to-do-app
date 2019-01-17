class ApplicationController < ActionController::Base
  # ensure that the devise controllers can respond to the sign_in route
  # See https://github.com/plataformatec/devise/issues/3483
  respond_to :html, :json
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  after_action :set_xsrf_token_cookie

  def set_xsrf_token_cookie
    cookies['XSRF-TOKEN'] = { value: form_authenticity_token }
  end

  def verified_request?
    if respond_to?(:valid_authenticity_token?, true)
      super || valid_authenticity_token?(session, request.headers['X-XSRF-TOKEN'])
    else
      super || form_authenticity_token == request.headers['X-XSRF-TOKEN']
    end
  end
end

class ApplicationController < ActionController::API

  def verify 
    if session[:access_token] && session[:refresh_token]
      render json: { authenticated: true }
    else
      render json: { authenticated: false }
    end
  end

end

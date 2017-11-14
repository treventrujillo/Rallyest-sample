class User < ActiveRecord::Base

  has_secure_password

  def authenticate
    session[:access_token] ? true : false
  end

end

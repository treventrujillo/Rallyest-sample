class User < ActiveRecord::Base

  def authenticate
    session[:access_token] ? true : false
  end

end

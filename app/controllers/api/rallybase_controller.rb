class Api::RallybaseController < ApplicationController

  def verify
    session[:access_token] ? true : false
  end

end

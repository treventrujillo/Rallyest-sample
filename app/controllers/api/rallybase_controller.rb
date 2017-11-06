class Api::RallybaseController < ApplicationController

  def logged_in?
    @token = session["ACCESS_TOKEN"]
    if @token === true
      render json: {Authenticated: true}
    else
      render json: {Authenticated: false}
    end
  end

end

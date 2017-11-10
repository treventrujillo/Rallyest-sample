class Api::LoginsController < ApplicationController

  def create

    puts 'Calling Rally API...'
    
    # set params to username and login
    username = params["email"]
    password = params["password"]
    
    response = RestClient::Request.execute(:url => 'https://rallyfy.com/oauth/token', :method => :post,
      :headers => {:content_type => 'application/x-www-form-urlencoded', :accept =>'application/json'},
      :payload => {:grant_type => 'password', :client_id => '2', :client_secret => '9cqArAds1b88m2hypWsmutk2KWPdQUffTHsnEjkk', 
      :username => username, :password => password, :scope => '' },
      :verify_ssl => false)

    login_json = JSON.parse(response);
    
    # retrieve access token
    access_token = login_json["access_token"]
    # set sesssion to token
    session[:access_token] = access_token
    session[:username] = username 

    render json: { token: session[:access_token] }
  end

  def destroy
    reset_session
  end

end

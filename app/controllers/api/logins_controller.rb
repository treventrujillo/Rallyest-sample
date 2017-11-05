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

    if response.code === 200  

      login_json = JSON.parse(response);
      
      # retrieve access token
      access_token = login_json["access_token"]
      # set sesssion to token
      session["ACCESS_TOKEN"] = access_token
        
      render json: { res: response }
    end
  end
end

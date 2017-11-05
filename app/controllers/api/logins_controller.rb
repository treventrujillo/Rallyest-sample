class Api::LoginsController < ApplicationController

  def create
    username = params["email"]
    password = params["password"]

    puts "Username: #{username} Password: #{password}"
    
    loginRes = RestClient::Request.execute(:url => 'https://rallyfy.com/oauth/token', :method => :post,
    :headers => {:content_type => 'application/x-www-form-urlencoded', :accept =>'application/json'},
    :payload => {:grant_type => 'password', :client_id => '2', :client_secret => '9cqArAds1b88m2hypWsmutk2KWPdQUffTHsnEjkk', :username => username, :password => password, :scope => '' },
    :verify_ssl => false)

    puts loginRes

    if loginRes.code === 200

      loginJSON = JSON.parse(loginRes);
      accessToken = loginJSON["access_token"]

      puts "AccessToken: #{accessToken}"

      # set sesssion
      # username
      # accessToken

      session["ACCESS_TOKEN"] = accessToken
      
      render json: { authenticated: true }
      
    else
      render json: { authenticated: false }
    end
  end
end

class Api::LoginsController < ApplicationController

  def create
    puts 'Calling Rally API...'
    
    # set params to username and login
    username = params["email"]
    password = params["password"]
    
    request = RestClient::Request.new(:url => 'https://rallyfy.com/oauth/token', :method => :post,
      :headers => {:content_type => 'application/x-www-form-urlencoded', :accept =>'application/json'},
      :payload => {:grant_type => 'password', :client_id => '2', :client_secret => '9cqArAds1b88m2hypWsmutk2KWPdQUffTHsnEjkk', 
      :username => username, :password => password, :scope => '' },
      :verify_ssl => false)

    response = request.execute {|response| $results = response}
    case response.code
      when 200
        puts "Good"

        login_json = JSON.parse(response);
        # retrieve access token & refresh token
        access_token = login_json["access_token"]
        refresh_token = login_json["refresh_token"]
        # set sesssion to token
        session[:access_token] = access_token
        session[:refresh_token] = refresh_token

        cookies[:access_token] = { value: access_token, expires: 2.days.from_now.utc }
        # Render response to client
        render json: { token: session[:access_token], refresh_token: session[:refresh_token] }
      when 401
        render json: { res: response }
        raise "Unauthorized"
      end
  end

  def get_session

    request = RestClient::Request.new(:url => 'https://rallyfy.com/api/session', :method => :get,
      :headers => {:Authorization => "Bearer #{session[:access_token]}"},
      :verify_ssl => false
    )

    response = request.execute {|response| results = response }
    case response.code
      when 200
        puts "Good"

        session_json = JSON.parse(response.body)
        user_id = session_json["data"]["id"]

        session[:user_id] = user_id

        render json: { res: response }
      when 401 || 500
        puts "Bad"
        render json: { res: response }
      end
  end

  def destroy
    session.delete(:access_token)
    session.delete(:refresh_token)
    session.delete(:user_id)
    cookies.delete(:access_token)
    puts "Session destroyed"
  end

end

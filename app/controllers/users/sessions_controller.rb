require 'rest-client'

class Users::SessionsController < Devise::SessionsController
  before_action :configure_sign_in_params, only: [:create]

  # GET /resource/sign_in
  def new
    super
  end

  # POST /resource/sign_in
  def create
    #super
    username = params["email"]
    password = params["password"]

    puts "Username: #{username} Password: #{password}"
    
    loginRes = RestClient::Request.execute(:url => 'https://rallyfy.com/oauth/token', :method => :post,
    :headers => {:content_type => 'application/x-www-form-urlencoded', :accept =>'application/json'},
    :payload => {:grant_type => 'password', :client_id => '2', :client_secret => '9cqArAds1b88m2hypWsmutk2KWPdQUffTHsnEjkk', :username => username, :password => password, :scope => '' },
    :verify_ssl => false)

    puts loginRes
    loginJSON = JSON.parse(loginRes);
    accessToken = loginJSON["access_token"]

    puts "AccessToken: #{accessToken}"

    session["ACCESS_TOKEN"] = accessToken
    
    render json: {data:nil}
    end

  # DELETE /resource/sign_out
  def destroy
    super
  end

  protected

  # If you have extra params to permit, append them to the sanitizer.
  def configure_sign_in_params
    devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  end
end

class Api::FilesController < Api::RallybaseController
  def index
    response = RestClient::Request.execute(method: :get, :url => 'https://rallyfy.com/api/file?schema=Photo',
      :headers => {:Authorization => "Bearer #{session[:access_token]}"},
      :verify_ssl => false 
    )
    render json: { res: response }
  end
end
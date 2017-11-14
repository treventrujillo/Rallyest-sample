class Api::FilesController < Api::RallybaseController
  def index
    response = RestClient::Request.execute(method: :get, :url => 'https://rallyfy.com/api/file?schema',
      :headers => {:Authorization => "Bearer #{session[:access_token]}"},
      :verify_ssl => false 
    )
    render json: { res: response }
  end

  def create
    response = RestClient::Request.execute(
      :method => :post, 
      :url => 'https://rallyfy.com/api/file', 
      :payload => '{"param_1": "1"}',
      :headers => {:Authorization => "Bearer #{session[:access_token]}"},
      :verify_ssl => false
    )
  end
end
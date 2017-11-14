class Api::FilesController < Api::RallybaseController
  def index
    response = RestClient::Request.execute(method: :get, :url => 'https://rallyfy.com/api/file?schema',
      :headers => {:Authorization => "Bearer #{session[:access_token]}"},
      :verify_ssl => false 
    )

    parsed_response = JSON.parse(response.body)

    render json: { res: parsed_response }
  end
end
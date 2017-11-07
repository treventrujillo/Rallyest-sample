class Api::PostsController < Api::RallybaseController

  def index
    response = RestClient::Request.execute(method: :get, :url => 'https://rallyfy.com/api/post',
      :headers => {:Authorization => "Bearer #{session[:access_token]}"},
      :verify_ssl => false 
    )
    response_json = JSON.parse(response.body)
    render json: { res: response_json }
  end

end
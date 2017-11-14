class Api::LabelsController < Api::RallybaseController
  def index
    response = RestClient::Request.execute(method: :get, :url => 'https://rallyfy.com/api/label',
      :headers => {:Authorization => "Bearer #{session[:access_token]}"},
      :verify_ssl => false
    )
    
    render json: { res: response }
  end
end
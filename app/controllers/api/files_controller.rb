class Api::FilesController < Api::RallybaseController
  def index
    response = RestClient::Request.execute(method: :get, :url => 'https://rallyfy.com/api/file?schema',
      :headers => {:Authorization => "Bearer #{session[:access_token]}"},
      :verify_ssl => false 
    )
    render json: { res: response }
  end

  def create
    puts 'Calling Rally API...'
    file = {
      file_type
    }
    request = RestClient::Request.new(
      :method => :post, 
      :url => 'https://rallyfy.com/api/file', 
      :payload => '{"param_1": "1"}',
      :headers => {:Authorization => "Bearer #{session[:access_token]}"},
      :verify_ssl => false
    ).execute do |response, request, result|
      case response.code     
      when 400
        alert ('this doesnt work')
      when 200
        render json: { res: response }
      else
        fail "Invalid response #{response.to_str} received."
      end
    end
  end
end
class Api::FilesController < Api::RallybaseController
  def index
    response = RestClient::Request.execute(method: :get, :url => 'https://rallyfy.com/api/file?schema',
      :headers => {:Authorization => "Bearer #{session[:access_token]}"},
      :verify_ssl => false 
    )
    render json: { res: response }
  end

  def create
    binding.pry
    puts 'Calling Rally API...'
<<<<<<< HEAD
=======
    name = params["name"]
    uri = params["uri"]

>>>>>>> file upload react side functional?
    request = RestClient::Request.new(
      :method => :post, 
      :url => 'https://rallyfy.com/api/file', 
      :payload => {:data => {:attributes => {:name => 'name', :uri => 'uri'}}},
      :headers => {:content_type => 'application/x-www-form-urlencoded', :accept =>'application/json'},
      :verify_ssl => false
    )
    response = request.execute {|response| $results = response}
    case response.code
      when 200
        puts "Good"
        render json: { res: response}
      when 401
        render json: { res: response }
        raise "Unauthorized"
      end
    end
end
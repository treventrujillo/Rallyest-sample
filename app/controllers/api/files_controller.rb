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

    request = RestClient::Request.new(
      :method => :post, 
      :url => 'https://rallyfy.com/api/file', 
      :payload => {:file => params['1'].tempfile, :name => params['1'].original_filename, :fileType => 'image/jpeg', 
      :size => '8160', :ownerUserId => '90002', :ownerGroupId => '47018', :isPublished => '1' },
      :verify_ssl => false,
      :headers => {:Authorization => "Bearer #{session[:access_token]}"}
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
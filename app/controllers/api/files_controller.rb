class Api::FilesController < Api::RallybaseController
  def index
    

    request = RestClient::Request.execute(method: :get, :url => 'https://rallyfy.com/api/file?schema',
      :headers => {:Authorization => "Bearer #{session[:access_token]}"},
      :verify_ssl => false 
    )

    response = request.execute {|response| $results = response }
    case response.code
      when 200
        puts "Good"
        render json: { res: response }
      when 401 || 500
        puts "Bad"
        render json: { res: response }
      end
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
        render json: { res: response }
      when 401
        render json: { res: response }
        raise "Unauthorized"
      end
  end

  def add_label
    puts "Calling Rally API..."

    id = params["id"]
    label_id = params["label"]["id"]

    request = RestClient::Request.new(
      :method => :patch,
      :url => "https://rallyfy.com/api/file/#{id}?action=add",
      :payload => { "data": { "type": "file", "attributes": { "labelIds": ["#{label_id}"]} }}.to_json,
      :headers => {
        :Authorization => "Bearer #{session[:access_token]}", 
        :content_type => 'application/x-www-form-urlencoded',
        :accept => 'application/json',
      },
      :verify_ssl => false,
    )

    response = request.execute {|response| $results = response}
    case response.code
      when 200
        puts "Good"
        render json: { res: response }
      when 401 || 500
        puts "Bad"
        render json: { res: response }
      end
  end

  def remove_label
    puts "Calling Rally API..."

    id = params["id"]
    label_id = params["label"]["id"]

    request = RestClient::Request.new(
      :method => :patch,
      :url => "https://rallyfy.com/api/file/#{id}?action=remove",
      :payload => { "data": { "type": "file", "attributes": { "labelIds": ["#{label_id}"]} }}.to_json,
      :headers => {
        :Authorization => "Bearer #{session[:access_token]}",
        :content_type => 'application/x-www-form-urlencoded',
        :accept => 'application/json',
      },
      :verify_ssl => false,
    )

    response = request.execute {|response| $results = response}
    case response.code
      when 200
        puts "Good"
        render json: { res: response }
      when 401 || 500
        puts "Bad"
        render json: { res: response }
      end
  end

  def destroy
    puts 'Calling Rally API...'
    
    id = params[:id]

    request = RestClient::Request.new(
      :method => :delete,
      :url => "https://rallyfy.com/api/file/#{id}",
      :headers => {:Authorization => "Bearer #{session[:access_token]}"},
      :verify_ssl => false
    )
    
    response = request.execute {|response| $results = response}
    case response.code
      when 200
        puts "Good"
        render json: { res: response }
      when 401 || 500
        puts "Bad"
        render json: { res: response }
      end
  end
end
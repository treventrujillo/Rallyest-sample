class Api::LabelsController < Api::RallybaseController
  def index
    response = RestClient::Request.execute(method: :get, :url => 'https://rallyfy.com/api/label',
      :headers => {:Authorization => "Bearer #{session[:access_token]}"},
      :verify_ssl => false
    )
    render json: { res: response }
  end

  def create
    puts "Calling Rally API..."
    
    name = params["name"]

    request = RestClient::Request.new(
      :method => :post,
      :url => "https://rallyfy.com/api/label",
      :payload => { "data": 
        {
         "type": "label", 
         "attributes": {
            "name": "#{name}", 
            "labelType": "0",
            "groupOwnerId": "47018",
            "includeAlbum": "0",
          }
        }
      }.to_json,
      :headers => {
        :Authorization => "Bearer #{session[:access_token]}",
        :content_type => 'application/json',
        :accept => 'application/json',
      },
      :verify_ssl => false,
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

  def destroy
    puts "Calling rally API..."

    id = params[:id]

    request = RestClient::Request.new(
      :method => :delete,
      :url => "https://rallyfy.com/api/label/#{id}",
      :headers => {:Authorization => "Bearer #{session[:access_token]}"},
      :accept => 'application/json',
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
class Api::PostsController < Api::RallybaseController

  def index
    request = RestClient::Request.new(method: :get, :url => 'https://rallyfy.com/api/post?include=team,items',
      :headers => {:Authorization => "Bearer #{session[:access_token]}"},
      :verify_ssl => false 
    )
    
    response = request.execute {|response| results = response}
    
    case response.code
      when 200
        puts "Good"
        render json: { res: response }
      when 401 || 500
        render json: { res: response }
      end
  end

  def create
    puts "Calling Rally API..."

    message = params[:message]

    request = RestClient::Request.new(
      :method => :post,
      :url => "https://rallyfy.com/api/post",
      :payload => { "data":
      {
        "type": "post",
        "attributes": {
          "submitterId": "90000",
          "submitterGroupId": "47018",
          "message": "#{message}",
          "postType": "3"
        }
      } 
    }.to_json,
    :headers => {
      :Authorization => "Bearer #{session[:access_token]}",
      :content_type => 'application/json',
    },
    :verify_ssl => false
  )

  response = request.execute {|response| results = response}
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
      :url => "https://rallyfy.com/api/posts/#{id}",
      :headers => {:Authorization => "Bearer #{session[:access_tokens]}"},
      :verify_ssl => false
    )

    response = request.execute {|response| $results = response }
    case response.code
      when 200
        puts "Good"
        render json: {res: response}
      when 401 || 500
        puts "Bad"
        render json: { res: response }
    end
  end
end
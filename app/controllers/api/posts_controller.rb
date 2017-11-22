class Api::PostsController < Api::RallybaseController
  def index
    response = RestClient::Request.execute(method: :get, :url => 'https://rallyfy.com/api/post',
      :headers => {:Authorization => "Bearer #{session[:access_token]}"},
      :verify_ssl => false 
    )
    
    render json: { res: response }
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
end
class Api::PostsController < Api::RallybaseController

  def index
    # request = RestClient::Request.new(method: :get, :url => 'https://rallyfy.com/api/post?include=team,items',
    #   :headers => {:Authorization => "Bearer #{session[:access_token]}"},
    #   :verify_ssl => false 
    # )
    
    # response = request.execute {|response| results = response}
    
    # case response.code
      # when 200
      #   puts "Good"
      #   render json: { res: response }
      # when 401 || 500
      #   render json: { res: response }
      # end
    date = Date.today

    # posts = { "data":
    #   {
    #     "type": "post",
    #     "attributes": {
    #       "submitterId": session[:user_id],
    #       "submitterGroupId": "47018",
    #       "message": "yeah",
    #       "postType": "3"
    #     }
    #   } 
    # }

    # puts JSON[posts]

    posts = {
       :data => [
          { 
            :userName => "Sam Abdelfattah",
            :text => "I love Rallyest!",
            :date => date,
            :comments => [],
            :likes => [] 
          }, 
         {
            :userName => "Erik McComb",
            :text => "I hate millennials even though I am one",
            :date => date,
            :comments => [],
            :likes => [] 
          }
        ] 
      }

    render json: { posts: posts }

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
          "submitterId": session[:user_id],
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
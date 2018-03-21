class Api::PostsController < Api::RallybaseController
  before_action :initialize_posts

  def index
    # Requests all posts from the third-party database.

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

    
    render json: { posts: @posts }

  end

  def create
  # Create new post and save it to database

  #   puts "Calling Rally API..."

  #   message = params[:message]

  #   request = RestClient::Request.new(
  #     :method => :post,
  #     :url => "https://rallyfy.com/api/post",
  #     :payload => { "data":
  #     {
  #       "type": "post",
  #       "attributes": {
  #         "submitterId": session[:user_id],
  #         "submitterGroupId": "47018",
  #         "message": "#{message}",
  #         "postType": "3"
  #       }
  #     } 
  #   }.to_json,
  #   :headers => {
  #     :Authorization => "Bearer #{session[:access_token]}",
  #     :content_type => 'application/json',
  #   },
  #   :verify_ssl => false
  # )

  # response = request.execute {|response| results = response}
  # case response.code
  #   when 200
  #     puts "Good"
  #     render json: { res: response }
  #   when 401 || 500
  #     puts "Bad"
  #     render json: { res: response }
  #   end
  end

  def destroy
    # Destroy post in database

    # puts "Calling rally API..."

    # id = params[:id]

    # request = RestClient::Request.new(
    #   :method => :delete,
    #   :url => "https://rallyfy.com/api/posts/#{id}",
    #   :headers => {:Authorization => "Bearer #{session[:access_tokens]}"},
    #   :verify_ssl => false
    # )

    # response = request.execute {|response| $results = response }
    # case response.code
    #   when 200
    #     puts "Good"
    #     render json: {res: response}
    #   when 401 || 500
    #     puts "Bad"
    #     render json: { res: response }
    # end
  end

  private 

    def initialize_posts
      date = Date.today

      @posts = {
       :data => [
          { 
            :userName => "Dr. Cook",
            :text => "There will be a staff meeting on Thursday at 6:00 p.m.",
            :date => date,
            :comments => [],
            :likes => [] 
          }, 
         {
            :userName => "Ms. Greene",
            :text => "Please complete your registration for your programs by the end of this week",
            :date => date,
            :comments => [],
            :likes => [] 
          }
        ] 
      }

    end
end
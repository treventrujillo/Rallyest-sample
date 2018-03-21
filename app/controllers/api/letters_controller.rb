class Api::LettersController < Api::RallybaseController

  # def index
  #   request = RestClient::Request.new(
  #     method: :get,
  #     :url => 'https://rallyfy.com/api/post?filter[postType]=4',
  #     :headers => { :Authorization => "Bearer #{session[:access_token]}"},
  #     :verify_ssl => false,
  #   )

  #   response = request.execute
  #   case response.code
  #     when 200
  #       puts "Good request"
  #       render json: { res: response }
  #     when 500
  #       puts "Bad request"
  #       render json: { res: response }
  #     end
  # end

end
class Api::VerifytokenController < Api::RallybaseController
  def index
    response = super
    binding.pry
    if response === true
      render json: { authenticated: true }
    else
      render json: { authenticated: false }
    end
  end
end

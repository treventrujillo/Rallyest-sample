class Api::VerifytokenController < Api::RallybaseController
  def index
    response = super
    if response === true
      render json: { authenticated: true }
    else
      render json: { authenticated: false }
    end
  end
end

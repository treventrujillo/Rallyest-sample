class Api::RallybaseController < ApplicationController

  def index
    
    binding.pry
    if $session.empty?
      return false
    else
      return true
    end
  end

end

Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  root to: 'static#index'
  
  namespace :api do
  
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end

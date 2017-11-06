Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth', controllers: {sessions: "users/sessions"}
  #mount_devise_token_auth_for 'User', at: 'api/auth'
  
  root to: 'static#index'
  
  namespace :api do
    resources :logins, only: [:create]
    resources :verifytoken, only: [:index]
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end

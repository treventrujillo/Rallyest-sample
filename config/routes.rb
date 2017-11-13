Rails.application.routes.draw do
  namespace :api do
    get 'posts/index'
    get 'files/index'
  end

  mount_devise_token_auth_for 'User', at: 'api/auth', controllers: {sessions: "users/sessions"}
  #mount_devise_token_auth_for 'User', at: 'api/auth'
  
  root to: 'static#index'
  
  get '/verifytoken', as: 'verify', to: 'application#verify'
  
  namespace :api do
    resources :logins, only: [:create]
    resources :posts, only: [:index]
    resources :files, only: [:index]
    get '/verifytoken', as: 'verify', to: 'verifytoken#verify'
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end

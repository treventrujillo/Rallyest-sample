Rails.application.routes.draw do
  root to: 'static#index'
  
  get '/verifytoken', as: 'verify', to: 'application#verify'
  
  namespace :api do
    resources :logins, only: [:create]
    resources :posts, only: [:index]
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end

Rails.application.routes.draw do
  root to: 'static#index'
  
  namespace :api do
    resources :logins, only: [:create]
    resources :posts, only: [:index]
    resources :files, only: [:index]
    resources :labels, only: [:index]
    get '/verifytoken', as: 'verify', to: 'verifytoken#verify'
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end

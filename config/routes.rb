Rails.application.routes.draw do
  root to: 'static#index'
  
  namespace :api do
    resources :logins, only: [:create, :destroy]
    
    resources :posts, only: [:index]

    resources :files, only: [:index, :destroy]
    post '/addlabel', to: 'files#add_label'
    post '/removelabel', to: 'files#remove_label'

    resources :labels, only: [:index, :create, :destroy]

    resources :photos, only: [:index]
    
    post '/upload', to: 'files#create'
    get '/verifytoken', to: 'rallybase#verify'
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end

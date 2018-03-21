Rails.application.routes.draw do
  root to: 'static#index'
  
  namespace :api do
    resources :logins, only: [:create, :destroy]
    get '/session', to: 'sessions#get_session'
    post '/username', to: 'logins#user_name'
    
    resources :posts, only: [:index, :create, :destroy]

    resources :files, only: [:index, :destroy]
    post '/addlabel', to: 'files#add_label'
    post '/removelabel', to: 'files#remove_label'
    post '/holdfiles', to: 'files#new'
    post '/upload', to: 'files#create'

    resources :letters, only: [:index]

    resources :labels, only: [:index, :create, :destroy]

    resources :photos, only: [:index]

    
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end

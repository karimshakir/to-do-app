Todoozy::Application.routes.draw do
  devise_for :users

  root 'static_pages#index'

  namespace :api do
    namespace :v1 do
      resources :to_do_items
    end
  end
end

# gem http source
source 'https://rubygems.org'

# ruby version
ruby '2.4.2'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.1.4'
# Use Puma as the app server
gem 'puma', '~> 3.7'

gem 'omniauth', '~> 1.7.1'
gem 'devise', '~> 4.3.0'
gem 'devise_token_auth', '~> 0.1.42'
gem 'mime-types'
gem 'netrc', '~> 0.11.0'
gem 'http-accept', '~> 1.7.0'
gem 'http-cookie', '~> 1.0.3'
gem 'rest-client', '~> 2.0.2'

group :development, :test do
  gem 'dotenv-rails', require: 'dotenv/rails-now'
  gem 'pry'
end

group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

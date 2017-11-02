class UserMailer < ApplicationMailer
  default from: 'verification@rallyest.com'  
  
  def verification_email(user) 
    @user = user
    @url = 'http://localhost:3000/login'
    mail(to: @user.email, subject: 'Confirm your account')
  end
end

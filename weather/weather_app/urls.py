from django.contrib import admin
from django.urls import path,include
from weather_app.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('register/',UserRegistrationView.as_view(),name='register'),
    path('login/', UserLoginView.as_view(),name='login'),
    path('profile/', UserProfileView .as_view(),name='profile'),
    path('changepassword/', UserChangePasswordView.as_view(),name='UserChangePasswordView'),

    path('send-reset-password-email/', SendPasswordResetEmailView.as_view(),name='send-reset-password-email'),
    path('reset-password/<uid>/<token>/', UserPasswordResetView.as_view(), name='reset-password'),
]
from django.contrib import admin
from django.urls import path,include
from weather_app.views import UserRegistrationView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('register/',UserRegistrationView.as_view(),name='register'),
    path('weather/', WeatherView.as_view(), name='weather'),

]

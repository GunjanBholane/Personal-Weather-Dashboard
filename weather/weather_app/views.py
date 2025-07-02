from django.shortcuts import render
from django.http import HttpRequest
from django.http import HttpResponse

# Create your views here.
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView

class UserRegistrationView(APIView):
    def get(self, request, format=None):
        return Response({'msg': 'Registration Success'})
import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Weather
from .serializers import WeatherSerializer

class WeatherView(APIView):
    def get(self, request, format=None):
        city = request.query_params.get('city', 'Mumbai')

        api_key = 'KEY'  #
        url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric'

        try:
            response = requests.get(url)
            data = response.json()

            if response.status_code != 200 or data.get('cod') != 200:
                return Response({'error': 'City not found'}, status=status.HTTP_404_NOT_FOUND)

            weather = Weather.objects.create(
                city=data['name'],
                temperature=data['main']['temp'],
                description=data['weather'][0]['description'],
                humidity=data['main']['humidity'],
                wind_speed=data['wind']['speed']
            )

            serializer = WeatherSerializer(weather)
            return Response(serializer.data)

        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

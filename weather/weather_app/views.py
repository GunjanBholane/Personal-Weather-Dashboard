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

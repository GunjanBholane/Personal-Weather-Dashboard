from rest_framework import serializers
from weather_app.models import MyUser
from django.utils.encoding import smart_str, force_bytes, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from weather_app.utils import *

class UserRegistrationSerializer(serializers.ModelSerializer):
    # We are writing this because we need confirm password field in our Registration Request
    password2 = serializers.CharField(
        style={'input_type': 'password'}, 
        write_only=True
    )

    class Meta:
        model = MyUser
        fields = ['email', 'name', 'password', 'password2', 'tc']
        extra_kwargs = {
            'password': {'write_only': True}
        }
    def validate(self, attrs):
      password = attrs.get('password')
      password2 = attrs.get('password2')
      if password != password2:
        raise serializers.ValidationError("Password and Confirm Password doesn't match")
      return attrs
    def create(self, validate_data):
       validate_data.pop('password2')  # remove password2

       return MyUser.objects.create_user(**validate_data)
class UserLoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=255)

    class Meta:
        model = MyUser
        fields = ['email', 'password']
class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyUser
        fields = ['id', 'email', 'name']
class UserChangePasswordSerializer(serializers.Serializer):
    password = serializers.CharField(
        max_length=255, 
        style={'input_type': 'password'}, 
        write_only=True
    )
    password2 = serializers.CharField(
        max_length=255, 
        style={'input_type': 'password'}, 
        write_only=True
    )

    class Meta:
        fields = ['password', 'password2']

    def validate(self, attrs):
        password = attrs.get('password')
        password2 = attrs.get('password2')

        if password != password2:
            raise serializers.ValidationError("Password and Confirm Password do not match")

        user = self.context.get('user')
        user.set_password(password)
        user.save()
        return attrs
from rest_framework.exceptions import ValidationError

class SendPasswordResetEmailSerializer(serializers.Serializer):
    email = serializers.EmailField(max_length=255)

    class Meta:
        fields = ['email']

    def validate(self, attrs):
        email = attrs.get('email')
        if MyUser.objects.filter(email=email).exists():
            user = MyUser.objects.get(email=email)
            uid = urlsafe_base64_encode(force_bytes(user.id))
            print('Encoded UID', uid)
            token = PasswordResetTokenGenerator().make_token(user)
            print('Password Reset Token', token)

            link =f'http://127.0.0.1:8000/reset-password/{uid}/{token}/'

            print('Password Reset Link', link)
            body = 'Click Following Link to Reset Your Password ' + link
            data = {
                'subject': 'Reset Your Password',
                'body': body,
                'to_email': user.email
                    }
            Util.send_email(data)


            return attrs
        else:
                raise ValidationError('You are not a Registered User')

class UserPasswordResetSerializer(serializers.Serializer):
    password = serializers.CharField(
        max_length=255, 
        style={'input_type': 'password'}, 
        write_only=True
    )
    password2 = serializers.CharField(
        max_length=255, 
        style={'input_type': 'password'}, 
        write_only=True
    )

    class Meta:
        fields = ['password', 'password2']

    def validate(self, attrs):
     try:
        password = attrs.get('password')
        password2 = attrs.get('password2')
        uid = self.context.get('uid')
        token = self.context.get('token')

        if password != password2:
            raise serializers.ValidationError("Password and Confirm Password do not match")

        id = smart_str(urlsafe_base64_decode(uid))
        user = MyUser.objects.get(id=id)

        if not PasswordResetTokenGenerator().check_token(user, token):
            raise ValidationError('Token is not valid or expired')

        user.set_password(password)
        user.save()
        return attrs
     except DjangoUnicodeDecodeError:
        raise ValidationError('Token is not valid or expired')

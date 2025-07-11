# 🌦️ Personal Weather Dashboard

A Django-based app where users can register, log in using JWT, set their location, and view real-time weather using the OpenWeatherMap API.

---

## ✅ Features

- User registration & login (JWT-based)
- Update location (city + country)
- View current weather (temperature, humidity, condition)
- Protected API endpoints

---

## ⚙️ Setup<img width="1037" height="573" alt="image" src="https://github.com/user-attachments/assets/251edb18-a7f1-4084-b95c-23b30af605bd" />


git clone https://github.com/gunjanbholane/personal-weather-dashboard.git
cd personal-weather-dashboard
python -m venv venv
source venv/bin/activate      # Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

Test with Postman
Register: POST /api/register/

Login: POST /api/token/ → Get JWT token

Update Location: PUT /api/update-location/ (Auth required)

View Weather: GET /api/weather/ (Auth required)

Use Authorization header:
Bearer <access_token>

 Sample Credentials

{
  "email": "testuser@example.com",
  "password": "strongpassword123"
}
 Notes
JWT token expires in 1 hour

Passwords are securely hashed (bcrypt)

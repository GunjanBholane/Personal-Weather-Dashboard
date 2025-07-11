# 🌦️ Weather App - Django + React

A full-stack weather application using **Django** for the backend and **React** for the frontend. Users can register, log in, and view real-time weather by entering a city name.

---

## ✨ Features

- 🔐 User Authentication (JWT)
- 📧 Password Reset via Email
- 🔄 Token-Based Login & Secure Routes
- 🌍 View Current Weather by City Name
- ⚙️ React Frontend + Django REST API Backend

---

## 📁 Project Structure

weather/
├── Frontend/ # React frontend (App.jsx, Weather.jsx, etc.)
├── weather/ # Django project (settings.py, urls.py)
├── weather_app/ # Django app (models.py, views.py, serializers.py)


---

## ⚙️ Backend Setup (Django)

### 1. Create & Activate Virtual Environment


python -m venv venv
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

### 2. Install Python Dependencies
pip install -r requirements.txt
### 3. Configure Environment Variables
Create a .env file in your root folder with:
DJANGO_SECRET_KEY=your-django-secret-key
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-password
EMAIL_FROM=your-email@gmail.com

### python manage.py runserver
⚛️ Frontend Setup (React)
1. Navigate to Frontend Folder

cd Frontend
### 2. Install Node Modules

npm install
### 3. Start React App

npm start
React server will run at: http://localhost:3000

🧪 How to Test the App
✅ Go to /register and create a new user.

🔐 Login at /login.

🔄 On success, you’ll be redirected to /weather.

🌦️ Enter any city to get the weather.

🔁 Test password reset at /send-reset-password-email.

🧾 Sample Credentials
Use these to test quickly:


Email: testuser@gmail.com
Password: TestUser@123
You can also create your own test users.

📦 Backend Requirements
Here’s a sample requirements.txt:


Django>=5.2
djangorestframework
python-dotenv
djangorestframework-simplejwt
corsheaders
To generate:


pip freeze > requirements.txt
🧷 Environment File Example
.env.example:


DJANGO_SECRET_KEY=your-secret-key
EMAIL_USER=youremail@example.com
EMAIL_PASS=your-email-password
EMAIL_FROM=youremail@example.com
📷 Screenshots (Optional)
<img width="893" height="703" alt="image" src="https://github.com/user-attachments/assets/113cfb21-6ffe-4ad9-bbd0-8fee8ab137d3" />
<img width="702" height="741" alt="image" src="https://github.com/user-attachments/assets/3497c5f0-841d-41e7-88ca-9e26009a12b7" />
<img width="796" height="483" alt="image" src="https://github.com/user-attachments/assets/9b53207b-7f58-4dad-b981-61308bb9dccf" />





📜 License
This project is licensed under the MIT License.

🙋‍♀️ Author
Gunjan Yogesh Bholane
Computer Engineering Student | Passionate Developer
📬 gunjanbholane@gmail.com














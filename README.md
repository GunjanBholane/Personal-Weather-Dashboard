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

```bash
python -m venv venv
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activat

### 2. Install Python Dependencies

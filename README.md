
---

```markdown
# 🌦️ Weather App

This is a full-stack web application built using **React** for the frontend and **Django** for the backend. The app allows users to register, log in, and view weather information for a given city.

---

## 🚀 Features

- User Registration & Login (JWT-based authentication)
- Password reset via email
- View current weather after login
- Custom user model using email as username
- React frontend with routing for Register, Login, Profile, and Weather components
- Backend API built with Django REST Framework

---

## 📁 Project Structure

```

weather/
├── Frontend/          # React frontend (App.jsx, Weather.jsx, etc.)
├── weather/           # Django project (settings.py, urls.py)
├── weather\_app/       # Django app (models.py, views.py, serializers.py)

````

---

## ⚙️ Setup Instructions

### 🔹 Backend (Django)

1. **Create and activate a virtual environment:**

```bash
python -m venv venv
source venv/bin/activate    # On Windows: venv\Scripts\activate
````

2. **Install requirements:**

```bash
pip install -r requirements.txt
```

3. **Create a `.env` file** in the root folder and add:

```
DJANGO_SECRET_KEY=your-secret-key
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-password
EMAIL_FROM=your-email@gmail.com
```

> ⚠️ Do NOT commit your `.env` file to GitHub!

4. **Run database migrations:**

```bash
python manage.py migrate
```

5. **Create a superuser (optional):**

```bash
python manage.py createsuperuser
```

6. **Run the Django server:**

```bash
python manage.py runserver
```

---

### 🔹 Frontend (React)

1. Navigate to the `Frontend` directory:

```bash
cd Frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the React dev server:

```bash
npm start
```

> The React app will run on `http://localhost:3000` and Django backend on `http://127.0.0.1:8000`.

---

## 🧪 How to Test

1. **Register a new user** using the Register page (`/register`)
2. **Login** using the Login page (`/login`)
3. On successful login, you'll be redirected to `/weather`
4. Enter your city name to view current weather details
5. Test password reset by entering your email on `/send-reset-password-email/`

---

## 🧾 Sample User Credentials

You can use the following sample credentials to test:

```
Email: testuser@gmail.com
Password: TestUser@123
```

> You can also create your own users through the Register page.

---

## 📦 requirements.txt (Backend)

```
Django>=5.2
djangorestframework
python-dotenv
djangorestframework-simplejwt
corsheaders
```

> You can generate it using:

```bash
pip freeze > requirements.txt
```

---

## 📌 Notes

* JWT tokens are used for user authentication.
* Frontend and backend communicate over REST APIs.
* All API routes are prefixed with `/api/user/`.

---

## 📷 Screenshots

(Add screenshots here if you'd like)

---

## 🛡️ License

This project is licensed under the MIT License.

```

---

Let me know if you want this in a file or want me to auto-generate the `.env.example` and `requirements.txt` too.
```

# Maa Bagalamukhi Temple Nalkheda - Official Backend API

A clean, production-ready, scalable RESTful API backend for the **Maa Bagalamukhi Temple Nalkheda** website. Built using Node.js, Express.js, MongoDB, and Mongoose with clean architecture principles.

---

## 📌 Architecture & Design Principles

The project strictly follows **Clean Architecture** patterns:
- **`config/`**: Database connection setup and environment configurations.
- **`controllers/`**: Core business logic for handling HTTP requests and responses.
- **`middleware/`**: Authentication (JWT), Role authorization, File upload handling (Multer), Request payload validations, and Centralized Error Handling.
- **`models/`**: Mongoose schemas and database collection definitions.
- **`routes/`**: Express route definitions mapping HTTP endpoints to controllers.
- **`utils/`**: Helper utilities, token generators, custom error responses, and data seed scripts.
- **`uploads/`**: Local storage destination for uploaded images (served statically).

---

## 🛠️ Technology Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: Bcrypt.js
- **File Uploads**: Multer
- **Validation**: express-validator
- **Security**: Helmet, CORS
- **Environment Management**: dotenv

---

## 📁 Directory Structure

```
maabaglamukhi/
├── config/
│   └── db.js                 # MongoDB connection setup
├── controllers/
│   ├── authController.js     # Admin auth (login, me, logout)
│   ├── panditController.js   # Pandit Ji CRUD & availability
│   ├── galleryController.js  # Gallery images upload & management
│   ├── noticeController.js   # Notices CRUD
│   └── contactController.js  # Devotee contact submissions
├── middleware/
│   ├── authMiddleware.js     # JWT protection & admin authorization
│   ├── errorMiddleware.js    # Global error handler & 404 handler
│   ├── uploadMiddleware.js   # Multer file upload setup
│   └── validateMiddleware.js # Input validation result inspector
├── models/
│   ├── Admin.js              # Admin schema with bcrypt hooks
│   ├── Pandit.js             # Pandit Ji profile schema
│   ├── Gallery.js            # Gallery photo schema
│   ├── Notice.js             # Notice board schema
│   └── Contact.js            # Contact form schema
├── routes/
│   ├── authRoutes.js         # /api/auth routes
│   ├── panditRoutes.js       # /api/pandits routes
│   ├── galleryRoutes.js      # /api/gallery routes
│   ├── noticeRoutes.js       # /api/notices routes
│   └── contactRoutes.js      # /api/contact routes
├── utils/
│   ├── apiResponse.js        # Standardized API response & ApiError class
│   ├── asyncHandler.js      # Controller async wrapper
│   ├── generateToken.js     # JWT generator helper
│   └── seedData.js           # Database seeder (Admin & PRD dummy pandits)
├── uploads/                  # Uploaded photo files storage
│   └── .gitkeep
├── .env.example              # Environment variables template
├── .env                      # Environment variables configuration
├── .gitignore
├── app.js                    # Express app configuration & middleware binding
├── server.js                 # Server entry point
├── package.json
└── README.md                 # Technical documentation
```

---

## 🚀 Getting Started

### 1. Prerequisites

Make sure you have installed:
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [MongoDB](https://www.mongodb.com/) (Running locally or MongoDB Atlas connection URI)

### 2. Environment Setup

Create a `.env` file in the root directory (or copy from `.env.example`):

```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/maa_bagalamukhi_db
JWT_SECRET=maabagalamukhinalkhedasecretkey123456!
JWT_EXPIRE=30d
ADMIN_DEFAULT_EMAIL=admin@maabagalamukhi.org
ADMIN_DEFAULT_PASSWORD=Admin@123456
```

### 3. Install Dependencies

Run the following command in your terminal:

```bash
npm install
```

### 4. Seed Database (Optional)

The application automatically seeds default Admin credentials and initial Pandit Ji data on startup if the database is empty. You can also run the seed script manually at any time:

```bash
npm run seed
```

Default seeded credentials:
- **Email**: `admin@maabagalamukhi.org`
- **Password**: `Admin@123456`

### 5. Running the Backend Server

- **Development Mode** (with auto-reload via nodemon):
  ```bash
  npm run dev
  ```

- **Production Mode**:
  ```bash
  npm start
  ```

The server will start listening at: `http://localhost:5000`

---

## 📑 API Endpoints Documentation

Base URL: `http://localhost:5000/api`

### 1. 🔑 Authentication (`/api/auth`)

| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/auth/login` | Public | Admin login, returns JWT token |
| `GET` | `/api/auth/me` | Protected | Get profile details of logged-in admin |
| `POST` | `/api/auth/logout` | Protected | Logout response |

**Sample Login Request (`POST /api/auth/login`)**:
```json
{
  "email": "admin@maabagalamukhi.org",
  "password": "Admin@123456"
}
```

**Sample Login Response**:
```json
{
  "success": true,
  "message": "Admin logged in successfully",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6...",
    "admin": {
      "id": "66a012345...",
      "name": "Maa Bagalamukhi Admin",
      "email": "admin@maabagalamukhi.org",
      "role": "admin"
    }
  }
}
```

*Note: For protected endpoints, pass header: `Authorization: Bearer <YOUR_JWT_TOKEN>`*

---

### 2. 📿 Pandit Directory (`/api/pandits`)

| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/pandits` | Public | Get list of Pandits (supports `search`, `available`, `page`, `limit`) |
| `GET` | `/api/pandits/:id` | Public | Get single Pandit details |
| `POST` | `/api/pandits` | Admin | Add new Pandit (supports multipart/form-data with `photo`) |
| `PUT` | `/api/pandits/:id` | Admin | Update Pandit details & photo |
| `DELETE` | `/api/pandits/:id` | Admin | Remove Pandit record & photo |
| `PATCH` | `/api/pandits/:id/availability` | Admin | Toggle Pandit availability status |

---

### 3. 🖼️ Gallery Management (`/api/gallery`)

| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/gallery` | Public | Get gallery items (supports `category`, `page`, `limit`) |
| `POST` | `/api/gallery` | Admin | Upload image to gallery (`multipart/form-data` with `image`) |
| `DELETE` | `/api/gallery/:id` | Admin | Delete gallery image and remove file |

---

### 4. 📢 Notice Board (`/api/notices`)

| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/notices` | Public | Get notices (`activeOnly=true` by default) |
| `GET` | `/api/notices/:id` | Public | Get single notice details |
| `POST` | `/api/notices` | Admin | Create notice (`title`, `description`, `expiryDate`) |
| `PUT` | `/api/notices/:id` | Admin | Update notice details |
| `DELETE` | `/api/notices/:id` | Admin | Delete notice |

---

### 5. 📩 Contact Form Submissions (`/api/contact`)

| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/contact` | Public | Devotee contact form submission |
| `GET` | `/api/contact` | Admin | List contact messages (supports `status` filter) |
| `GET` | `/api/contact/:id` | Admin | Get message details & mark as read |
| `DELETE` | `/api/contact/:id` | Admin | Delete message submission |

---

## 🧪 Postman & cURL Testing Instructions

### Sample cURL Commands

1. **Submit Contact Form (Public)**:
   ```bash
   curl -X POST http://localhost:5000/api/contact \
     -H "Content-Type: application/json" \
     -d '{
       "name": "Ramesh Kumar",
       "email": "ramesh@example.com",
       "mobile": "9876543210",
       "message": "We wish to perform Bagalamukhi Anushthan next month."
     }'
   ```

2. **Admin Login**:
   ```bash
   curl -X POST http://localhost:5000/api/auth/login \
     -H "Content-Type: application/json" \
     -d '{
       "email": "admin@maabagalamukhi.org",
       "password": "Admin@123456"
     }'
   ```

3. **Get Pandit List**:
   ```bash
   curl -X GET http://localhost:5000/api/pandits
   ```

---

## 🛡️ Error Handling Response Standard

All errors are captured by the central error handling middleware and returned in a unified format:

```json
{
  "success": false,
  "message": "Validation Error",
  "errors": [
    {
      "field": "email",
      "message": "Please provide a valid email address"
    }
  ]
}
```

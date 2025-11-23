# ShopHub - E-Commerce App

Modern e-commerce application built with React, Redux Toolkit, and Vite.

---

## ✨ Features

### 🛒 Shopping Basket (Redux)
- Add/remove items
- Increase/decrease quantities
- Auto-calculate total price
- Real-time basket counter in navbar

### 📦 Products
- Browse products with pagination
- View product details
- Stock availability status

### 📝 Registration Form
- Email validation (regex)
- Username (no spaces)
- Password validation (min 8 chars, uppercase, lowercase, digit, special char)
- Example: `P@ssword1234`

### 📧 Contact Form
- Form validation (react-hook-form + yup)
- International phone number support
- Success message on submit

### 🌐 Language Support
- English/Arabic switcher
- RTL layout support

---

## 🛠️ Tech Stack

- React 18
- Redux Toolkit
- React Router
- Bootstrap 5
- React Hook Form + Yup
- Vite

---

## 🚀 Quick Start

```bash
# Install
npm install

# Run
npm run dev

# Build
npm run build
```

---

## 📁 Structure

```
src/
├── components/      # Navbar, Cards, Pagination
├── pages/          # Products, Cart, Register, Contact
├── features/       # Redux slices
├── store/          # Redux store
└── context/        # Language context
```

---

## 🔗 Routes

- `/products` - Product listing
- `/products/:id` - Product details
- `/cart` - Shopping basket
- `/register` - User registration
- `/contact` - Contact form

---

## 👨‍💻 Author

**Mohamed Nasr**  
GitHub: [@mohamed-Nasr-9](https://github.com/mohamed-Nasr-9)

---

Built with ❤️ using React & Redux



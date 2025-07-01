# Steadfast Courier - Front-End Developer Task

This project is a submission for the **Mid-Level Front-End Developer** position at **Steadfast Courier Ltd.**  
It includes the **Product Details Page** and **Cart Page** as described in the assignment, built using **Next.js**, **Tailwind CSS**, and **Redux Toolkit** for state management.

---

## 🛠 Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Redux Toolkit + Redux Persist (Local Storage)
- **API Integration:** Axios
- **Routing:** Next.js Routing
- **Responsive:** Fully responsive across mobile and desktop

---

## 🔗 Live Demo

🔴 [Live Site](https://stead-fast-gold.vercel.app/)

---

## 🚀 Features

### ✅ Product Details Page
- Product image gallery with thumbnails
- Variation-wise cart selection (e.g., Color, RAM, etc.)
- Quantity selector with limits
- “Add to Cart” functionality (stored in local storage using Redux Persist)
- Related items section (from API)
- Description and Specification toggle
- Category information displayed using Category API

### ✅ Cart Page
- Cart item list with:
  - Image
  - Name
  - Color, Size (Variation)
  - Price
  - Quantity update
  - Remove from cart
- Order Summary:
  - Subtotal
  - Total
- Terms & Conditions checkbox
- "Proceed to Checkout" button (disabled if checkbox not checked)

---

## 🔌 API Endpoints Used

- **Categories**: `http://157.230.240.97:9999/api/v1/categories`
- **Products**: `http://157.230.240.97:9999/api/v1/shop/products`
- **Single Product**: `http://157.230.240.97:9999/api/v1/product/[slug]`




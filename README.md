# 🛍️ EliteMart - Modern E-Commerce Web Application

**EliteMart** is a fully responsive, feature-rich e-commerce web application built with **React 18** and **Material UI (MUI v6)**. It delivers a seamless online shopping experience with dynamic product browsing, real-time search & filtering, detailed product views, and a modern, visually appealing UI.

> **🌐 Live Demo:** [https://elite-mart-ruddy.vercel.app/](https://elite-mart-ruddy.vercel.app/)

---

## ✨ Features

### 🏠 Landing & Navigation
- **Hero Section** - Full-screen welcome banner with brand messaging and background imagery.
- **Responsive Navbar** - Collapsible hamburger menu on mobile; smooth hover effects on desktop; logo + quick links (Home, About, Shop).
- **Persistent Footer** - Logo, tagline, quick links, social media icons (Facebook, Instagram, Twitter), and contact information.

### 🛒 Product Catalog
- **Category Filtering** - Chip-based category selector to filter products instantly.
- **Live Search** - Real-time text search across product titles.
- **Smart Product Cards** - Each card displays: product image, title, brand, tags, price, discount percentage, and star rating.
- **No Data State** - Graceful "no results" component when filters yield no matches.

### 📄 Product Detail Page
- **Image Gallery** - Clickable thumbnail strip with full-size image preview.
- **Detailed Info Panel** - Brand, title, rating, review count, discount badge, original vs. discounted price, shipping information.
- **Specifications Table** - Description, warranty information, return policy, and availability status.

### ℹ️ About Page
- **About Us Section** - Brand story, mission statement, and value propositions.
- **Call-to-Action Banner** - Eye-catching promotional banner with "Start Shopping" CTA button.

### 🚫 404 Error Page
- Custom illustrated 404 page with humorous copy ("This Page is Out of Stock – But Our Homepage Isn't!") and a "Go Home" button.

### 🎨 UI/UX Highlights
- **Material UI v6** - Consistent, modern component library with theming.
- **Fully Responsive** - Optimized for mobile, tablet, and desktop viewports.
- **Custom Brand Colors** - Signature orange (#F14C25) accent throughout.
- **Fade-in Animations** - Smooth entry animations on key sections.
- **CSS Grid & Flexbox** - Clean, adaptive layouts via MUI's Grid2 and Box components.

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | UI library (component-based architecture) |
| **React Router DOM v7** | Client-side routing (SPA navigation) |
| **Material UI (MUI) v6** | UI component library with icons & emotion styling |
| **Axios** | HTTP client for API requests |
| **Styled Components** | CSS-in-JS styling (used alongside MUI) |
| **Moment.js** | Date formatting utilities |
| **CSS3** | Custom styles & global resets |
| **DummyJSON API** | Mock product data (1,000+ products) |
| **Vercel** | Deployment & hosting |

---

## 📸 Screenshots

| Home Page – Hero | Shop Page – Product Grid |
|:---:|:---:|
| <img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/e1490afe-c7f1-41e3-9897-913018fae68e" /> | <img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/6f16a184-8441-495d-9508-17fee99136c3" /> |

| Product Detail | About Page |
|:---:|:---:|
| <img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/d12e733e-41c3-40e9-b867-149930101c71" /> | <img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/a1b58c2e-3e81-4217-8d73-e138f2717d7b" /> |

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** v16+ & **npm** v8+ (or **pnpm**)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/pavithrabhat9/-EliteMart.git
cd -EliteMart

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
```

Creates an optimized production build in the `build/` folder.

---

## 📁 Project Structure

```
EliteMart/
├── public/                          # Static assets
│   ├── index.html                   # HTML entry point
│   ├── favicon.ico                  # Browser favicon
│   ├── manifest.json                # PWA manifest
│   ├── robots.txt                   # SEO crawler rules
│   ├── e-bazaar.png                 # Brand logo
│   ├── icon.png / logo192/512.png   # App icons
│   └── ...
├── src/
│   ├── index.js                     # React DOM entry
│   ├── index.css                    # Global styles
│   ├── App.js                       # Root component + routing
│   ├── App.css                      # App-level styles
│   │
│   ├── Assets/
│   │   └── Images/                  # Static image assets
│   │       ├── EMlogo.png           # Navbar logo
│   │       ├── bg5.jpg              # Hero background
│   │       ├── banner1.jpg          # Banner background
│   │       ├── bg8.jpg              # About section image
│   │       ├── 404Page.png          # Error illustration
│   │       └── nopage2.webp         # Alternative 404 image
│   │
│   ├── Components/                  # Reusable UI components
│   │   ├── NavBar.jsx               # Responsive navigation bar
│   │   ├── Footer.jsx               # Site footer with links & socials
│   │   ├── Hero.jsx                 # Landing page hero section
│   │   ├── Banner.jsx               # Call-to-action promotional banner
│   │   ├── AboutContent.jsx         # About Us content block
│   │   ├── ProductCard.jsx          # Product grid card
│   │   └── NoData.jsx               # Empty state placeholder
│   │
│   └── Pages/                       # Route-level page components
│       ├── Home.jsx                 # Landing page (Hero + About + Banner)
│       ├── Shop.jsx                 # Product catalog with search & filters
│       ├── SingleProduct.jsx        # Product detail view
│       ├── About.jsx                # About page
│       └── Error.jsx                # 404 not-found page
├── package.json                     # Dependencies & scripts
├── README.md                        # You are here 📘
└── .gitignore                       # Git exclusion rules
```

---

## 🧩 Key Components

| Component | Description |
|---|---|
| **NavBar** | Fixed-position app bar with logo, responsive hamburger menu, and page links styled with hover transitions. |
| **Hero** | Full-viewport hero with background image, brand headline ("Welcome to EliteMart"), tagline, and descriptive copy. |
| **Banner** | Section with background image + dark overlay, CTA heading, description, and "Start Shopping" button navigating to `/shop`. |
| **AboutContent** | Split layout with image and text; highlights brand values, product categories, and service promises. |
| **ProductCard** | Material UI Paper card showing thumbnail, title, brand, tags, price with discount strikethrough, discount %, and rating chip. Wraps in a `<Link>` to the product detail page. |
| **NoData** | Placeholder shown when search/filter yields zero results. |
| **Footer** | Three-column layout: logo + tagline, quick links, social icons + contact details; copyright notice. |

---

## 📦 Dependencies

### Core
| Package | Version | Purpose |
|---|---|---|
| `react` | ^18.3.1 | UI library |
| `react-dom` | ^18.3.1 | React DOM renderer |
| `react-router-dom` | ^7.0.2 | Client-side routing |

### UI & Styling
| Package | Version | Purpose |
|---|---|---|
| `@mui/material` | ^6.2.0 | Material UI component library |
| `@mui/icons-material` | ^6.2.0 | Material Design icons |
| `@emotion/react` | ^11.14.0 | CSS-in-JS engine (MUI peer dep) |
| `@emotion/styled` | ^11.14.0 | Styled component API for MUI |
| `styled-components` | ^6.1.13 | Additional CSS-in-JS styling |

### Data & Utilities
| Package | Version | Purpose |
|---|---|---|
| `axios` | ^1.7.9 | HTTP client for API calls |
| `moment` | ^2.30.1 | Date/time formatting |
| `web-vitals` | ^2.1.4 | Performance metrics |

### Testing
| Package | Version | Purpose |
|---|---|---|
| `@testing-library/react` | ^16.1.0 | React component testing |
| `@testing-library/jest-dom` | ^5.17.0 | Custom DOM matchers |
| `@testing-library/user-event` | ^13.5.0 | Simulated user events |

---

## 📜 Available Scripts

| Script | Command | Description |
|---|---|---|
| `start` | `npm start` | Runs the app in development mode on port 3000 |
| `build` | `npm run build` | Creates an optimized production build in `build/` |
| `test` | `npm test` | Launches the test runner in interactive watch mode |
| `eject` | `npm run eject` | Ejects from Create React App (one-way operation) |

---

## 🌍 Deployment

This application is deployed on **Vercel**. The live site is accessible at:

👉 **[https://elite-mart-ruddy.vercel.app/](https://elite-mart-ruddy.vercel.app/)**

### Deploy Your Own

1. Push the repository to GitHub (or GitLab / Bitbucket).
2. Import the project into [Vercel](https://vercel.com/).
3. Vercel will automatically detect Create React App settings.
4. Click **Deploy** — your app will be live in seconds.

---

## 📄 License

This project is **private** and was developed for educational/demonstration purposes. 

---

<p align="center">
  Built with ❤️ using <strong>React</strong> & <strong>Material UI</strong>
</p>

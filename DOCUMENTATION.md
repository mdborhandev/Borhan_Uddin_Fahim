# 📄 Website Documentation
## Mohammed Borhan Uddin Fahim — Personal Portfolio Website

---

## 📋 Table of Contents

1. [Project Overview](#1-project-overview)
2. [File Structure](#2-file-structure)
3. [Technologies & Dependencies](#3-technologies--dependencies)
4. [Website Sections](#4-website-sections)
   - [Hero Section](#41-hero-section)
   - [About Section](#42-about-section)
   - [Services Section](#43-services-section)
   - [Stats Section](#44-stats-section)
   - [Skills Section](#45-skills-section)
   - [Resume Section](#46-resume-section)
   - [Projects Section](#47-projects-section)
   - [Contact Section](#48-contact-section)
   - [CV Preview Section](#49-cv-preview-section)
   - [Footer](#410-footer)
5. [Navigation](#5-navigation)
6. [CSS Design System](#6-css-design-system)
7. [JavaScript Features & Functionality](#7-javascript-features--functionality)
8. [Responsive Design](#8-responsive-design)
9. [Personal Information & Social Links](#9-personal-information--social-links)
10. [Projects Portfolio](#10-projects-portfolio)
11. [Professional Experience & Education](#11-professional-experience--education)
12. [Skills & Technologies](#12-skills--technologies)
13. [Contact & Email Integration](#13-contact--email-integration)

---

## 1. Project Overview

| Property        | Details                                                  |
|-----------------|----------------------------------------------------------|
| **Website Name**| Mohammed Borhan Uddin Fahim — Personal Portfolio         |
| **Type**        | Single-Page Application (SPA) Portfolio Website          |
| **Purpose**     | Personal portfolio to showcase skills, projects, resume  |
| **Owner**       | Mohammed Borhan Uddin Fahim                              |
| **Role**        | Software Engineer / ASP.NET Core Developer               |
| **GitHub Repo** | https://github.com/mdborhandev/Borhan_Uddin_Fahim.git   |
| **Copyright**   | © 2025 All Rights Reserved                              |

---

## 2. File Structure

```
Borhan_Uddin_Fahim/
│
├── index.html                        # Main HTML file (single-page)
├── README.md                         # Project readme
├── DOCUMENTATION.md                  # This documentation file
│
├── assets/
│   ├── css/
│   │   └── main.css                  # Main stylesheet (1256 lines)
│   │
│   ├── js/
│   │   └── main.js                   # Main JavaScript file (230 lines)
│   │
│   ├── img/
│   │   ├── Borhan.png                # Profile photo (also used as favicon)
│   │   ├── Borhan-Fahim-Resume.pdf   # Downloadable resume / CV preview
│   │   ├── apple-touch-icon.png      # Apple touch icon
│   │   ├── favicon.png               # Browser favicon
│   │   ├── fahad.jpg                 # Testimonial/reference image
│   │   ├── masud.jpg                 # Testimonial/reference image
│   │   ├── roman.png                 # Testimonial/reference image
│   │   └── sowrap.jpg                # Testimonial/reference image
│   │
│   ├── scss/
│   │   └── Readme.txt                # SCSS readme notes
│   │
│   └── vendor/
│       ├── bootstrap/
│       │   ├── css/bootstrap.min.css
│       │   └── js/bootstrap.bundle.min.js
│       ├── bootstrap-icons/
│       │   └── bootstrap-icons.css
│       └── aos/
│           ├── aos.css
│           └── aos.js
│
└── forms/
    ├── contact.php                   # PHP contact form handler
    └── Readme.txt                    # Forms readme notes
```

---

## 3. Technologies & Dependencies

### Frontend Stack

| Technology          | Version / Source                                      | Purpose                          |
|---------------------|-------------------------------------------------------|----------------------------------|
| **HTML5**           | Standard                                              | Page structure & markup          |
| **CSS3**            | Custom (`main.css`)                                   | Styling, animations, layout      |
| **JavaScript (ES6)**| Custom (`main.js` + inline in `index.html`)           | Interactivity & dynamic features |
| **Bootstrap 5**     | v5.3.3 (local vendor)                                 | Responsive grid & components     |
| **Bootstrap Icons** | Local vendor                                          | Icon library                     |
| **AOS**             | Local vendor (Animate On Scroll)                      | Scroll-triggered animations      |
| **EmailJS**         | CDN: `cdn.jsdelivr.net/npm/@emailjs/browser@4`        | Contact form email sending       |

### Fonts

| Font Family   | Weights         | Usage                        |
|---------------|-----------------|------------------------------|
| **Outfit**    | 300,400,500,600,700,800 | Primary body & heading font |
| **Space Mono**| 400, 700        | Tech stack / monospace text  |

> Fonts loaded via Google Fonts CDN.

---

## 4. Website Sections

### 4.1 Hero Section

**ID:** `#hero`  
**Class:** `.hero-section`

The full-viewport landing section with animated content.

| Element                | Description                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| **Name**               | Mohammed Borhan Uddin Fahim (gradient text)                                 |
| **Typed Tagline**      | Cycles through: "Software Engineer", "ASP.NET Core Developer", "Backend Developer" |
| **Typed Sub-text**     | Cycles through: "Building enterprise solutions with clean architecture", "Backend Developer \| ASP.NET Core Specialist", "Software Engineer \| SaaS Architect" |
| **Social Links**       | LinkedIn, GitHub, Instagram, Facebook, Email, Resume Download               |
| **CTA Buttons**        | "Explore More" (scroll to About), "Toggle Theme" (dark/light mode)          |
| **Availability Badge** | "Open to Work" with animated green pulse indicator                          |
| **Tech Badges**        | API, SaaS, Cloud                                                            |
| **Tech Stack Tags**    | ASP.NET Core, Web API, PostgreSQL, Clean Architecture                       |
| **Scroll Indicator**   | Animated chevron-down arrow linking to `#about`                             |
| **Background**         | Radial gradient overlays with floating orb animations                       |

---

### 4.2 About Section

**ID:** `#about`  
**Class:** `.section`

| Element           | Content                                                                 |
|-------------------|-------------------------------------------------------------------------|
| **Profile Photo** | `assets/img/Borhan.png` — circular with accent border & glow           |
| **Title**         | Software Engineer \| ASP.NET Core Developer                             |
| **Description**   | "Building scalable enterprise solutions with clean architecture, secure APIs, and optimized database performance." |
| **Location**      | Chattogram, Bangladesh                                                  |
| **Phone**         | 01906750597                                                             |
| **Email**         | mdborhan.dev@gmail.com                                                  |
| **LinkedIn**      | linkedin.com/in/borhan-uddin-fahim                                      |
| **Experience**    | 2+ Years                                                                |
| **Status**        | Available for Work                                                      |

---

### 4.3 Services Section

**ID:** `#services`  
**Class:** `.section`

Three service cards offered:

| Service                  | Icon                  | Description                                                                                   |
|--------------------------|-----------------------|-----------------------------------------------------------------------------------------------|
| **Custom Web Software**  | `bi-laptop`           | Tailored web applications built with specific business needs using ASP.NET Core               |
| **SaaS Development**     | `bi-cloud-check`      | Scalable multi-tenant SaaS apps with Clean Architecture, RBAC, payment integration, cloud     |
| **Website Building**     | `bi-globe`            | Responsive, modern websites with clean design, optimal performance, and SEO-friendly structure |

---

### 4.4 Stats Section

**ID:** `#stats`  
**Class:** `.section .stats-section`

Animated counter statistics (count-up animation on scroll into view):

| Stat              | Value | Icon                    |
|-------------------|-------|-------------------------|
| Active Users      | 200+  | `bi-people`             |
| Major Projects    | 6+    | `bi-journal-richtext`   |
| Years Experience  | 2+    | `bi-code-slash`         |
| Students Mentored | 40+   | `bi-mortarboard`        |

---

### 4.5 Skills Section

**ID:** `#skills`  
**Class:** `.section`

Skills organized into 5 categories displayed as tag pills:

#### Backend
- ASP.NET Core MVC & Web API
- C#
- Entity Framework Core
- RESTful API & JWT
- ASP.NET Web API
- LINQ

#### Database
- PostgreSQL
- SQL Server
- MySQL
- Query Optimization
- Database Design

#### Frontend
- HTML5 & CSS3
- JavaScript
- Bootstrap
- Tailwind
- jQuery

#### DevOps & Tools
- Git & GitHub
- Swagger
- Docker
- Azure
- IIS

#### Architecture
- Clean Architecture
- SOLID Principles
- Repository Pattern
- Dependency Injection
- MVC Pattern

---

### 4.6 Resume Section

**ID:** `#resume`  
**Class:** `.section`

#### Experience

| Period                  | Role               | Company                              | Highlights                                                                                                      |
|-------------------------|--------------------|--------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| March 2024 – Present    | Junior Programmer  | Genuine Technology & Research Ltd.  | Developed SaaS-based HRM system for 200+ users; Built RESTful APIs with JWT auth; Implemented RBAC & approval workflows; Optimized API response by 30% |
| Dec 2023 – Feb 2024     | Guest Trainer      | A K Khan UCEP TVET Institute         | Trained 40+ students in Frontend Dev; HTML, CSS, JavaScript training                                           |

#### Education

| Period    | Degree                        | Institution                          | GPA         |
|-----------|-------------------------------|--------------------------------------|-------------|
| 2020–2024 | Diploma in Computer Science   | A K Khan UCEP Polytechnic Institute  | 3.82 / 4.0  |
| 2020      | Secondary School Certificate  | West Kadhurkhil School & College     | 3.94 / 5.0  |

---

### 4.7 Projects Section

**ID:** `#projects`  
**Class:** `.section`

Filterable project cards with categories: **All**, **ERP/Finance**, **HRM**, **Productivity**

| Project                          | Category    | Icon               | Description                                                                                                    | Tech Stack                                          |
|----------------------------------|-------------|--------------------|----------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| **ERP – Enterprise Resource Planning** | ERP/Finance | `bi-building`  | Comprehensive enterprise ERP for business process management including inventory, supply chain, HR, finance, and operational workflows | ASP.NET Core MVC \| Web API \| EF Core \| PostgreSQL |
| **Atrai – Accounting Software**  | ERP/Finance | `bi-calculator`    | Full-featured accounting software for financial management, invoicing, expense tracking, ledger management, and financial reporting | ASP.NET Core MVC \| Web API \| EF Core \| PostgreSQL |
| **Halda – SaaS HRM Platform**    | HRM         | `bi-people`        | Employee management, payroll, attendance & performance modules with RBAC                                       | ASP.NET Core MVC \| Web API \| EF Core \| PostgreSQL |
| **OKR – Goal & Task Management** | Productivity| `bi-bar-chart`     | OKR-based team goal tracking with performance dashboards                                                       | ASP.NET Core MVC \| EF Core \| PostgreSQL            |
| **SmartSLead – Lead Management** | Productivity| `bi-lightbulb`     | Comprehensive lead management for sales pipeline                                                               | ASP.NET Core MVC \| EF Core \| PostgreSQL            |
| **Gym Management**               | HRM         | `bi-heart-pulse`   | Comprehensive gym management system for member tracking, attendance, membership plans, and workout scheduling   | ASP.NET Core MVC \| EF Core \| PostgreSQL            |

---

### 4.8 Contact Section

**ID:** `#contact`  
**Class:** `.section`

#### Contact Information

| Field       | Value                                    |
|-------------|------------------------------------------|
| Location    | Chattogram, Bangladesh                   |
| Phone       | 01906750597                              |
| Email       | mdborhan.dev@gmail.com                   |
| LinkedIn    | linkedin.com/in/borhan-uddin-fahim       |

#### Contact Form Fields

| Field     | Type     | Required |
|-----------|----------|----------|
| Name      | text     | ✅ Yes   |
| Email     | email    | ✅ Yes   |
| Subject   | text     | ✅ Yes   |
| Message   | textarea | ✅ Yes   |

> Form submission is handled via **EmailJS** (Service ID: `service_vxkwckv`, Template ID: `template_txkht7q`, Public Key: `UfmpMSg2KlcJjyIX0`).

---

### 4.9 CV Preview Section

**ID:** `#cv`  
**Class:** `.section`

Embeds the PDF resume directly in the browser using an `<embed>` tag.

- **File:** `assets/img/Borhan-Fahim-Resume.pdf`
- **Height:** 700px
- **Also available for download** from the Hero section social links

---

### 4.10 Footer

**Class:** `.footer`

| Element         | Content                                                                 |
|-----------------|-------------------------------------------------------------------------|
| Name            | Mohammed Borhan Uddin Fahim                                             |
| Tagline         | Backend-focused Software Engineer                                       |
| Social Links    | LinkedIn, GitHub, Instagram, Facebook, Email                            |
| Copyright       | © 2025 All Rights Reserved                                             |

---

## 5. Navigation

### Desktop Navigation (Floating Sidebar)

Visible on screens **≥ 992px**. Fixed to the right side of the viewport, vertically centered.

| Icon              | Section Link  | Bootstrap Icon         |
|-------------------|---------------|------------------------|
| Home              | `#hero`       | `bi-house`             |
| About             | `#about`      | `bi-person`            |
| Services          | `#services`   | `bi-briefcase`         |
| Skills            | `#skills`     | `bi-gear`              |
| Resume            | `#resume`     | `bi-file-earmark-text` |
| Projects          | `#projects`   | `bi-hdd-stack`         |
| CV                | `#cv`         | `bi-file-earmark-pdf`  |
| Contact           | `#contact`    | `bi-envelope`          |

- Active state is highlighted with accent color and glow effect
- Active link updates automatically on scroll via JavaScript scrollspy

### Mobile Navigation (Slide-in Menu)

Visible on screens **< 992px**. Triggered by a hamburger icon (`bi-list`) fixed at top-right.

- Slides in from the right (70–88% width depending on screen size)
- Contains the same 8 navigation links with icons and text labels
- Closes automatically when a link is clicked (`closeMenu()`)

---

## 6. CSS Design System

### Color Palette

#### Dark Theme (Default)

| Variable          | Value                          | Usage                        |
|-------------------|--------------------------------|------------------------------|
| `--bg-primary`    | `#0a0a0f`                      | Main background              |
| `--bg-secondary`  | `#12121a`                      | Section alternate background |
| `--bg-card`       | `#1a1a25`                      | Card backgrounds             |
| `--text-primary`  | `#ffffff`                      | Headings & primary text      |
| `--text-secondary`| `#a0a0b0`                      | Body text & labels           |
| `--accent`        | `#00d4ff`                      | Cyan accent color            |
| `--accent-glow`   | `rgba(0, 212, 255, 0.4)`       | Glow effects                 |
| `--border`        | `rgba(255, 255, 255, 0.08)`    | Card/element borders         |
| `--gradient`      | `linear-gradient(135deg, #00d4ff 0%, #7b2cbf 100%)` | Cyan-to-purple gradient |
| `--glass`         | `rgba(255, 255, 255, 0.05)`    | Glassmorphism backgrounds    |
| `--shadow-3d`     | `0 20px 60px rgba(0,0,0,0.4)` | 3D card shadows              |

#### Light Theme (Toggled)

| Variable          | Value                              | Usage                        |
|-------------------|------------------------------------|------------------------------|
| `--bg-primary`    | `#f5f8ff`                          | Main background              |
| `--bg-secondary`  | `#ecf2ff`                          | Section alternate background |
| `--bg-card`       | `#ffffff`                          | Card backgrounds             |
| `--text-primary`  | `#0d1b2a`                          | Headings & primary text      |
| `--text-secondary`| `#4f5d75`                          | Body text & labels           |
| `--accent`        | `#246bff`                          | Blue accent color            |
| `--gradient`      | `linear-gradient(135deg, #246bff 0%, #6a5cff 100%)` | Blue-to-purple gradient |

### Typography

| Element   | Font Family | Weight | Size                    |
|-----------|-------------|--------|-------------------------|
| Body      | Outfit      | 400    | Default (1rem)          |
| h1–h4     | Outfit      | 700    | Varies                  |
| Hero Name | Outfit      | 700    | 3rem (desktop), 1.8rem (mobile) |
| Tech Stack| Space Mono  | 400    | 0.85rem                 |
| Lead text | Outfit      | 400    | 1.1rem                  |

### Key CSS Animations

| Animation Name      | Description                                      | Duration     |
|---------------------|--------------------------------------------------|--------------|
| `fadeInUp`          | Elements fade in while moving up                 | 0.6s         |
| `floatOrb`          | Background orbs float up and down                | 9s / 12s     |
| `floatCard`         | 3D floating cards subtle movement                | 5s           |
| `pulse-animation`   | Green pulse ring for "Open to Work" badge        | 2s infinite  |
| `blink`             | Cursor blink for typed text effect               | 1s infinite  |
| `bounce`            | Scroll indicator arrow bouncing                  | 2s infinite  |

### Animation Delay Classes

| Class         | Delay  |
|---------------|--------|
| `.delay-200`  | 0.2s   |
| `.delay-400`  | 0.4s   |
| `.delay-600`  | 0.6s   |
| `.delay-800`  | 0.8s   |

---

## 7. JavaScript Features & Functionality

All primary JavaScript is written inline in `index.html`. The `assets/js/main.js` file contains legacy template code (from BootstrapMade MyResume template) that is not actively used in the current implementation.

### Active JavaScript Features (inline in `index.html`)

#### 1. Mobile Menu Toggle
```javascript
function toggleMenu()  // Opens/closes the mobile slide-in menu
function closeMenu()   // Closes the mobile menu
```

#### 2. AOS (Animate On Scroll) Initialization
```javascript
AOS.init({ duration: 600, easing: 'ease-out', once: true });
```
Triggers CSS animations when elements scroll into the viewport.

#### 3. Typing Effect (Custom Implementation)
```javascript
function typeText(selector, items)
```
- Simulates a typewriter effect with delete-and-retype cycling
- **Tagline cycles:** "Software Engineer" → "ASP.NET Core Developer" → "Backend Developer"
- **Sub-text cycles:** 3 different professional descriptions
- Type speed: 60ms/char | Delete speed: 30ms/char | Pause: 2000ms

#### 4. Stats Counter Animation
- Uses `IntersectionObserver` to detect when stats section enters viewport
- Counts up from 0 to target value over ~50 increments at 30ms intervals
- Appends `+` suffix when complete

#### 5. Active Navigation Scrollspy
- Listens to `window.scroll` event
- Highlights the corresponding floating nav icon based on current scroll position
- Offset: 200px from section top

#### 6. EmailJS Contact Form
```javascript
emailjs.init("UfmpMSg2KlcJjyIX0");
emailjs.sendForm('service_vxkwckv', 'template_txkht7q', formElement)
```
- Prevents default form submission
- Shows "Sending..." state on button
- Alerts success or failure
- Resets form on success

#### 7. 3D Tilt Effect on Cards
- Applied to: `.project-card`, `.resume-card`, `.stat-item`
- Uses `mousemove` event to calculate cursor position relative to card
- Applies `perspective(900px) rotateX() rotateY() translateY(-6px)` transform
- Resets on `mouseleave`

#### 8. Theme Toggle (Dark / Light Mode)
- Toggles `.light-theme` class on `<body>`
- Persists preference in `localStorage` under key `site-theme`
- Updates button icon: `bi-moon-stars` (dark) ↔ `bi-sun` (light)

#### 9. Project Filter
- Filter buttons: All, ERP/Finance, HRM, Productivity
- Shows/hides `.project-item` elements based on `data-category` attribute
- Active filter button gets gradient background

#### 10. Back to Top Button
- Appears when `window.scrollY > 300`
- Smooth scrolls to top on click
- CSS transition for show/hide with opacity and transform

#### 11. Cursor Glow Effect
- Tracks mouse position via `mousemove` event
- Moves a 220px radial gradient circle following the cursor
- Hidden on mobile (`display: none` at ≤768px)

---

## 8. Responsive Design

### Breakpoints

| Breakpoint       | Screen Width     | Key Changes                                                                 |
|------------------|------------------|-----------------------------------------------------------------------------|
| **Mobile Small** | ≤ 420px          | Smaller padding, wider mobile menu (88%), reduced button padding            |
| **Mobile**       | ≤ 576px          | Hero name 1.8rem, social links wrap, skill category styled differently      |
| **Tablet**       | ≤ 768px          | Hero auto height, sections 60px padding, cursor glow hidden, scroll indicator hidden, about info stacks vertically |
| **Tablet-Desktop**| 769px–1199px    | Hero 3D cards repositioned to right: 2%                                     |
| **Desktop**      | ≥ 992px          | Floating nav visible, hamburger menu hidden                                 |
| **Large Desktop**| ≥ 1200px         | Hero 3D cards at right: 7%                                                  |

### Grid System
- Uses Bootstrap 5's 12-column grid
- Cards: `col-12 col-md-6` (projects), `col-12 col-md-4` (services/skills)
- About: `col-12 col-md-4` (image) + `col-12 col-md-8` (content)
- Contact: `col-12 col-md-5` (info) + `col-12 col-md-7` (form)

---

## 9. Personal Information & Social Links

| Platform    | URL / Value                                          |
|-------------|------------------------------------------------------|
| **LinkedIn**| https://www.linkedin.com/in/borhan-uddin-fahim/      |
| **GitHub**  | https://github.com/mdborhandev                       |
| **Instagram**| https://www.instagram.com/iamborhan07/              |
| **Facebook**| https://www.facebook.com/iamborhan07/                |
| **Email**   | mdborhan.dev@gmail.com                               |
| **Phone**   | 01906750597                                          |
| **Location**| Chattogram, Bangladesh                               |
| **Resume**  | `assets/img/Borhan-Fahim-Resume.pdf` (downloadable) |

---

## 10. Projects Portfolio

### Summary

| # | Project Name                    | Category     | Key Features                                                    |
|---|---------------------------------|--------------|-----------------------------------------------------------------|
| 1 | ERP – Enterprise Resource Planning | ERP/Finance | Inventory, supply chain, HR, finance, operational workflows     |
| 2 | Atrai – Accounting Software     | ERP/Finance  | Invoicing, expense tracking, ledger management, financial reports|
| 3 | Halda – SaaS HRM Platform       | HRM          | Employee mgmt, payroll, attendance, performance, RBAC           |
| 4 | OKR – Goal & Task Management    | Productivity | OKR-based goal tracking, performance dashboards                 |
| 5 | SmartSLead – Lead Management    | Productivity | Sales pipeline lead management                                  |
| 6 | Gym Management                  | HRM          | Member tracking, attendance, membership plans, workout scheduling|

### Common Tech Stack Across Projects
- **Framework:** ASP.NET Core MVC
- **API:** Web API (RESTful)
- **ORM:** Entity Framework Core
- **Database:** PostgreSQL
- **Auth:** JWT Authentication
- **Architecture:** Clean Architecture, RBAC

---

## 11. Professional Experience & Education

### Work Experience

#### Junior Programmer — Genuine Technology & Research Ltd.
- **Period:** March 2024 – Present
- **Key Achievements:**
  - Developed SaaS-based HRM system serving 200+ active users
  - Built RESTful APIs with JWT authentication
  - Implemented Role-Based Access Control (RBAC) and approval workflows
  - Optimized API response time by 30%

#### Guest Trainer — A K Khan UCEP TVET Institute
- **Period:** December 2023 – February 2024
- **Key Achievements:**
  - Trained 40+ students in Frontend Development
  - Covered HTML, CSS, and JavaScript curriculum

### Education

#### Diploma in Computer Science
- **Institution:** A K Khan UCEP Polytechnic Institute
- **Period:** 2020 – 2024
- **GPA:** 3.82 / 4.0

#### Secondary School Certificate (SSC)
- **Institution:** West Kadhurkhil School & College
- **Year:** 2020
- **GPA:** 3.94 / 5.0

---

## 12. Skills & Technologies

### Proficiency Overview

| Category         | Technologies                                                                 |
|------------------|------------------------------------------------------------------------------|
| **Backend**      | ASP.NET Core MVC & Web API, C#, Entity Framework Core, RESTful API & JWT, LINQ |
| **Database**     | PostgreSQL, SQL Server, MySQL, Query Optimization, Database Design           |
| **Frontend**     | HTML5 & CSS3, JavaScript, Bootstrap, Tailwind CSS, jQuery                   |
| **DevOps/Tools** | Git & GitHub, Swagger, Docker, Azure, IIS                                   |
| **Architecture** | Clean Architecture, SOLID Principles, Repository Pattern, Dependency Injection, MVC Pattern |

---

## 13. Contact & Email Integration

### EmailJS Configuration

| Setting         | Value                    |
|-----------------|--------------------------|
| **Public Key**  | `UfmpMSg2KlcJjyIX0`      |
| **Service ID**  | `service_vxkwckv`        |
| **Template ID** | `template_txkht7q`       |
| **Library CDN** | `@emailjs/browser@4`     |

### Form Behavior
1. User fills in Name, Email, Subject, Message
2. On submit: button changes to "Sending..." and is disabled
3. EmailJS sends the form data to the configured email template
4. On success: alert shown, form reset, button re-enabled
5. On failure: error alert shown, button re-enabled

### Alternative Contact Methods
- **Direct Email:** mdborhan.dev@gmail.com
- **Phone:** 01906750597
- **LinkedIn:** linkedin.com/in/borhan-uddin-fahim

---

## 📝 Notes

- The `assets/js/main.js` file is a legacy file from the **BootstrapMade MyResume** template (updated Jun 29, 2024 with Bootstrap v5.3.3). The current website uses custom inline JavaScript in `index.html` instead.
- The `forms/contact.php` file is a PHP-based contact form handler that is not actively used; the site uses EmailJS for contact form submission.
- The `assets/scss/` directory contains SCSS source files (with a Readme.txt), but the compiled CSS in `assets/css/main.css` is the active stylesheet.
- Theme preference (dark/light) is persisted in the browser's `localStorage`.

---

*Documentation generated: May 2026*  
*Website: Mohammed Borhan Uddin Fahim — Personal Portfolio*

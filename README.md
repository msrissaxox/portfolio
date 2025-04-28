## Live Project
<a href="https://www.marissalamothe.dev" target="_blank"> Marissa Lamothe's Portfolio</a>
## Marissa Lamothe's Portfolio

This portfolio is a reflection of my work in development. It includes a biography about me, my professional background, and how the user can get connected to me. 

## Features
- Scroll-to-top button: Smoothly scrolls the page back to top after scrolling down.
- Responsive Layout: Optimized for desktop and mobile views using Tailwind CSS
- Basic Error Handling: Displays user-friendly messages on form errors
## Tech Stack
- React: For building the user interface
- TypeScript: For static typing, allowing for better code organization
- Next.js: For server-side rendering and routing
- Tailwind CSS: For styling
- AWS: For hosting and deployment
- React Hook Form: For form submission and validation
- React Hooks (useState, useEffect): For managing component state and side effects 
- Framer Motion: For animations

## Getting Started
- Clone the Repository
```bash
git clone https://github.com/msrissaxox/portfolio.git
```
- Navigate into the project directory
``` bash
cd portfolio
```
- Install dependencies
``` bash
npm install
```
- Start the development server
```bash
npm run dev
```
- Open in browser: https://localhost:3000

## How It Works

- User Input
The user can navigate the home page, learn more about Marissa Lamothe, and contact her through the contact page

- Contact Form
The contact form is located on another page. The user can route to the contact page through Next.js routing. The user can send a message to Marissa through the contact form. The form utilizes EmailJS and React Hook Form for form submission. The form is then submitted through EmailJS to reach Marissa's inbox directly. The form captures the user's first name, last name, email and message. These are all required fields.  

- Error Handling
If an error occurs, it is logged, and an appropriate message is shown to the user.

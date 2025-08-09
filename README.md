# CodeIQ Digital Agency Website

This is a Next.js project for the CodeIQ Digital Agency, a modern and professional website designed to showcase their software development services.

## Overview

The website is built with Next.js, TypeScript, and Tailwind CSS, following modern web development best practices. It's designed to be visually appealing, interactive, and fully responsive.

### Core Features

- **Engaging Home Page**: A dynamic hero section, service highlights, client testimonials, and a project showcase.
- **Comprehensive About Us Section**: Details on the company's mission, values, and founders.
- **Dedicated Service Pages**: In-depth information about Web Development, Mobile App Development, and UI/UX Design services.
- **Interactive Portfolio**: A filterable grid of past projects with detailed modals.
- **Contact Form**: A fully functional contact form with validation and user feedback.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (with App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn/ui](https://ui.shadcn.com/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Animations**: [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate)

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## Project Structure

The project follows the standard Next.js App Router structure.

- `src/app/(main)`: Contains the main pages of the application (Home, About, Services, etc.). The `(main)` is a route group to apply the main layout without affecting the URL.
- `src/components`: Contains reusable React components, separated into `layout`, `sections`, `shared`, and `ui` (from Shadcn).
- `src/lib`: Contains utility functions, constants, and other shared logic.
- `src/app/globals.css`: Contains global CSS and theme definitions.
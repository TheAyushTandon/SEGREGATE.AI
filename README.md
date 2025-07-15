SEGREGATE.AI
This project is an AI-powered waste classification system that uses computer vision to detect and categorize waste into four categories using image input. It is designed to assist in automating the process of waste segregation by analyzing garbage images and classifying them using a deep learning model trained on various types of waste images.
Now works with both image and text identification!
SegregateAI Website
A modern, responsive website for SegregateAI - an AI-powered waste segregation application.

Features
Multi-page website with Home, About, Awareness, App Download, and Team pages

Responsive design that works on all devices

Modern UI with Tailwind CSS and shadcn/ui components

Optimized performance with Next.js 14

SEO-friendly structure

Getting Started
Prerequisites
Node.js 18+

npm or yarn

Installation
Clone or download this repository

Install dependencies:

npm install
Run the development server:

npm run dev
Open http://localhost:3000 in your browser

Building for Production
npm run build
npm start
Project Structure

segregateai-website/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── awareness/         # Awareness page
│   ├── app/               # App download page
│   ├── team/              # Team page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── layout/            # Layout components
│   │   ├── navigation.tsx # Header navigation
│   │   └── footer.tsx     # Footer
│   └── ui/                # shadcn/ui components
├── public/                # Static assets
│   └── images/            # Image files
├── lib/                   # Utility functions
└── package.*

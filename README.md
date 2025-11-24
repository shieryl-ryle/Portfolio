# Shieryl Tendilla - Portfolio Website

A minimalist portfolio website showcasing my work as a Data Engineer and Software Developer. Built with Next.js, React, and TypeScript.

## 🚀 About

Welcome to my portfolio! I'm Shieryl Tendilla, a Data Engineer and Software Developer passionate about transforming raw data into meaningful insights and building scalable applications. This portfolio showcases my projects, experience, and skills in data engineering, web development, and mobile applications.

## ✨ Features

- **Modern Design**: Clean, minimalist interface with dark/light mode support
- **Responsive Layout**: Fully responsive design that works on all devices
- **Project Showcase**: Interactive portfolio section with category filtering
- **Skills Display**: Visual skill progression bars
- **Contact Form**: Integrated contact form with email functionality
- **Certifications & Awards**: Dedicated section for certifications and achievements
- **Resume Download**: Easy access to download my CV

## 🛠️ Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## 📦 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or pnpm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shieryl-ryle/minimalist-portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```
   Or if using pnpm:
   ```bash
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   Or:
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
minimalist-portfolio/
├── app/                    # Next.js app directory
│   ├── api/               # API routes (contact form)
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main page
├── components/            # React components
│   ├── about-section.tsx
│   ├── certifications-section.tsx
│   ├── contact-section-new.tsx
│   ├── portfolio-section.tsx
│   ├── profile-sidebar.tsx
│   ├── resume-section.tsx
│   └── ui/               # Reusable UI components
├── lib/
│   ├── portfolio-data.ts  # All portfolio content
│   └── utils.ts          # Utility functions
├── public/               # Static assets
│   ├── demo/            # Demo videos
│   └── *.png, *.jpg     # Images and logos
└── package.json
```

## 🎨 Customization

All portfolio content is managed in `lib/portfolio-data.ts`. You can customize:

- **Profile Information**: Name, title, contact details, social links
- **About Section**: Description, services, testimonials, companies
- **Resume**: Education, experience, skills
- **Portfolio**: Projects with images, descriptions, and links
- **Certifications & Awards**: Your achievements and credentials
- **Contact**: Contact information and map location

## 📧 Contact Form Setup

The contact form is configured to send emails via Resend API. To enable it:

1. Sign up at [Resend](https://resend.com) (free tier available)
2. Get your API key from the dashboard
3. Create a `.env.local` file in the root directory:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   CONTACT_EMAIL=tendilla.shieryl@gmail.com
   ```
4. Restart the development server

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Add environment variables if using the contact form
4. Deploy!

### Build for Production

```bash
npm run build
npm start
```

## 📱 Sections

- **About**: Introduction and services
- **Resume**: Education, experience, and downloadable CV
- **Portfolio**: Projects categorized by type (data engineering, applications, web development)
- **Certifications & Awards**: Certifications and recognitions
- **Contact**: Contact information and map

## 🤝 Contributing

This is my personal portfolio, but feel free to fork it and customize it for your own use!

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Shieryl Tendilla**

- GitHub: [@shieryl-ryle](https://github.com/shieryl-ryle)
- LinkedIn: [shieryltendilla](https://www.linkedin.com/in/shieryltendilla/)
- Email: tendillashieryle@gmail.com

---

Built with ❤️ using Next.js and TypeScript

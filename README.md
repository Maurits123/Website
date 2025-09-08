# Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features dark mode, smooth animations, and a clean, professional design.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode**: System preference detection with manual toggle
- **Accessibility**: Semantic HTML, proper ARIA labels, keyboard navigation
- **Animations**: Smooth transitions with Framer Motion
- **TypeScript**: Full type safety throughout the application
- **Modern Stack**: Next.js 14 with App Router

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── about/
│   │   ├── projects/
│   │   └── contact/
│   └── components/
│       ├── Header.tsx
│       ├── Footer.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── ProjectCard.tsx
│       ├── ProjectsGrid.tsx
│       └── ThemeProvider.tsx
├── data/
│   ├── profile.json
│   └── projects.json
├── public/
└── package.json
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Personal Information

Update your personal information in the data files:

**`data/profile.json`**:
```json
{
  "name": "Your Name",
  "tagline": "Your Professional Tagline",
  "email": "your.email@example.com",
  "bio": "Your bio description...",
  "socials": [
    {
      "name": "GitHub",
      "url": "https://github.com/yourusername",
      "icon": "github"
    }
  ]
}
```

**`data/projects.json`**:
```json
[
  {
    "id": 1,
    "title": "Project Title",
    "description": "Project description...",
    "tags": ["Technology", "Framework"],
    "link": "https://github.com/yourusername/project",
    "image": "/images/project1.jpg"
  }
]
```

### Styling

The website uses Tailwind CSS for styling. You can customize:

- Colors in `tailwind.config.js`
- Global styles in `src/app/globals.css`
- Component styles using Tailwind utility classes

### Contact Form

The contact form is currently set up with a placeholder. To integrate with Formspree:

1. Sign up at [Formspree](https://formspree.io/)
2. Create a new form and get your form endpoint
3. Update the form action in `src/app/contact/page.tsx`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/portfolio)

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📱 Pages

- **Home** (`/`): Hero section, about preview, featured projects
- **Projects** (`/projects`): Complete project showcase
- **About** (`/about`): Detailed bio, skills, education
- **Contact** (`/contact`): Contact form and information

## 🎨 Design System

### Colors
- Primary: Blue (#2563eb)
- Secondary: Gray (#6b7280)
- Background: White/Gray-900 (dark mode)

### Typography
- Headings: Inter font family
- Body: Inter font family
- Scale: 4xl, 3xl, 2xl, xl, lg, base

### Components
- Cards with rounded corners and shadows
- Buttons with hover states
- Form inputs with focus states
- Responsive navigation

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Support

If you have any questions or need help, please open an issue or contact me directly.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS


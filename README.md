# Mphstar 💫

Welcome to the official repository of [Mphstar](https://www.mphstar.me/)!  
Mphstar is a personal/portfolio website built with Next.js, Tailwind CSS, and various modern web technologies.

## 🚀 Live Demo

🌐 [Visit Website](https://www.mphstar.me)

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **SEO**: next-sitemap
- **Deployment**: Vercel

## 📁 Project Structure

```
.
├── public/                # Static files
├── src/                   # Main source code
│   └── components/        # Reusable UI components
├── next.config.js         # Next.js configuration
├── next-sitemap.config.js # Sitemap config for SEO
├── tailwind.config.js     # Tailwind CSS config
├── package.json
└── README.md
```

## 🔧 Setup & Development

### 1. Clone the repo

```bash
git clone https://github.com/mphstar/portfolio-website.git
cd mphstar
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

### 5. Generate sitemap

```bash
npm run postbuild
# or
npx next-sitemap
```

## 📦 Available Scripts

```bash
npm run dev         # Start development server
npm run build       # Build for production
npm run start       # Start production server
npm run postbuild   # Generate sitemap & robots.txt
```

## 🛍️ Sitemap & SEO

This project uses [`next-sitemap`](https://github.com/iamvishnusankar/next-sitemap) for generating SEO-friendly sitemap and robots.txt.

Ensure `next-sitemap.config.js` is present at root and run:

```bash
npx next-sitemap
```

Generated files will be available in the `public/` directory.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

Feel free to fork and contribute. Cheers! 🍻


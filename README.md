# IMPRUTHVI Portfolio

Personal portfolio and blog website of Pruthvisinh Rajput (IMPRUTHVI) - A full-stack developer passionate about building scalable web applications.

## 🚀 Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [TailwindCSS](https://tailwindcss.com/)
- **Content:** [MDX](https://mdxjs.com/) with [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote)
- **UI Components:** [Radix UI](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Forms:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Email:** [Resend](https://resend.com/)
- **Analytics:** [Vercel Analytics](https://vercel.com/analytics)
- **Deployment:** [Vercel](https://vercel.com/)

## ✨ Features

- 🎨 Modern, clean design with dark mode support
- 📝 MDX-powered blog with syntax highlighting
- 💼 Project showcase
- 📧 Contact form with email integration
- 🔍 Search functionality for blog posts
- 📱 Fully responsive design
- ⚡ Optimized for performance and SEO
- 🎯 Type-safe with TypeScript

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Resend account (for contact form)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/impruthvi/portfolio-md.git
cd portfolio-md
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
bun install
```

3. Create a `.env.local` file based on `.env.example`:

```bash
cp .env.example .env.local
```

4. Add your environment variables to `.env.local`:

```env
RESEND_API_KEY=your_resend_api_key
RESEND_AUDIENCE_ID=your_audience_id
NEXT_PUBLIC_URL=http://localhost:3000
```

5. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
bun dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
portfolio-md/
├── app/                      # Next.js App Router pages
│   ├── posts/               # Blog posts pages
│   ├── projects/            # Projects pages
│   ├── contact/             # Contact page
│   └── privacy/             # Privacy policy page
├── actions/                  # Server actions
│   ├── actions.ts           # Email actions
│   ├── posts.ts             # Blog post utilities
│   └── projects.ts          # Project utilities
├── components/              # React components
│   ├── ui/                  # Shadcn UI components
│   └── ...                  # Feature components
├── content/                 # MDX content
│   ├── posts/              # Blog post MDX files
│   └── projects/           # Project MDX files
├── lib/                    # Utilities and schemas
├── public/                 # Static assets
│   └── images/            # Images for posts, projects, authors
└── emails/                # Email templates
```

## 📝 Adding Content

### Adding a Blog Post

1. Create a new `.mdx` file in `content/posts/`:

```mdx
---
title: Your Post Title
summary: A brief summary of your post
image: /images/posts/your-image.webp
author: 'Pruthvisinh Rajput'
publishedAt: '2025-11-25'
---

Your content here...
```

2. Add images to `public/images/posts/`

### Adding a Project

1. Create a new `.mdx` file in `content/projects/`:

```mdx
---
title: Your Project Title
summary: A brief description
image: /images/projects/your-image.webp
author: 'Pruthvisinh Rajput'
publishedAt: '2025-11-25'
---

Your project details...
```

2. Add images to `public/images/projects/`

## 🚀 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables
4. Deploy!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Pruthvisinh Rajput (IMPRUTHVI)**

- Website: [impruthvi.me](https://impruthvi.me)
- GitHub: [@impruthvi](https://github.com/impruthvi)
- LinkedIn: [Pruthvisinh Rajput](https://www.linkedin.com/in/pruthvisinh-rajput-9a4711194/)
- Twitter: [@impruthvi13](https://twitter.com/impruthvi13)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Radix Icons](https://www.radix-ui.com/icons) and [Lucide](https://lucide.dev/)

---

⭐ If you found this helpful, please consider giving it a star!

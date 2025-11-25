# Portfolio Customization Guide

Welcome! This guide will help you personalize your portfolio. All the customization happens in one main file: `lib/portfolio-data.ts`

## Quick Start

1. **Open** `lib/portfolio-data.ts` - This is where all your content lives
2. **Replace placeholder text** with your own information
3. **Add your images** to the `/public` folder
4. **Update metadata** in `app/layout.tsx` for SEO

## Step-by-Step Customization

### 1. Profile Information (Sidebar)

Update your personal details in `profileData`:
- **Name**: Your full name
- **Title**: Your professional title (e.g., "Data Engineer", "Software Developer")
- **Avatar**: Add your profile photo to `/public` folder and update the path (e.g., `/shieryl-avatar.jpg`)
- **Email & Phone**: Your contact information
- **Birthday**: Your date of birth (optional, can be removed)
- **Location**: Your city/location
- **Social Links**: Update GitHub, LinkedIn, Instagram URLs
  - GitHub, LinkedIn, and Instagram are currently supported
  - To add more social links, update `components/profile-sidebar.tsx`

### 2. About Section

Update `aboutData`:
- **Description**: Write 2-3 paragraphs about yourself as an array of strings
- **Services**: Update the service cards with what you offer
  - Available icons: `Code`, `Zap`, `Smartphone`, `PenTool`
  - You can add/remove services as needed
- **Testimonials**: Replace with real testimonials
  - Each testimonial should have `name` and `text`
  - `avatar` is optional
- **Companies**: Add company logos you've worked with
  - Each company needs `name` and `logo` (image path)
  - Add logo images to `/public` folder

### 3. Resume Section

Update `resumeData`:

- **Education**: List your educational background
  - `title`: Institution name
  - `period`: Date range (e.g., "2021 — 2025")
  - `description`: Array of strings with bullet points

- **Experience**: Add your work history
  - `title`: Job title and company
  - `period`: Employment period
  - `description`: Array of strings with bullet points

- **Skills**: Organized by categories (no percentages)
  - **core**: Your primary, highlighted skills (displayed with accent color)
  - **databases**: Database technologies
  - **devops**: DevOps and management tools
  - **webBackend**: Web and backend technologies
  
  Skills are displayed as badges in the profile sidebar, with core skills highlighted.

### 4. Portfolio Section

Update `portfolioData`:

- **Categories**: Customize project categories to match your work
- **Projects**: Add your projects with:
  - `title`: Project name
  - `category`: One of your defined categories
  - `image`: Project image path (add to `/public` folder)
  - `description`: Brief project description
  - `tech`: Array of technologies used
  - `liveUrl`: Live demo URL or media file path (for images/videos)
    - If it's a media file (.mov, .mp4, .jpg, etc.), it will open in a modal
    - If it's a URL, it will open in a new tab
    - Leave empty string if no live demo
  - `githubUrl`: GitHub repository URL

### 5. Certifications & Awards Section

Update `certificationsData`:

- **Certifications**: List your certifications
  - `title`: Certification name
  - `issuer`: Organization that issued it
  - `date`: Date obtained
  - `credentialId`: Optional certificate ID
  - `credentialUrl`: Optional link to verify/view certificate

- **Awards**: List your awards and recognitions
  - `title`: Award name
  - `issuer`: Organization that awarded it
  - `date`: Date received
  - `description`: Optional description of the award

### 6. Blog Section

Update `blogData`:

The blog section displays your blog posts. Each post links to an external URL (like LinkedIn articles, Medium posts, etc.).

**Blog Post Structure:**
```typescript
{
  title: 'Your Blog Post Title',
  url: 'https://your-blog-url.com/posts/your-post', // External URL to your blog post
  category: 'Data Engineering', // Category tag
  date: 'Nov 15, 2025', // Publication date
  readTime: '5 min read', // Estimated read time
  excerpt: 'A brief description of your blog post...', // Short summary
  image: '/blog/blog-post-image.png', // Featured image (add to /public/blog/)
  tags: ['data engineering', 'python'], // Optional: array of tags
}
```

**Note**: 
- Blog posts open in a new tab when clicked
- Add blog post images to `/public/blog/` folder
- Leave `posts` array empty if you don't have a blog

### 7. Contact Section

Update `contactData`:

- **Email & Phone**: Your contact information
- **Location**: Your location
- **mapEmbedUrl**: Google Maps embed URL
  - Go to Google Maps
  - Search for your location
  - Click "Share" > "Embed a map"
  - Copy only the `src` URL from the iframe (not the full iframe tag)

## Skills Display

Skills are organized by categories and displayed in the profile sidebar:
- **Core Skills**: Highlighted with accent color badges
- **Other Categories**: Displayed with standard badges
- No percentages or progress bars - clean, simple skill tags

## Adding Images

1. Add your images to the `/public` folder
2. Reference them in the data file using `/filename.png`
3. Supported formats: PNG, JPG, SVG, WebP

**Image Recommendations:**
- **Avatar**: Square image, at least 400x400px
- **Project Images**: 1200x800px or similar aspect ratio (4:3)
- **Blog Images**: 1200x600px or similar (16:9 aspect ratio for featured images)
- **Company Logos**: Transparent PNGs work best, size appropriately
- **Demo Videos**: MP4, MOV, or WebM format, add to `/public/demo/` folder

## Portfolio Project Previews

Projects can have different types of previews:

1. **Media Files** (images/videos): Opens in a modal lightbox
   - Supported: `.jpg`, `.png`, `.gif`, `.webp`, `.svg`, `.mp4`, `.mov`, `.webm`
   - Example: `liveUrl: '/demo/insightify-demo.MOV'`

2. **Web URLs**: Opens in a new tab
   - Example: `liveUrl: 'https://your-app.com'`

3. **Empty**: No preview button shown
   - Example: `liveUrl: ''`

## Removing Sections

If you don't want certain sections:

1. **Testimonials**: Remove the testimonials array or leave it empty
2. **Companies**: Remove the companies array or leave it empty
3. **Blog**: Leave the posts array empty (section will show "No blog posts yet")
4. **Birthday**: Remove the birthday field from profileData
5. **Certifications/Awards**: Leave arrays empty to hide sections

## Social Media Links

The portfolio currently supports:
- GitHub
- LinkedIn
- Instagram

To add more social links:
1. Add the link to `profileData.social` in `portfolio-data.ts`
2. Import the icon from `lucide-react` in `components/profile-sidebar.tsx`
3. Add a new social link button in the social links section

## Site Metadata

Update `app/layout.tsx`:
- **Title**: Your name and title (e.g., "Shieryl Tendilla - Data Engineer")
- **Description**: Brief description for SEO and social sharing

## PDF Resume Download

1. Add your resume PDF to `/public` folder
2. Name it something like `YourName_CV.pdf` or `resume.pdf`
3. Update the download link in `components/resume-section.tsx` to match your filename
   - Current: `href="/Shieryl_Tendilla_CV.pdf"`

## Contact Form Setup (Optional)

The contact form sends emails via Resend API:

1. Sign up at [Resend](https://resend.com)
2. Get your API key from the dashboard
3. Create a `.env.local` file in the root directory:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   CONTACT_EMAIL=your-email@gmail.com
   ```
4. Restart the development server

## Testing Your Changes

1. Run `npm run dev` to start the development server
2. Visit `http://localhost:3000` to see your changes
3. Make adjustments as needed
4. Check all sections:
   - Profile sidebar with skills
   - About section with testimonials and companies (marquee animation)
   - Resume with education and experience
   - Portfolio with project filters
   - Certifications & Awards
   - Blog posts (if any)
   - Contact form

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and sign in with GitHub
3. Click "Add New Project"
4. Import your repository
5. Add environment variables (if using contact form):
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
6. Click "Deploy"

Your portfolio will be live at `https://your-project.vercel.app`

Happy customizing! 🚀

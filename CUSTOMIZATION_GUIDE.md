# Portfolio Customization Guide for My Co Scholar!

Welcome! This guide will help you personalize your portfolio template. All the customization happens in one main file: `lib/portfolio-data.ts`

## Quick Start

1. **Open** `lib/portfolio-data.ts` - This is where all your content lives
2. **Look for TODO comments** - These mark exactly what needs to be customized
3. **Replace placeholder text** with your own information
4. **Add your images** to the `/public` folder

## Step-by-Step Customization

### 1. Profile Information (Sidebar)

Update your personal details:
- **Name**: Your full name
- **Title**: Your professional title (e.g., "Software Engineer", "UI/UX Designer")
- **Avatar**: Add your profile photo to `/public` folder and update the path
- **Email & Phone**: Your contact information
- **Location**: Your city/location
- **Social Links**: Update GitHub, Twitter, Instagram URLs (remove ones you don't use)

### 2. About Section

- **Description**: Write 2-3 paragraphs about yourself, your background, and what you do
- **Services**: Update the 4 service cards with what you offer
  - Available icons: `Code`, `Zap`, `Smartphone`, `PenTool`
  - You can add/remove services as needed
- **Testimonials**: Replace with real client testimonials (or remove if you don't have any)
- **Clients**: Add company logos you've worked with (or remove this section)

### 3. Resume Section

- **Education**: List your educational background
- **Experience**: Add your work history with job titles, dates, and descriptions
- **Skills**: List your skills with proficiency levels (0-100)

### 4. Portfolio Section

- **Categories**: Customize project categories to match your work
- **Projects**: Add your projects with:
  - Title and description
  - Project image (add to `/public` folder)
  - Technologies used
  - Live URL (if available)
  - GitHub URL (if public)

### 5. Blog Section (Optional)

- Replace with your blog posts, or
- Leave empty if you don't have a blog
- Each post needs: title, category, date, image, excerpt, tags, and slug

### 6. Contact Section

- Update email and phone
- Get a Google Maps embed URL for your location:
  1. Go to Google Maps
  2. Search for your location
  3. Click "Share" > "Embed a map"
  4. Copy the iframe src URL

### 7. Site Metadata

Update `app/layout.tsx`:
- **Title**: Your name and title
- **Description**: Brief description for SEO

## Adding Images

1. Add your images to the `/public` folder
2. Reference them in the data file using `/filename.png`
3. Supported formats: PNG, JPG, SVG

**Image Recommendations:**
- **Avatar**: Square image, at least 400x400px
- **Project Images**: 1200x800px or similar aspect ratio
- **Blog Images**: 1200x600px
- **Client Logos**: Transparent PNGs work best

## Removing Sections

If you don't want certain sections:

1. **Testimonials**: Remove the testimonials array or leave it empty
2. **Clients**: Remove the clients array
3. **Blog**: Leave the posts array empty
4. **Birthday**: Remove the birthday field from profileData

## Social Media Links

The template includes GitHub, Twitter, and Instagram. To add more:
1. Add the link to `profileData.social` in `portfolio-data.ts`
2. Update `components/profile-sidebar.tsx` to display the new icon

## Need Help?

- Check the TODO comments in `lib/portfolio-data.ts` for inline guidance
- All placeholder text is clearly marked
- You can always remove sections you don't need

## Testing Your Changes

1. Run `pnpm dev` to start the development server
2. Visit `http://localhost:3000` to see your changes
3. Make adjustments as needed

Happy customizing! 🚀


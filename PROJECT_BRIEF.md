# Yoma Portfolio - Project Brief

## Project Goal
Build a clean, minimal developer portfolio website today. Inspired by vrajved.tech and akinkunmi's portfolio - straight to the point, no fluff.

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- SCSS (no Tailwind)
- Dev.to API for blog
- Vercel for deployment

## Design Direction
- Minimal, clean layout
- Light theme (like the references)
- Typography-focused
- No animations or fancy stuff
- Responsive

## Pages & Content

### 1. HOME (/)
**Top Section:**
- Large name: "Yoma"
- Subtitle: "SOFTWARE ENGINEER"
- Social links: GitHub | LinkedIn | Email

**Intro:**
```
Hey, I'm Yoma! I'm a software engineer based in Lagos, Nigeria 
and obsessed with building products.

I work mainly in Web Development, and I'm always eager to learn 
new things as required of me, with a strong focus on building 
scalable products and systems that solve real problems.
```

**Current Section:**
```
Current
Graduate of Obafemi Awolowo University, learning new things 
and building products.
```

### 2. PROJECTS (/projects)
**Title:** "Things I have worked on"

**Initial Projects:**
1. **Digital Logbook**
   - Description: [Add your description]
   - Tech: React, Node.js, MongoDB (example)
   - Links: Live | GitHub

2. **NFCS OAU**
   - Description: [Add your description]  
   - Tech: Next.js, TypeScript (example)
   - Links: Live | GitHub

**Layout:** Vertical list with left border accent (like image 3)

### 3. RESUME (/resume)
- Embedded PDF viewer (iframe)
- Download Resume button
- PDF file location: `/public/resume.pdf`

### 4. BLOG (/blog)
**Data Source:** Dev.to API
- Endpoint: `https://dev.to/api/articles?username=YOUR_USERNAME`
- Display: Title, published date, brief excerpt
- Link to full article on Dev.to

**Layout:** Simple list of articles

### 5. CONTACT (/contact)
**Contact Links:**
- Email: lawrenceyoma@gmail.com
- GitHub: https://github.com/DevYoma
- LinkedIn: https://www.linkedin.com/in/ogheneyoma-emore-87a8341b3/

Simple centered layout with links.

## Navigation
**Position:** Top right
**Links:** Home | Projects | Resume | Blog | Contact
**Style:** Clean, underlined on hover

## What We're NOT Including
- ❌ GitHub contribution graph
- ❌ "Latest commit" display
- ❌ Experience timeline
- ❌ Interests section
- ❌ Footer CTA about apprenticeships
- ❌ Dark mode toggle (for now)
- ❌ Complex animations

## File Structure
```
app/
├── page.tsx              # Home
├── projects/
│   └── page.tsx         # Projects list
├── resume/
│   └── page.tsx         # Resume viewer
├── blog/
│   └── page.tsx         # Dev.to feed
├── contact/
│   └── page.tsx         # Contact info
├── layout.tsx           # Root layout with navbar
└── globals.scss         # Global styles

components/
├── Navbar.tsx           # Navigation
└── Footer.tsx           # Simple footer (optional)

styles/
├── variables.scss       # SCSS variables
└── mixins.scss         # SCSS mixins

public/
└── resume.pdf          # Your resume file
```

## Timeline
**Today** - Get it done:
1. Setup & Navbar (30 min)
2. Home page (1 hour)
3. Projects page (1 hour)
4. Resume page (30 min)
5. Blog integration (1 hour)
6. Contact page (30 min)
7. Polish & deploy (1 hour)

## Deployment
- Host on Vercel
- Domain: yoma.xyz or devyoma.xyz
- SSL automatic
- Deploy from GitHub

## Success Criteria
✅ Clean, readable design
✅ All 5 pages functional
✅ Dev.to blog integration working
✅ Resume downloadable
✅ Mobile responsive
✅ Fast load times
✅ Deployed and live

---

*Reference sites:*
- https://www.vrajved.tech/
- https://akinkunmi.dev/ (assumed from screenshot)

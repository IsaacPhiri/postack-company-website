**File Structure**

```
/company-website
│
├── /components                  # Your React components
│   ├── /Hosting                 # Hosting-related components
│   │   └── HostingServiceRequestForm.tsx
│   ├── /Navbar                  # Navbar component
│   │   └── Navbar.tsx
│   └── /Footer                  # Footer component
│       └── Footer.tsx
│
├── /pages                       # Your pages (Next.js pages)
│   ├── /api                     # API routes for your forms
│   │   └── contact.ts
│   ├── index.tsx                # The main page (Home page)
│   ├── about.tsx                # About Us page
│   ├── services.tsx             # Services page
│   ├── hosting.tsx              # Hosting page
│   └── contact.tsx              # Contact page
│
├── /public                      # Public assets (images, icons)
│   ├── /images
│   │   └── logo.png
│   └── /favicon.ico
│
├── /styles                       # Global styles
│   ├── globals.css
│   ├── tailwind.config.ts
│   └── postcss.config.mjs
│
├── /utils                        # Utility functions
│   └── emailUtils.ts            # For email-related functions
│
├── .gitignore                   # Git ignore file
├── package.json                 # Project dependencies and scripts
├── next.config.js               # Next.js configuration
└── README.md                    # Project documentation

```


**Pull Requests**

- All changes must be made via pull requests.
- Ensure your pull request has a clear description of the changes made.
- At least one team member must review and approve the pull request before it can be merged.
- Only push complete, optimized and working features to the main branch.

### Git

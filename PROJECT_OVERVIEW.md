# Project Overview

## 3. Project Structure

```
mila-knight/
  app/
    layout.tsx                 # App shell (fonts, theme init script)
    globals.css                # Tailwind + global styles + dark-mode variant
    page.tsx                   # Home route (renders LandingPage)
    signup/
      page.tsx                 # /signup placeholder page
    components/
      ThemeToggle.tsx          # Dark/Light theme switch (persisted)
      landing/
        LandingPage.tsx        # Landing page sections composed together
        Container.tsx          # Layout container (max-width + padding)
        SectionHeading.tsx     # Reusable section headings
        PrimaryButton.tsx      # Reusable primary CTA button
        Icons.tsx              # Inline SVG icons for features
  public/                      # Static assets
  next.config.ts               # Next.js config (Turbopack root)
  package.json                 # Scripts + dependencies
  tsconfig.json                # TypeScript config
  eslint.config.mjs            # ESLint rules
```

## 4. Technologies Used

- **Next.js (App Router)**: React framework for routing, layouts, and production builds.
- **React**: UI library for component-driven development.
- **TypeScript**: Type-safe development for better maintainability and refactoring.
- **Tailwind CSS v4**: Utility-first styling for fast iteration and consistent UI.
- **ESLint**: Code quality and best-practices enforcement.

## 5. Reason for Choosing These Technologies

- **Next.js (App Router)**: Provides a clean file-based routing model (`app/`), server-first defaults, and optimized production builds out of the box.
- **React**: Widely adopted ecosystem and excellent component composition for building reusable UI sections (Hero/Features/Steps/Testimonial/Footer).
- **TypeScript**: Prevents common runtime bugs, improves editor tooling, and makes components/contracts clearer as the app grows.
- **Tailwind CSS v4**: Enables a modern SaaS look with consistent spacing/typography, quick responsiveness, and zero custom component-library lock-in.
- **ESLint**: Keeps the codebase consistent and catches issues early during development.

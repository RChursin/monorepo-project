### Monorepo-project

[![Lint all Packages](https://github.com/RChursin/monorepo-project/actions/workflows/lint.yml/badge.svg)](https://github.com/RChursin/monorepo-project/actions/workflows/lint.yml)

[![CodeQL](https://github.com/RChursin/monorepo-project/actions/workflows/codeql.yml/badge.svg?branch=main)](https://github.com/RChursin/monorepo-project/actions/workflows/codeql.yml)

## RAW Project Directory Structure

```
src/
├── app/
│   ├── api/
│   │   └── hello/
│   │       └── route.ts
│   ├── components/
│   │   ├── Avatar/
│   │   │   ├── Avatar.tsx            # Avatar component
│   │   │   └── Avatar.module.css      # Avatar-specific styles
│   │   ├── Navbar/
│   │   │   ├── Navbar.tsx             # Navbar component
│   │   │   └── Navbar.module.css      # Navbar-specific styles
│   │   ├── Sidebar/
│   │   │   ├── Sidebar.tsx            # Sidebar component
│   │   │   └── Sidebar.module.css     # Sidebar-specific styles
│   │   ├── MainContent/
│   │   │   ├── MainContent.tsx        # Main content area
│   │   │   └── MainContent.module.css # Main content-specific styles
│   ├── layout.tsx                     # Root layout that imports these components
│   ├── head.tsx                       # SEO metadata
│   ├── global.css                     # Global styles (like resetting)
│   ├── page.tsx                       # Main entry point  
```
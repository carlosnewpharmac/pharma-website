# Pharma Compliance Experts - Web Application

## Overview

This is a full-stack web application for Pharma Compliance Experts, a pharmaceutical consulting firm specializing in regulatory compliance, GMP, quality management, and regulatory filings. The application serves as the company's main website with contact form functionality and admin capabilities.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom pharmaceutical-themed color scheme
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Validation**: Zod schemas for type-safe data validation
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Development**: Hot module replacement with Vite integration

### Project Structure
```
├── client/          # Frontend React application
├── server/          # Backend Express server
├── shared/          # Shared types and schemas
└── migrations/      # Database migration files
```

## Key Components

### Database Schema
- **Users Table**: Basic user authentication (id, username, password)
- **Contact Submissions Table**: Contact form submissions with fields for name, email, company, service, and message
- **Shared Schema**: Type-safe definitions using Drizzle ORM and Zod validation

### API Endpoints
- `POST /api/contact` - Submit contact form with validation
- `GET /api/contact-submissions` - Retrieve all contact submissions (admin)

### Frontend Pages
- **Home Page**: Single-page application with multiple sections:
  - Hero section with call-to-action
  - Statistics section
  - About section
  - Why choose us section
  - Services section
  - Contact form section
  - Footer

### UI Components
- Responsive navigation with smooth scrolling
- Professional pharmaceutical-themed design
- Interactive contact form with real-time validation
- Comprehensive service showcase
- Statistics display
- Toast notifications for user feedback

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form on frontend
   - Form validation using React Hook Form + Zod
   - API request to `/api/contact` endpoint
   - Server validation and database storage
   - Success/error feedback via toast notifications

2. **Admin Data Access**:
   - GET request to `/api/contact-submissions`
   - Server queries database and returns submissions
   - Data displayed in admin interface

## External Dependencies

### Frontend Dependencies
- React ecosystem (React, React DOM, React Router alternative)
- UI/UX libraries (Radix UI, Lucide React icons, Tailwind CSS)
- Form handling (React Hook Form, Hookform Resolvers)
- State management (TanStack React Query)
- Validation (Zod)
- Date utilities (date-fns)

### Backend Dependencies
- Express.js and middleware
- Database (Drizzle ORM, Neon Database serverless)
- Session management (connect-pg-simple)
- Development tools (TSX, ESBuild)

### Build & Development Tools
- Vite for frontend bundling and dev server
- TypeScript for type safety
- ESBuild for backend compilation
- Replit-specific plugins for development environment

## Deployment Strategy

### Development Environment
- Replit configuration with Node.js 20, web, and PostgreSQL 16 modules
- Hot reload enabled via Vite dev server
- Concurrent frontend and backend development
- Environment variables for database connection

### Production Build
- Frontend: Vite build process creating optimized static assets
- Backend: ESBuild compilation to single JavaScript file
- Static file serving from Express server
- Database migrations via Drizzle Kit

### Hosting Configuration
- Autoscale deployment target on Replit
- Port 5000 for local development, port 80 for external access
- Build command: `npm run build`
- Start command: `npm run start`

## Changelog

```
Changelog:
- June 26, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```
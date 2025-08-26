# Rubic Systems Website

The official website for Rubic Systems, a multidimensional data platform that democratizes high-performance analytics by making data cubes accessible to everyone.

## Overview

This website is built using:
- React + TypeScript
- Vite for build tooling
- Modern CSS with CSS Variables
- Responsive design principles
- Vitest for testing
- React Router for navigation
- Dark/Light theme support

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Rubic-Systems/homepage.git
cd homepage
```

2. Install dependencies:
```bash
npm install
```

3. Copy environment variables (optional):
```bash
cp .env.example .env
```

4. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Running Tests

To run the test suite:

```bash
npm run test
```

For test coverage:

```bash
npm run test:coverage
```

## Project Structure

```
homepage/
├── public/              # Static assets
│   ├── Arthur.jpeg     # Team member images
│   ├── Chris.jpeg
│   ├── RS_*.png       # Rubic Systems branding assets
│   └── RS_*.pdf       # Vector logo files
├── src/
│   ├── components/     # React components
│   │   ├── InteractiveLogo.tsx  # 3D animated logo
│   │   ├── CubeToggle.tsx       # Cube UI component
│   │   ├── GeometricPattern.tsx # Visual patterns
│   │   └── ErrorBoundary.tsx    # Error handling
│   ├── contexts/       # React contexts
│   │   └── ThemeContext.tsx     # Theme provider
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Page components
│   │   ├── Home.tsx
│   │   └── Jotwell.tsx          # Product showcase
│   ├── styles/         # Global styles
│   ├── test/           # Test utilities
│   ├── utils/          # Helper functions
│   ├── App.tsx         # Main app component
│   ├── App.test.tsx    # App tests
│   └── main.tsx        # Entry point
├── vitest.config.ts    # Test configuration
└── index.html          # HTML template
```

## Features

- **Product Showcase**: Dedicated Jotwell product page with modern design
- **Interactive Components**: 3D logo animations and interactive UI elements
- **Theme Support**: Built-in dark/light theme switching
- **Testing Infrastructure**: Comprehensive test setup with Vitest and React Testing Library
- **Error Handling**: Error boundaries for graceful error recovery
- **Responsive Design**: Mobile-first approach with responsive layouts

## Development

- All styles are managed through CSS variables defined in `src/styles/global.css`
- Components are organized by feature in the `components` directory
- Pages are in the `pages` directory
- Images and other static assets should be placed in the `public` directory
- Tests are co-located with components (`.test.tsx` files)
- Custom hooks are in the `hooks` directory
- Utility functions are in the `utils` directory

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

All rights reserved. This source code is proprietary and confidential.

## Contact

For any inquiries, please contact us at contact@rubic.ltd

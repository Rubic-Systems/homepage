# Rubic Systems Website

The official website for Rubic Systems, a multidimensional data platform that democratizes high-performance analytics by making data cubes accessible to everyone.

## Overview

This website is built using:
- React + TypeScript
- Vite for build tooling
- Modern CSS with CSS Variables
- Responsive design principles

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

3. Start the development server:
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

## Project Structure

```
homepage/
├── public/              # Static assets
│   ├── Arthur.jpeg     # Team member images
│   ├── Chris.jpeg
│   ├── logo.svg
│   └── favicon.svg
├── src/
│   ├── components/     # React components
│   ├── pages/         # Page components
│   ├── styles/        # Global styles
│   ├── App.tsx        # Main app component
│   └── main.tsx       # Entry point
└── index.html         # HTML template
```

## Development

- All styles are managed through CSS variables defined in `src/styles/global.css`
- Components are organized by feature in the `components` directory
- Pages are in the `pages` directory
- Images and other static assets should be placed in the `public` directory

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

All rights reserved. This source code is proprietary and confidential.

## Contact

For any inquiries, please contact us at contact@rubic.ltd

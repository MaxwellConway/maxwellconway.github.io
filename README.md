# Maxwell Conway Portfolio

This is a modern, responsive portfolio website built with React and deployed to GitHub Pages at `https://maxwellconway.github.io`.

## GitHub Pages Deployment

### Deployment Methods

**Option 1: Automatic GitHub Actions (Recommended)**
- Push to the `main` branch triggers automatic deployment
- Uses GitHub Actions workflow in `.github/workflows/deploy.yml`

**Option 2: Manual Deployment**
```bash
npm install
npm run deploy
```

### Setup Instructions

1. **Clone this repository**:
```bash
git clone https://github.com/MaxwellConway/maxwellconway.github.io.git
cd maxwellconway.github.io
```

2. **Install dependencies**:
```bash
npm install
```

3. **Test locally**:
```bash
npm start
```

4. **Deploy to GitHub Pages**:
```bash
npm run deploy
```

## Features

- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional interface with red, white, and black theme
- **Interactive Elements**: Hover effects and smooth transitions
- **Contact Form**: Functional contact form for inquiries
- **Resume Download**: Direct download link for resume
- **Project Showcase**: Dedicated section for displaying projects and work

## Tech Stack

- **Frontend**: React 19.1.1
- **Styling**: CSS3 with custom properties and flexbox/grid layouts
- **Build Tool**: Create React App
- **Deployment**: GitHub Pages with GitHub Actions

## Project Structure

```
src/
├── components/          # Reusable React components
├── App.js              # Main application component
├── App.css             # Global styles
├── index.js            # Application entry point
└── index.css           # Base styles

public/
├── index.html          # HTML template
├── resume.pdf          # Resume file
├── header-background.jpg # Header background image
└── favicon.ico         # Site favicon

.github/
└── workflows/
    └── deploy.yml      # GitHub Actions deployment workflow
```

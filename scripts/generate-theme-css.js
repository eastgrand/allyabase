#!/usr/bin/env node

/**
 * Generate Fedwiki theme CSS files from test-bases-config.json
 *
 * Usage:
 *   node scripts/generate-theme-css.js
 *
 * This generates CSS files in test-themes/ directory based on the
 * color values defined in test-bases-config.json
 */

const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, '..', 'test-bases-config.json');
const outputDir = path.join(__dirname, '..', 'test-themes');

// Load config
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

/**
 * Generate CSS for a single base theme
 */
function generateCSS(base) {
  const { theme, id, name } = base;
  const { colors, glowOpacity } = theme;

  // Helper to convert hex to rgba
  const hexToRgba = (hex, alpha) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return `/* Base ${id} Theme: ${theme.name} */
/* Generated from test-bases-config.json - DO NOT EDIT DIRECTLY */
/* Edit test-bases-config.json and run: node scripts/generate-theme-css.js */

/* Main background */
body {
  background: linear-gradient(135deg, ${colors.backgroundGradientStart} 0%, ${colors.backgroundGradientEnd} 100%) !important;
  color: ${colors.text} !important;
}

/* Page container */
.main {
  background: ${hexToRgba(colors.backgroundGradientEnd, 0.8)} !important;
}

/* Individual page styling */
.page {
  background: ${hexToRgba(colors.backgroundGradientStart, 0.9)} !important;
  border: 1px solid ${colors.border} !important;
  box-shadow: 0 0 20px ${hexToRgba(colors.accent, glowOpacity.border)} !important;
}

/* Page title */
.page h1,
.page .header h1 {
  color: ${colors.text} !important;
  text-shadow: 0 0 10px ${hexToRgba(colors.accent, glowOpacity.text)} !important;
}

/* Paragraph text */
.page p,
.page .item p {
  color: ${colors.textSecondary} !important;
  text-shadow: 0 0 5px ${hexToRgba(colors.accent, 0.3)} !important;
}

/* Links */
a {
  color: ${colors.accentDark} !important;
  text-shadow: 0 0 8px ${hexToRgba(colors.accentDark, 0.6)} !important;
}

a:hover {
  color: ${colors.accent} !important;
  text-shadow: 0 0 15px ${hexToRgba(colors.accent, glowOpacity.textHover)} !important;
}

/* Footer */
.footer {
  background: ${hexToRgba(colors.backgroundGradientStart, 0.95)} !important;
  border-top: 1px solid ${colors.border} !important;
  color: ${colors.text} !important;
}

/* Journal (page history) */
.journal {
  background: ${hexToRgba(colors.backgroundGradientStart, 0.9)} !important;
}

.action {
  border-left: 3px solid ${colors.border} !important;
}

.action:hover {
  background: ${hexToRgba(colors.border, 0.3)} !important;
}

/* Fork indicator */
.fork {
  color: ${colors.text} !important;
}

/* Item styling */
.item {
  background: ${hexToRgba(colors.backgroundGradientStart, 0.5)} !important;
  border: 1px solid ${hexToRgba(colors.border, 0.5)} !important;
  color: ${colors.textSecondary} !important;
}

.item:hover {
  background: ${hexToRgba(colors.backgroundGradientEnd, 0.6)} !important;
  box-shadow: 0 0 10px ${hexToRgba(colors.accent, glowOpacity.border)} !important;
}

/* Code blocks */
pre,
code {
  background: rgba(0, 0, 0, 0.5) !important;
  color: ${colors.accentDark} !important;
  border: 1px solid ${colors.border} !important;
  text-shadow: 0 0 3px ${hexToRgba(colors.accentDark, 0.4)} !important;
}

/* Buttons */
button,
.button {
  background: linear-gradient(135deg, ${colors.border} 0%, ${colors.backgroundGradientEnd} 100%) !important;
  color: ${colors.text} !important;
  border: 1px solid ${colors.accent} !important;
  text-shadow: 0 0 5px ${hexToRgba(colors.accent, glowOpacity.text)} !important;
}

button:hover,
.button:hover {
  background: linear-gradient(135deg, ${colors.borderHover} 0%, ${colors.backgroundGradientEnd} 100%) !important;
  box-shadow: 0 0 15px ${hexToRgba(colors.accent, glowOpacity.button)} !important;
}

/* Input fields */
input[type="text"],
textarea {
  background: rgba(0, 0, 0, 0.5) !important;
  color: ${colors.text} !important;
  border: 1px solid ${colors.border} !important;
}

input[type="text"]:focus,
textarea:focus {
  border-color: ${colors.accent} !important;
  box-shadow: 0 0 10px ${hexToRgba(colors.accent, 0.3)} !important;
}

/* Twin pages (multiple pages side by side) */
.twin {
  border-left: 2px solid ${colors.border} !important;
}

/* Search results */
.search-results {
  background: ${hexToRgba(colors.backgroundGradientStart, 0.95)} !important;
  border: 1px solid ${colors.border} !important;
}

/* Lineup (pages opened) */
.lineup {
  background: transparent !important;
}

/* Scrollbar styling */
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: ${hexToRgba(colors.backgroundGradientStart, 0.5)};
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, ${colors.border} 0%, ${colors.backgroundGradientEnd} 100%);
  border: 1px solid ${colors.accent};
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, ${colors.borderHover} 0%, ${colors.backgroundGradientEnd} 100%);
  box-shadow: 0 0 10px ${hexToRgba(colors.accent, 0.5)};
}

/* Selection highlight */
::selection {
  background: ${hexToRgba(colors.accent, 0.3)} !important;
  color: ${colors.text} !important;
}

/* Plugin-specific: Allyabase */
.allyabase-item {
  background: ${hexToRgba(colors.backgroundGradientStart, 0.8)} !important;
  border: 1px solid ${colors.accent} !important;
  box-shadow: 0 0 15px ${hexToRgba(colors.accent, 0.3)} !important;
}

/* Base identifier banner - shows which base you're on */
body::before {
  content: "BASE ${id} - ${theme.name.toUpperCase()}";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(90deg, ${colors.border}, ${colors.accent}, ${colors.border}) !important;
  color: ${colors.backgroundGradientStart} !important;
  text-align: center;
  padding: 4px;
  font-weight: bold;
  font-size: 12px;
  z-index: 9999;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

/* Offset body content for banner */
body {
  padding-top: 28px !important;
}
`;
}

// Generate CSS for each base
console.log('Generating theme CSS files from test-bases-config.json...\n');

for (const base of config.bases) {
  const css = generateCSS(base);
  const filename = `custom-style-base${base.id}.css`;
  const filepath = path.join(outputDir, filename);

  fs.writeFileSync(filepath, css);
  console.log(`  ✓ Generated ${filename} (${base.theme.name} theme)`);
}

console.log('\nDone! CSS files written to test-themes/');
console.log('\nColor reference:');
for (const base of config.bases) {
  console.log(`  Base ${base.id} (${base.theme.name}): ${base.theme.colors.backgroundGradientStart} + ${base.theme.colors.accent}`);
}

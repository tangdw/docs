/** @type {import('nextra').Nextra} */
const nextra = require('nextra')

module.exports = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})({
  // output: 'export',
  // distDir: 'dist',
  images: {
    unoptimized: true,
  }
})

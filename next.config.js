/** 
 * Configuración actual para GitHub Pages con prefijo de repo
 */
/** @type {import('next').NextConfig} */
/*
const isProd = process.env.NODE_ENV === 'production';
const repo = 'deploy-portafolio';

const nextConfig = {
  output: 'export',
  assetPrefix: isProd ? `/${repo}/` : '',
  basePath: isProd ? `/${repo}` : '',
  images: {
    unoptimized: true, 
  },
};

module.exports = nextConfig;
*/

/**
 * Versión sin prefijo ni basePath
 */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

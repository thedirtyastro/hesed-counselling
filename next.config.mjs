/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/, // Test for SVG files
        use: ['@svgr/webpack'], // Use SVGR to import as React component
      });
      return config;
    },
  };
  
  export default nextConfig;
  
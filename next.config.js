module.exports = {
  // Custom domain serves from root, no basePath needed
  basePath: '',
  assetPrefix: '',
  images: {
    unoptimized: true,
    domains: [
      'res.cloudinary.com',
      'avatars.githubusercontent.com',
      'imgur.com',
    ],
  },
  trailingSlash: true,
};

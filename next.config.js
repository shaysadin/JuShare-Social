module.exports = {
  reactStrictMode: true,
  env: {
    CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/jaysing/image/upload",
  },
  compiler: {
    styledComponents: {
      // Enable styled-components in both development and production
      displayName: true,
      ssr: true,
    },
  },
   //url for image upload to cloudinary. First copy "API base url" from Cloudinary. Then paste it here.
};

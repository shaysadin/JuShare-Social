const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://jusee-social.onrender.com";

export default baseUrl;

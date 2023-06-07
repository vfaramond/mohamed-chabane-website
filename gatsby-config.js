require('dotenv').config({
  path: `.env.development`,
});

module.exports = {
  siteMetadata: {
    title: `Work — Momo & Théo — Directors`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
};

module.exports = {
  siteMetadata: {
    title: 'HackBattles',
    description: 'A regional tech throwdown in which local companies and groups together compete on a common goal to determine who is the ultimate champion.',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/events`,
        name: 'events',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      },
    },
  ],
};

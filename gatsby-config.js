const guid = process.env.NETLIFY_GOOGLE_ANALYTICS_ID;

module.exports = {
  pathPrefix: '/aboutme',
  siteMetadata: {
    title: 'Portfolio Website',
    description: 'A Corporate Advisory Firm',
    contact: {
      phone: '+91 0000000000',
      email: 'a4ankit@outlook.com',
    },
    menuLinks: [
      {
        name: 'About',
        link: '/',
      },
      {
        name: 'Skills',
        link: '/skill',
      },
      {
        name: 'Showcase',
        link: '/showcase',
      },
      {
        name: 'Blog',
        link: '/blog',
      },
      {
        name: 'Contact',
        link: '/contact',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: guid ? guid : 'UA-XXX-1',
        head: false,
      },
    },
  ],
};

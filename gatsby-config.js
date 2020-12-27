module.exports = {
  siteMetadata: {
    title: "Wolfie Portfolio",
    description: "This is My Portfolio website using gatsby and strapi and for recieving contact information I used formspree",
    author: "@wolfie",
    twitterUsername: "@khushwantparihar",
    image: "/rrrrrr.png",
    siteUrl: "https://wolfie-portfolio.netlify.app/",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `postgres://fdhyzomcveaqob:45332b6e88f75c54bf51022b76d5f8fb41766a9c3b81122094c01c05fd4f221d@ec2-52-44-139-108.compute-1.amazonaws.com:5432/d921idhop4jdrt`,
        queryLimit: 1000, // Default to 100
        //   contentTypes : `jobs`, `projects`, `blogs`,
        //   singleType : `about`
        //  ONLY ADD TO ARRAY IF YOU HAVE DATA IN STRAPI !!!!
        contentTypes: [`projects`,`checks`],
        singleTypes: [`about`],
      },
    },
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Roboto`,
    //         variants: [`400`, `700`],
    //       },
    //       {
    //         family: `Open Sans`,
    //       },
    //     ],
    //   },
    // },
  ],
}

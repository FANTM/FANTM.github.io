module.exports = {
  siteMetadata: {
    siteUrl: 'https://FANTM.github.io',
    title: 'FANTM Documentation',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-material-ui',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-remark-images',
    'gatsby-plugin-mdx',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'FANTM Documentation Center',
        short_name: 'FANTM Docs',
        description:
          'Open source documentation on FANTM software and APIs for all products',
        icon: 'src/images/fantm-icon.png',
        icons: [
          {
            src: 'src/images/logo192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'src/images/logo512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/data/',
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
            },
          },
        ],
        extensions: ['.md', '.mdx'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/src/markdown-pages/`,
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
		  `gatsby-remark-responsive-iframe`,
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590
            }
          },
          `gatsby-remark-relative-images`,
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 800,
            linkImagesToOriginal: false,
            sizeByPixelDensity: true,
            showCaptions: true
          }
        },
        ]
      }
    }
  ],
};

// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Caribbean Coding Academy Grenada',
  siteDescription:'The CCA aims to teach our candidates all the necessary skills that they would need to work in a specific area within the software or Information Technology industry.',
  siteUrl: 'https://ljmarinscull.github.io',
  plugins: [
    {
      use: "gridsome-plugin-service-worker",
      options: {
        networkFirst:{
          routes: ["/", "/projects", "/services","/team","/contact"],
          fileTypes: ["document", "script", "style", "image"],
        },
      },
    },
  ]
}

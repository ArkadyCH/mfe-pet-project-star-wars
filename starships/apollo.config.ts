module.exports = {
  client: {
    service: {
      name: "StarshipsApp",
      // URL to the GraphQL API
      url: "https://swapi-graphql.netlify.app/.netlify/functions/index",
    },
    // Files processed by the extension
    includes: ["src/**/*.vue", "src/**/*.js"],
  },
};

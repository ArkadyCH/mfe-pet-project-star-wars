module.exports = {
  client: {
    service: {
      name: "StarshipsApp",
      // URL to the GraphQL API
      url: "https://swapi-graphql.netlify.app/graphql",
    },
    // Files processed by the extension
    includes: ["src/**/*.vue", "src/**/*.js"],
  },
};

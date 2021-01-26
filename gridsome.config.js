module.exports = {
  siteName: "Gridsome",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "./src/assets/data/journal/**/*.json",
        typeName: "journalData",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "./src/assets/data/projects/**/*.json",
        typeName: "projectsData",
      },
    },
  ],
};

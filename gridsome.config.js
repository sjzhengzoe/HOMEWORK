module.exports = {
  siteName: "Gridsome",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "assets/data/**/*.json",
        typeName: "BlogDatas",
      },
    },
  ],
};

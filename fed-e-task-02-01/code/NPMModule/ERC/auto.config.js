module.exports = {
  data: {
    menus: [
      {
        name: "Home",
        icon: "aperture",
        link: "index.html",
      },
      {
        name: "Features",
        icon: "aperture",
        link: "features.html",
      },
      {
        name: "About",
        icon: "aperture",
        link: "about.html",
      },
      {
        name: "Contact",
        icon: "#",
        children: [
          {
            name: "Twitter",
            link: "https://twitter.com/w_zce",
          },
          {
            name: "About",
            link: "https://weibo.com/zceme",
          },
          {
            name: "Twitter",
            link: "https://twitter.com/w_zce",
          },
        ],
      },
    ],
    pkg: require("./package.json"),
    date: new Date(),
  };
}

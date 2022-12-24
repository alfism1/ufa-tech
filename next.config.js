const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  trailingSlash: true,
  images: {
    domains: ["media.graphcms.com", "media.graphassets.com"],
  },
};

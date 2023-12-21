const copyDirectory = require("../tasks/copyDirectory");

const build = (config, dirSrc, dirDst) => {
  copyDirectory(dirSrc, dirDst);
};

module.exports = build;

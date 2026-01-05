const { execSync } = require("child_process");

module.exports = () => {
  return execSync("whoami").toString();
};

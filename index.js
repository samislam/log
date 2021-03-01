const colors = require("colors/safe");
colors.setTheme({
  error: "red",
  warn: "yellow",
  success: "green",
  info: "cyan",
  default: "reset"
});

function log(args, type) {
  const label = colors.bold(`${type.charAt(0).toUpperCase()}${type.slice(1)}:`);
  if (args[0] === api.label) args[0] = label;
  const x = args.map((arg) => colors[type](arg));
  console.log(...x);
  // return "";
}

const api = {
  warn: (...args) => log(args, "warn"),
  error: (...args) => log(args, "error"),
  success: (...args) => log(args, "success"),
  info: (...args) => log(args, "info"),
  default: (...args) => log(args, "default"),
  label: {
    info:
      "You should only use log.label as the first argument in log.X(), if you need to the label in somewhere else, use log.X.name, For Example: log.warn.name",
  },
};

module.exports = api;

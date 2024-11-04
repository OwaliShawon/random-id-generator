const { randomBytes } = require("crypto");

function randomCodeId(length, prefix, type = "hex") {
  return prefix
    ? prefix + randomBytes(length).toString(type).slice(0, length)
    : randomBytes(length).toString(type).slice(0, length);
}

module.exports = { randomCodeId };

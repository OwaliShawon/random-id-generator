const { randomBytes } = require("crypto");
/**
 * Generates a random ID with customizable options
 * @param {number} length - The length of the random portion of the ID
 * @param {string} [prefix=''] - Optional prefix to prepend to the ID
 * @param {string} [suffix=''] - Optional suffix to append to the ID
 * @param {string} [type='utf8'] - Type of encoding ('utf8' for numbers only, 'hex' for alphanumeric)
 * @returns {string} The generated random ID
 */
function randomCodeId(length, prefix = "", suffix = "", type = "utf8") {
  if (!length || length < 1) {
    throw new Error("Length must be a positive number");
  }

  let result;
  if (type === "utf8") {
    const min = Math.pow(10, length - 1);
    const max = Math.pow(10, length) - 1;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    result = String(randomNumber);
  } else if (type === "hex") {
    result = randomBytes(Math.ceil(length / 2))
      .toString("hex")
      .slice(0, length);
  } else {
    throw new Error('Invalid type. Must be either "utf8" or "hex"');
  }

  return `${prefix}${result}${suffix}`;
}

module.exports = { randomCodeId };

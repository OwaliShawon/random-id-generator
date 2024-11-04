const { randomCodeId } = require("./random");

/**
 * Default random number generator with type="utf8"
 * For combination with letters, numbers pass type="hex"
 */
console.log(randomCodeId(15, "TXN-ID-", "-LOL"));
console.log(randomCodeId(15, "TXN-ID-", "-LOL", "hex"));

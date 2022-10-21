/**
 * capitalizes first character of string if possible
 * @returns capitalized string
 */
String.prototype.capitalize = function() {
  return [this[0].toUpperCase(), ...this.slice(1)].join("");
};

/**
 * capitalizes every character after a space and first character of string
 * @returns title cased string
 */
String.prototype.toTitleCase = function() {
  return [...this.split(" ")].map(word => word.capitalize()).join(" ");
};

/**
 * checks for capital first letter --->
 * if `true`, string starts with uppercase  
 * if `false` (anything outside [A-Z]) string start with lowercase
 * @returns string with alternate character casing
 */
String.prototype.alternateCaseWord = function() {
  const firstIsUpper = /^[A-Z]/.test(this);
  return this.split("").map(
    (char, i) => i % 2 === 0 ?
      firstIsUpper ? char.toUpperCase() : char.toLowerCase() :
      firstIsUpper ?  char.toLowerCase() : char.toUpperCase()
  ).join("");
};

/**
 * @returns reversed string
 */
String.prototype.reverse = function () {
  return [...this].reverse().join("");
};

/**
 * converts string into BEM style CSS selector
 * @param {Boolean} PMS prepends the return value with a `.` if `true`
 * @param {String} breakChar string that separates block, element and modifier
 * @returns {String} BEM style string
 */
String.prototype.BEMinate = function (PMS=false, breakChar="\\|") {
  const regex = new RegExp(`(.+)${breakChar}(.+)${breakChar}(.+)`);
  try {
    let [ , block, elem, mod] = this.match(regex).map(
      x => x.trim().split(" ").join("-"));
    return `${PMS?".":""}${block}__${elem}--${mod}`;
  } catch (e) {
    console.log(e);
  }
  return String(this);
};

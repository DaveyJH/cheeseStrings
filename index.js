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

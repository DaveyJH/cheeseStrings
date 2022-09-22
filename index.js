String.prototype.capitalize = function() {
  return [this[0].toUpperCase(), ...this.slice(1)].join("");
};

String.prototype.toTitleCase = function() {
  return [...this.split(" ")].map(word => word.capitalize()).join(" ");
};


/**
 * Cast a value to a string
 * @param   {String} value
 * @returns {String}
 */
function castToString(value) {
  return value+'';
}

var rules = {

  FLOAT: /^\-?(0|[1-9][0-9]*)(\.[0-9]+)?$/,

  /**
   * Get whether the value is in the format of a floating point number
   * @param   {String} value
   * @returns {Boolean}
   */
  float: function(value) {
    return rules.FLOAT.test(castToString(value));
  },

  /**
   * Get whether a value exists between a lower and upper bound
   * @param   {Number} min
   * @param   {Number} max
   * @returns {Function}
   */
  between: function(min, max) {
    return function(value) {
      min   = Number(min);
      max   = Number(max);
      value = Number(value);
      return value >= min && value <= max;
    };
  }

};

module.exports = rules;
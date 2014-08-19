
/**
 * Cast a value to a string
 * @param   {String} value
 * @returns {String}
 */
function castToString(value) {
  return value+'';
}

var rules = {

  FLOAT: /^\-?([0-9]+)(\.[0-9]+)?$/,

  /**
   * Get whether the value is in the format of a floating point number
   * @param   {String} value
   * @returns {Boolean}
   */
  float: function(value) {
    return rules.FLOAT.test(castToString(value));
  }

};

module.exports = rules;
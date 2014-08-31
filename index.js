var rules = {

  INTEGER:  /^\-?(0|[1-9][0-9]*)$/,
  FLOAT:    /^\-?(0|[1-9][0-9]*)(\.[0-9]+)?$/,

  /**
   * Get whether the value is in the format of an integer number
   * @param   {String} value
   * @returns {Boolean}
   */
  integer: function(value) {
    return rules.INTEGER.test(value+'');
  },

  /**
   * Get whether the value is in the format of a floating point number
   * @param   {String} value
   * @returns {Boolean}
   */
  float: function(value) {
    return rules.FLOAT.test(value+'');
  },

  /**
   * Get whether the value is in the format of a number
   * @param   {String} value
   * @returns {Boolean}
   */
  numeric: function(value) {
    return rules.FLOAT.test(value+'');
  },

  /**
   * Get whether a value is less than an upper bound
   * @param   {Number} max
   * @returns {Function}
   */
  lessThan: function(max) {
    return function(value) {

      //check if the value is numeric
      if (!rules.numeric(value)) {
        return false
      }

      max   = Number(max);
      value = Number(value);
      return value < max;
    };
  },

  /**
   * Get whether a value is greater than an upper bound
   * @param   {Number} max
   * @returns {Function}
   */
  greaterThan: function(min) {
    return function(value) {

      //check if the value is numeric
      if (!rules.numeric(value)) {
        return false
      }

      min   = Number(min);
      value = Number(value);
      return value > min;
    };
  },

  /**
   * Get whether a value exists between a lower and upper bound
   * @param   {Number} min
   * @param   {Number} max
   * @returns {Function}
   */
  between: function(min, max) {
    return function(value) {

      //check if the value is numeric
      if (!rules.numeric(value)) {
        return false
      }

      min   = Number(min);
      max   = Number(max);
      value = Number(value);
      return value >= min && value <= max;
    };
  }

};

module.exports = rules;
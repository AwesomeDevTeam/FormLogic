import immutableObject from "./immutableObject";

/**
 * @param {Object} p Parameters object
 * @param {Any} [p.label=undefined] Displayed text, may be string or component
 * @param {String} p.value Item value
 * @constructor
 */
function RadioFormFieldItem(p) {

  return immutableObject(RadioFormFieldItem.prototype,{
    label: { value: p.label },
    value: { value: p.value }
  });

}
RadioFormFieldItem.prototype = immutableObject(null); // TODO:inherit from generic firld item

export default RadioFormFieldItem;
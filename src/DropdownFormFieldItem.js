import immutableObject from "./immutableObject";

/**
 * @param {Object} p Parameters object
 * @param {Any} p.content Displayed content, may be string or Component
 * @param {Any} [p.text=undefined] Displayed text, may be string or component
 * @param {String} p.value Item value
 * @constructor
 */
function DropdownFormFieldItem(p) {

  return immutableObject(DropdownFormFieldItem.prototype,{
    content : { value: p.content },
    text: { value: p.text },
    value: { value: p.value }
  });

}
DropdownFormFieldItem.prototype = immutableObject(null); // TODO: inherit from generic field item???

export default DropdownFormFieldItem;

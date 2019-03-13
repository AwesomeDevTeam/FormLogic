import FormField from "./FormField";

/**
 * @param {Object} p Parameters object
 * @param {String} p.name Field name
 * @param {String} [p.value=undefined]
 * @param {Function} [p.valueAs] Value converting function
 * @constructor
 */
function HiddenFormField(p) {

  const { name } = p;
  const valueType = typeof p.value;
  /*if (  valueType !== "undefined" && valueType !== "string" ) {
   throw "Field value must be string or undefined";
   }*/
  const value = p.value;
  const valueAs = typeof p.valueAs === "function" ? p.valueAs : (v) => v;

  return Object.freeze(Object.create(HiddenFormField.prototype,{

    name: { value: name},
    value: { value: value },

    setValue: { value: v =>
      HiddenFormField({
          name,
          value: valueAs(v),
          valueAs
        }
      )}
  }));
}
HiddenFormField.prototype = Object.freeze(Object.create(FormField.prototype));

export default HiddenFormField;


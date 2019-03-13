/**
 * @abstract
 * @param {Object} p Parameters object
 * @param {String} p.label
 * @param {Boolean} [p.required=false]
 * @param {Boolean} [p.disabled=false]
 * @param {Boolean} [p.valid=true]
 * @param {String} [p.errorMessage=""] Error message for invalid field value
 * @param {String} p.name Field name
 * @param {Any} p.value
 * @constructor
 */
function FormField(p) {

  const required = typeof p.required === "boolean" ? p.required : false;
  const disabled = typeof p.disabled === "boolean" ? p.disabled : false;
  const valid = typeof p.valid === "boolean" ? p.valid : true;
  const errorMessage = typeof p.errorMessage === "string" ? p.errorMessage : "";

  return Object.freeze(Object.create(FormField.prototype,{
    label : { value: p.label},
    required: {value: required},
    disabled: { value: disabled},
    value: { value: p.value},
    valid: { value: valid},
    errorMessage: { value: errorMessage },
    name: { value: p.name}
  }));
}
FormField.prototype = Object.freeze(Object.create(null,{
  label: { value: ""},
  required: { value: false},
  disabled: { value: false},
  value: { value: undefined},
  valid: { value: true},
  errorMessage: { value: ""}
}));

export default FormField;
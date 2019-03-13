import FormField from "./FormField";


/**
 * @param {Object} p Parameters object
 * @param {String} [p.label=""]
 * @param {String} p.name Field name
 * @param {String} [p.value=undefined]
 * @param {Boolean} [p.required=false]
 * @param {Boolean} [p.disabled=false]
 * @param {Boolean} [p.valid=true]
 * @param {String} [p.errorMessage=""] Error message for invalid field value
 * @param {Function} [p.valueAs] Value converting function
 * @constructor
 */
function PasswordFormField(p) {

  const { name } = p;
  const label = typeof p.label === "string" ? p.label : "";
  const value = typeof p.value === "string" ? p.value : "";
  const required = typeof p.required === "boolean" ? p.required : false;
  const disabled = typeof p.disabled === "boolean" ? p.disabled : false;
  const valid = typeof p.valid === "boolean" ? p.valid : true;
  const errorMessage = typeof p.errorMessage === "string" ? p.errorMessage : "";
  const valueAs = typeof p.valueAs === "function" ? p.valueAs : (v) => v;

  return Object.freeze(Object.create(PasswordFormField.prototype,{

    label: { value: label },
    name: { value: name},
    value: { value: value},
    required: {value: required },
    disabled: { value: disabled},
    valid: { value: valid},
    errorMessage: { value: errorMessage},
    setValue: { value: v =>
      PasswordFormField({
          label,
          name,
          value: valueAs(v),
          required,
          disabled,
          valid,
          errorMessage,
          valueAs
        }
      )}
  }));
}
PasswordFormField.prototype = Object.freeze(Object.create(FormField.prototype));

export default PasswordFormField;
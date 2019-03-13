import immutableObject from "./immutableObject";
import FormField from "./FormField";
import AutoCompleteAttributes from "./AutoCompleteAttributes";

/**
 * @param {Object} p Parameters object
 * @param {String} [p.label=""]
 * @param {String} p.name Field name
 * @param {String} [p.value=undefined]
 * @param {Boolean} [p.required=false]
 * @param {Boolean} [p.disabled=false]
 * @param {Boolean} [p.valid=true]
 * @param {String} [p.errorMessage=""] Error message for invalid field value
 * @param {String} [p.icon=undefined]
 * @param {Function} [p.valueAs] Value converting function
 * @param {AutoCompleteAttributes} [p.autoComplete=AutoCompleteAttributes.On]
 * @constructor
 */
function TextFormField(p) {

  const { name, icon } = p;
  const label = typeof p.label === "string" ? p.label : "";
  const value = typeof p.value === "string" ? p.value : "";
  const required = typeof p.required === "boolean" ? p.required : false;
  const disabled = typeof p.disabled === "boolean" ? p.disabled : false;
  const valid = typeof p.valid === "boolean" ? p.valid : true;
  const errorMessage = typeof p.errorMessage === "string" ? p.errorMessage : "";
  const autoComplete = typeof p.autoComplete === "string" ? p.autoComplete : AutoCompleteAttributes.On;
  const valueAs = typeof p.valueAs === "function" ? p.valueAs : (v) => v;

  return immutableObject(TextFormField.prototype,{

    label: { value: label },
    name: { value: name},
    value: { value: value },
    required: {value: required },
    disabled: { value: disabled},
    valid: { value: valid},
    errorMessage: { value: errorMessage },
    icon: { value: icon},
    autoComplete: { value: autoComplete },
    setValue: { value: v =>
      TextFormField({
        label,
        name,
        value: valueAs(v),
        required,
        disabled,
        valid,
        errorMessage,
        icon,
        autoComplete,
        valueAs
      })}
  });
}
TextFormField.prototype = Object.freeze(Object.create(FormField.prototype));

export default TextFormField;
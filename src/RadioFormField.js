import immutableObject from "./immutableObject";
import FormField from "./FormField";

/**
 * @param {Object} p Parameters object
 * @param {Array.<RadioFormFieldItem>} p.items
 * @param {String} [p.label=""] Field label
 * @param {String} p.name Field name
 * @param {String} [p.value=undefined]
 * @param {Boolean} [p.required=false]
 * @param {Boolean} [p.disabled=false]
 * @param {Boolean} [p.valid=true]
 * @param {String} [p.errorMessage=""] Error message for invalid field value
 * @param {Boolean} [p.nullable=false]
 * @param {Function} [p.valueAs] Value converting function
 * @constructor
 */
function RadioFormField(p) {

  const { name, items } = p;
  const label = typeof p.label === "string" ? p.label : "";
  const value = p.value;
  const required = typeof p.required === "boolean" ? p.required : false;
  const disabled = typeof p.disabled === "boolean" ? p.disabled : false;
  const valid = typeof p.valid === "boolean" ? p.valid : true;
  const errorMessage = typeof p.errorMessage === "string" ? p.errorMessage : "";
  const nullable = typeof p.nullable === "boolean" ? p.nullable : false;
  const valueAs = typeof p.valueAs === "function" ? p.valueAs : (v) => v;

  return immutableObject(RadioFormField.prototype,{
    items: {value: items},
    label: { value: label },
    name: { value: name},
    value: { value: value },
    required: {value: required },
    disabled: { value: disabled},
    valid: { value: valid},
    errorMessage: { value: errorMessage},
    nullable: { value: nullable},
    setValue: { value: v =>
      RadioFormField({
          items,
          label,
          name,
          value: valueAs(v),
          required,
          disabled,
          valid,
          errorMessage,
          nullable,
          valueAs
        }
      )}
  });

}
RadioFormField.prototype = immutableObject(FormField.prototype);

export default RadioFormField;
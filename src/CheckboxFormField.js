import immutableObject from "./immutableObject";
import FormField from "./FormField";

/**
 * @param {Object} p Parameters object
 * @param {String} [p.label=""] Field label
 * @param {String} p.name Field name
 * @param {String} [p.value=undefined]
 * @param {Boolean} [p.required=false]
 * @param {Boolean} [p.disabled=false]
 * @param {Boolean} [p.valid=true]
 * @param {String} [p.errorMessage=""] Error message for invalid field value
 * @param {Boolean} [p.nullable=false]
 * @param {Boolean} [p.checked=undefined] Undefined means indeterminate state
 * @param {Function} [p.valueAs] Value converting function
 * @constructor
 */
function CheckboxFormField(p) {

  const { name, value, checked } = p;
  const label = typeof p.label === "string" ? p.label : "";
  const required = typeof p.required === "boolean" ? p.required : false;
  const disabled = typeof p.disabled === "boolean" ? p.disabled : false;
  const valid = typeof p.valid === "boolean" ? p.valid : true;
  const errorMessage = typeof p.errorMessage === "string" ? p.errorMessage : "";
  const nullable = typeof p.nullable === "boolean" ? p.nullable : false;
  const valueAs = typeof p.valueAs === "function" ? p.valueAs : (v) => v;

  return immutableObject(CheckboxFormField.prototype,{
    label: { value: label },
    name: { value: name},
    value: { value: value },
    required: {value: required },
    disabled: { value: disabled },
    valid: { value: valid },
    errorMessage: { value: errorMessage },
    nullable: { value: nullable },
    checked: { value: checked },
    setValue: { value: v =>
      CheckboxFormField({
        label,
        name,
        value: valueAs(v),
        required,
        disabled,
        valid,
        errorMessage,
        nullable,
        checked,
        valueAs
      })},
    setChecked: { value: c =>
      CheckboxFormField({
        label,
        name,
        value,
        required,
        disabled,
        valid,
        errorMessage,
        nullable,
        checked: c,
        valueAs
      })}/*,
     setIndeterminate: {
     value: c=> {

     }
     }*/
  });

}

CheckboxFormField.prototype = immutableObject(FormField.prototype);

export default CheckboxFormField;
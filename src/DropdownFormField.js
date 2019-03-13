import immutableObject from "./immutableObject";
import FormField from "./FormField";

/**
 * @param {Object} p Parameters object
 * @param {Array.<DropdownFormFieldItem>} p.items
 * @param {String} [p.label=""] Field label
 * @param {String} p.name Field name
 * @param {String} [p.value=undefined]
 * @param {Boolean} [p.required=false]
 * @param {Boolean} [p.disabled=false]
 * @param {Boolean} [p.valid=true]
 * @param {String} [p.errorMessage=""] Error message for invalid field value
 * @param {Boolean} [p.nullable=false]
 * @param {String} [p.placeholder=""]
 * @param {Boolean} [p.search=false]
 * @param {Function} [p.valueAs] Value converting function
 * @constructor
 */
function DropdownFormField(p) {

  const { name, items } = p;
  const label = typeof p.label === "string" ? p.label : "";
  const value = p.value;
  const required = typeof p.required === "boolean" ? p.required : false;
  const disabled = typeof p.disabled === "boolean" ? p.disabled : false;
  const valid = typeof p.valid === "boolean" ? p.valid : true;
  const errorMessage = typeof p.errorMessage === "string" ? p.errorMessage : "";
  const nullable = typeof p.nullable === "boolean" ? p.nullable : false;
  const placeholder = typeof p.placeholder === "string" ? p.placeholder : "";
  const search = typeof p.search === "boolean" ? p.search : false;
  const valueAs = typeof p.valueAs === "function" ? p.valueAs : (v) => v;

  return immutableObject(DropdownFormField.prototype,{
    items: {value: items},
    label: { value: label },
    name: { value: name},
    value: { value: value },
    required: {value: required },
    disabled: { value: disabled},
    valid: { value: valid},
    errorMessage: { value: errorMessage},
    nullable: { value: nullable},
    placeholder: {value: placeholder},
    sarch: { value: search},
    setValue: { value: v =>
      DropdownFormField({
          items,
          label,
          name,
          value: valueAs(v),
          required,
          disabled,
          valid,
          errorMessage,
          nullable,
          placeholder,
          search,
          valueAs
        }
      )}
  });

}
DropdownFormField.prototype = immutableObject(FormField.prototype);

export default DropdownFormField;

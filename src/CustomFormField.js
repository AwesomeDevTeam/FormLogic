import immutableObject from "./immutableObject";
import FormField from "./FormField";

/**
 * @param {Object} p Parameters object
 * @param {String} [p.label=""] Field label
 * @param {String} p.name Field name
 * @param {Number} [p.value=undefined]
 * @param {Boolean} [p.required=false]
 * @param {Boolean} [p.disabled=false]
 * @param {Boolean} [p.valid=true]
 * @param {String} [p.errorMessage=""] Error message for invalid field value
 * @param {Component} p.component Field React component
 * @param {Object} [p.componentParams] Paremeters passed to component
 * @param {Function} [p.componentRef=undefined] Function to ser reference to component. Reference is passed as argument
 * @param {Function} [p.valueAs] Value converting function
 * @constructor
 */
function CustomFormField(p) {
  const { name, value, component } = p;
  const label = typeof p.label === "string" ? p.label : "";
  const required = typeof p.required === "boolean" ? p.required : false;
  const disabled = typeof p.disabled === "boolean" ? p.disabled : false;
  const valid = typeof p.valid === "boolean" ? p.valid : true;
  const errorMessage = typeof p.errorMessage === "string" ? p.errorMessage : "";
  const valueAs = typeof p.valueAs === "function" ? p.valueAs : (v) => v;
  const componentParams = typeof p.componentParams === "object" ? p.componentParams : {};

  return immutableObject(CustomFormField.prototype,{
    label: { value: label },
    name: { value: name},
    value: { value: value },
    required: {value: required },
    disabled: { value: disabled},
    valid: { value: valid},
    errorMessage: { value: errorMessage},
    component: { value: component },
    componentParams: { value: componentParams},
    componentRef: { value: p.componentRef },
    setValue: { value: v =>
      CustomFormField({
          label,
          name,
          value: valueAs(v),
          required,
          disabled,
          valid,
          component,
          errorMessage,
          valueAs,
          componentParams,
          componentRef: p.componentRef
        }
      )}
  });
}
CustomFormField.prototype = immutableObject(FormField.prototype);

export default CustomFormField;

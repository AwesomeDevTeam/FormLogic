import immutableObject from "./immutableObject";
import FormField from "./FormField";

/**
 * @param {Object} p Parameters object
 * @param {String} [p.label=""] Field label
 * @param {String} p.name Field name
 * @param {Number} [p.value=0]
 * @param {Boolean} [p.required=false]
 * @param {Boolean} [p.disabled=false]
 * @param {Boolean} [p.valid=true]
 * @param {String} [p.errorMessage=""] Error message for invalid field value
 * @param {Boolean} [p.nullable=false]
 * @param {Number} [p.minValue=0]
 * @param {Number} [p.maxValue=100]
 * @param {Number} [p.step=1]
 * @param {Function} [p.valueAs] Value converting function
 * @constructor
 */
function SliderFormField(p) {

  const { name, value } = p;
  const label = typeof p.label === "string" ? p.label : "";
  const required = typeof p.required === "boolean" ? p.required : false;
  const disabled = typeof p.disabled === "boolean" ? p.disabled : false;
  const valid = typeof p.valid === "boolean" ? p.valid : true;
  const errorMessage = typeof p.errorMessage === "string" ? p.errorMessage : "";
  const nullable = typeof p.nullable === "boolean" ? p.nullable : false;
  const minValue = typeof p.minValue === "number" ? p.minValue : 0;
  const maxValue = typeof p.maxValue === "number" ? p.maxValue : 1;
  const step = typeof p.step === "number" ? p.step : 1;
  const valueAs = typeof p.valueAs === "function" ? p.valueAs : (v) => v;

  return immutableObject(SliderFormField.prototype,{
    label: { value: label },
    name: { value: name},
    value: { value: value },
    required: {value: required },
    disabled: { value: disabled},
    valid: { value: valid},
    errorMessage: { value: errorMessage },
    nullable: { value: nullable},
    minValue: { value: minValue},
    maxValue: { value: maxValue},
    step: { value: step},
    setValue: { value: v =>
      SliderFormField({
        label,
        name,
        value: valueAs(v),
        required,
        disabled,
        valid,
        errorMessage,
        nullable,
        minValue,
        maxValue,
        step,
        valueAs
      })}
  });
}
SliderFormField.prototype = immutableObject(FormField.prototype);

export default SliderFormField;

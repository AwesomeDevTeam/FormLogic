import immutableObject from "./immutableObject";
import FormField from "./FormField";

/**
 * @param {Object} p Parameters object
 * @param {String} [p.label=""] Field label
 * @param {String} p.name Field name
 * @param {Number} [p.value=""]
 * @param {Boolean} [p.required=false]
 * @param {Boolean} [p.disabled=false]
 * @param {Boolean} [p.valid=true]
 * @param {String} [p.errorMessage=""] Error message for invalid field value
 * @param {Boolean} [p.nullable=false]
 * @param {String} [p.minDate=""]
 * @param {String} [p.maxDate=""]
 * @param {String} [p.minTime=""]
 * @param {String} [p.maxTime=""]
 * @param {String} [p.dateTimeFormat=""]
 * @param {String} [p.placeholder=""]
 * @param {Function} [p.valueAs] Value converting function
 * @constructor
 */
function CalendarFormField(p) {

  const { name, value } = p;
  const label = typeof p.label === "string" ? p.label : "";
  const required = typeof p.required === "boolean" ? p.required : false;
  const disabled = typeof p.disabled === "boolean" ? p.disabled : false;
  const valid = typeof p.valid === "boolean" ? p.valid : true;
  const errorMessage = typeof p.errorMessage === "string" ? p.errorMessage : "";
  const nullable = typeof p.nullable === "boolean" ? p.nullable : false;
  const minDate = p.minDate || "";
  const maxDate = p.maxDate || "";
  const minTime = p.minTime || "";
  const maxTime = p.maxTime || "";
  const dateTimeFormat = typeof p.dateTimeFormat === "string" ? p.dateTimeFormat : "";
  const placeholder = typeof p.placeholder === "string" ? p.placeholder : "";
  const valueAs = typeof p.valueAs === "function" ? p.valueAs : (v) => v;

  return immutableObject(CalendarFormField.prototype,{
    label: { value: label },
    name: { value: name},
    value: { value: value },
    required: {value: required },
    disabled: { value: disabled},
    valid: { value: valid},
    errorMessage: { value: errorMessage },
    nullable: { value: nullable},
    minDate: { value: minDate},
    maxDate: { value: maxDate},
    minTime: { value: minTime},
    maxTime: { value: maxTime},
    placeholder: { value: placeholder },
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
          minDate,
          maxDate,
          minTime,
          maxTime,
          dateTimeFormat,
          placeholder,
          valueAs
        }
      )}
  });

}

CalendarFormField.prototype = immutableObject(FormField.prototype);

export default CalendarFormField;
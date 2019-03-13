import immutableObject from "./immutableObject";
import FormField from "./FormField";

/**
 * @param {Object} p Parameters object
 * @param {String} [p.content=undefined]
 * @param {String} p.name Field name
 * @constructor
 */
function LabelFormField(p) {

  const { content, name } = p;

  return immutableObject(LabelFormField.prototype,{
    content : { value: content},
    name: { value: name},
    setValue: { value: () =>
      LabelFormField({
        content,
        name
      })}
  });
}
LabelFormField.prototype = immutableObject(FormField.prototype);

export default LabelFormField;
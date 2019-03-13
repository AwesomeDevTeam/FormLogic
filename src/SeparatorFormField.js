import immutableObject from "./immutableObject";
import FormField from "./FormField";

/**
 * @param {Object} p Parameters object
 * @param {String} [p.content=undefined]
 * @param {String} p.name Field name
 * @constructor
 */
function SeparatorFormField(p) {

  const { content, name } = p;

  return immutableObject(SeparatorFormField.prototype,{
    content : { value: content},
    name: { value: name},
    setValue: { value: () =>
      SeparatorFormField({
        content,
        name
      })}
  });
}
SeparatorFormField.prototype = immutableObject(FormField.prototype);

export default SeparatorFormField;

/**
 * @param {Object} p Parameters object
 * @param {String} p.header Tab header
 * @param {String} p.key unique key
 * @param {Array.<FormField>} p.fields Form fields
 * @constructor
 */
function FormTab(p) {

  return Object.freeze(Object.create(FormTab.prototype,{

    key: { value: p.key},
    header: { value: p.header },
    fields: { value: p.fields }

  }));

}
FormTab.prototype = Object.freeze(Object.create(null));


export default FormTab;

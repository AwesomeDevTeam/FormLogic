import immutableObject from "./immutableObject";

/**
 * @param {Object} p Parameters object
 * @param {Array.<FormTab>} Form tabs
 * @constructor
 */
function Form(p) {

  const {tabs}  = p;

  return immutableObject(Form.prototype,{

    getFieldByName: {value: name =>

      tabs.reduce( (prevTab, tab) => {

        if ( prevTab ) {
          return prevTab;
        } else {

          return tab.fields.reduce((prevField, field) => {

            if (prevField) {
              return prevField;
            } else {
              if (field.name === name) {
                return field;
              }
            }

          }, null);

        }

      }, null)

    },
    tabs: {value: tabs}

  });

}
Form.prototype = immutableObject(null);

export default Form;

import immutableObject from "./immutableObject";

// https://developers.google.com/web/updates/2015/06/checkout-faster-with-autofill
/**
 * @enum AutoCompleteAttributes
 */
export default immutableObject(null, {
  On: { value: "on", enumerable: true },
  Off: { value: "off", enumerable: true },

  // Credit card
  CreditCardName: { value: "cc-name", enumerable: true},
  CreditCardNumber: { value: "cc-number", enumerable: true},
  CreditCardCsc: { value: "cc-csc", enumerable: true},
  CreditCardExpMonth: { value: "cc-exp-month", enumerable: true},
  CreditCardExpYear: { value: "cc-exp-year", enumerable: true},
  CreditCardExp: { value: "cc-exp", enumerable: true},
  CreditCardType: { value: "cc-type", enumerable: true},

  // Name
  FullName: { value: "name", enumerable: true },
  FirstName: { value: "given-name", enumerable: true },
  MiddleName: { value: "additional-name", enumerable: true },
  LastName: { value: "family-name", enumerable: true },

  // Email
  Email: { value: "email", enumerable: true },

  // Address
  StreetAddress: { value: "street-address", enumerable: true },
  AddressLine1: { value: "address-line1", enumerable: true },
  AddressLine2: { value: "address-line2", enumerable: true },
  StateOrProvince: { value: "address-level1", enumerable: true },
  City: { value: "address-level2", enumerable: true },
  PostalCode: { value: "postal-code", enumerable: true },
  Country: { value: "country", enumerable: true },

  // Phone
  Phone: { value: "tel", enumerable: true },

  // Sections prefix
  SectionShipping: { value: "shipping", enumerable: true },
  SectionBilling: { value: "billing", enumerable: true }

});

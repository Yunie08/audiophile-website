import * as Yup from "yup";
import {
  namePattern,
  phonePattern,
  addressPattern,
  zipCodePattern,
} from "./regexValidation";
import { errorMessage } from "./errorMessage";

import { countryCodeList } from "./countryList";
console.log(countryCodeList);

export const orderSchema = Yup.object({
  firstname: Yup.string()
    .trim()
    .matches(namePattern, "Invalid firstname")
    .required(errorMessage.required),
  lastname: Yup.string()
    .trim()
    .matches(namePattern, "Invalid lastname")
    .required(errorMessage.required),
  email: Yup.string()
    .trim()
    .email("Invalid email")
    .required(errorMessage.required),
  phone: Yup.string().trim().matches(phonePattern, "Invalid phone number"),
  address: Yup.string()
    .trim()
    .matches(addressPattern, "Invalid address")
    .required(errorMessage.required),
  zipCode: Yup.number().trim().matches(zipCodePattern, "Invalid ZIP code"),
  city: Yup.string()
    .trim()
    .matches(namePattern, "Invalid city")
    .required(errorMessage.required),
  country: Yup.string()
    .trim()
    .oneOf(countryCodeList, "Invalid country. Please provide country code.")
    .required(errorMessage.required),
});

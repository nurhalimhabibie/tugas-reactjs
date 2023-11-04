import * as yup from "yup";

const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
  username: yup.string().min(3, "Username must be at least 3 characters long").required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup.string().min(5).matches(passwordRules, { message: "Please create a stronger password" }).required("Required"),
});

const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  // Name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password field is required";
  }

  if (!Validator.isLength(data.password, {
      min: 6,
      max: 30
    })) {
    errors.password = "Password must be at least 6 characters";
  }

  if (!(/[1-9]/).test(data.password)) {
    errors.password = "Password must contain at least 1 number";
  }


  if (!(/[a-z]/).test(data.password)) {
    errors.password = "Password must contain at least 1 lowercase letter";
  }


  if (!(/[A-Z]/).test(data.password)) {
    errors.password = "Password must contain at least 1 uppercase letter";
  }


  if (!(/[!@#\$%\^\&*\)\(+=._-]/).test(data.password)) {
    errors.password = "Password must contain at least 1 special character";
  }


  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
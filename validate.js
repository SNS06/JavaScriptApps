function validate() {
  // request data gathering logic
  let user_name = document.getElementById("user").value;
  let password = document.getElementById("pass").value;
  let regex = /[a-z][A-Z][0-9]/;

  // username validation
  if (user_name === "") {
    alert("Please enter username");
    return false;
  }

  // password validation
  if (password === "") {
    alert("Please enter password");
    return false;
  }

  //   if (password.length < 8 || password.length > 12) {
  //     alert("Password should be minimum 8 characters and maximum 12 character");
  //     return false;
  //   }

  //   if (!regex.test(password)) {
  //     alert("password should be combination of letters and numbers");
  //     return false;
  //   }
  // if all validations pass
  return true;
}

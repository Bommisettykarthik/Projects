function validation(values) {
   let errors = {};
 
   const email_pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
   const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/;
 
   if (values.email === "") {
     errors.email = "Email should not be empty";
   } else if (!email_pattern.test(values.email)) {
     errors.email = "Invalid email";
   } else {
     errors.email = "";
   }
 
   if (values.password === "") {
     errors.password = "Password should not be empty";
   } else if (!password_pattern.test(values.password)) {
     errors.password =
       "password doesn't match";
   } else {
     errors.password = "";
   }
 
   return errors;
 }
 
 export default validation;
 

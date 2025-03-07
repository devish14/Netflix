const LoginValidation = (email,password) => {
 const userEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
 const userPassword = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/.test(password);

 if(!userEmail) return "Invalid Email Id";

 if(!userPassword) return "Invalid Password"

 return null;
}

export default LoginValidation;
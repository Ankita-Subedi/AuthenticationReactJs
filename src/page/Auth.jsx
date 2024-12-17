import { useState } from "react";
import Input from "../components/Input";
import SubmitBtn from "../components/SubmitBtn";
import Title from "../components/Title";

const Auth = () => {
  // usestates
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  //  functions
  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const isValidPassword = (password) => {
    const symbolRegex = /[!@#$%^&*(),.?{}|<>]/;
    const numberRegex = /[0-9]/;
    const upperCaseRegex = /[A-Z]/;
    const lowerCaseRegex = /[a-z]/;
    return (
      password.length >= 8 &&
      symbolRegex.test(password) &&
      numberRegex.test(password) &&
      upperCaseRegex.test(password) &&
      lowerCaseRegex.test(password)
    );
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!isValidPhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!isValidPassword(formData.password)) {
      newErrors.password =
        "Password must be atleast 8 characted long and contain atleast one symbol, one number, one uppercase letter, one lowercase letter";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      console.log("Form submitted", formData);
    } else {
      console.log("Form submission failed.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //   return statement
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Title text={isSignUp ? "Sign Up" : "Login"} />
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
      >
        {isSignUp ? (
          <>
            <Input
              label="Name"
              placeholder="Enter your name"
              type="text"
              value={formData.name}
              name="name"
              onChange={handleChange}
            />
            {errors.name && <div className="error">{errors.name}</div>}

            <Input
              label="Number"
              placeholder="Enter your phone number"
              type="text"
              value={formData.phoneNumber}
              name="phoneNumber"
              onChange={handleChange}
            />
            {errors.phoneNumber && (
              <div className="error">{errors.phoneNumber}</div>
            )}
          </>
        ) : null}
        <Input
          label="Email"
          placeholder="Enter your email address"
          type="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
        />
        {errors.email && <div className="error">{errors.email}</div>}

        <Input
          label="Password"
          placeholder="Enter your password"
          type="password"
          value={formData.password}
          name="password"
          onChange={handleChange}
        />
        {errors.password && <div className="error">{errors.password}</div>}

        <div className="flex justify-center mt-4">
          <SubmitBtn buttonText={isSignUp ? "Sign Up" : "Login"} />
        </div>
      </form>
      {!isSignUp && (
        <p className="mt-4 text-sm">
          Don't have an account?{" "}
          <button
            onClick={handleToggle}
            className="text-blue-500 hover:underline"
          >
            Sign up now
          </button>
        </p>
      )}
    </div>
  );
};

export default Auth;

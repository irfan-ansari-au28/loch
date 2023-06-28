import React, { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);

    // Validate the email input
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(inputValue));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (isValidEmail) {
      window.location.href = "https://app.loch.one/welcome";

      console.log("Form submitted!");
    } else {
      alert("Email can't be empty!");
    }
  };
  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="signup-title">Sign up for exclusive access.</div>
      <div className="input-field">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your email address"
          value={email}
          onChange={handleChange}
        />
      </div>
      {email.trim() && !isValidEmail && (
        <div className="form-text error">Please enter a valid email</div>
      )}
      <button className="button" type="submit">
        Get started
      </button>
      <div className="form-text">
        You’ll receive an email with an invite link to join.
      </div>
    </form>
  );
};

export default Form;

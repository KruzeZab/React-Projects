import React, { useState } from 'react';

const RegistrationForm = () => {
  const initialValues = {
    fname: '',
    lname: '',
    email: '',
    password: '',
  };

  const [input, setInput] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    setInput({ ...input, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    setErrors(validate());
    if (valid && submitted) {
      setInput(initialValues);
    }
  };

  const validate = () => {
    const msg = {};
    if (!input.fname) {
      msg.fname = 'First name cant be blank!';
    }
    if (!input.lname) {
      msg.lname = 'Last name cant be blank!';
    }
    if (!input.email) {
      msg.email = 'Email cant be blank!';
    }
    if (!input.password) {
      msg.password = 'Password cant be blank!';
    }

    Object.keys(msg).length === 0 ? setValid(true) : setValid(false);

    return msg;
  };

  const renderStatus = () => {
    if (valid && submitted) {
      return (
        <div className="alert alert-success">
          Your form has been successuly submitted.
        </div>
      );
    } else if (!valid && submitted) {
      return (
        <div className="alert alert-danger">
          An error occured in the form.
        </div>
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {renderStatus()}
      <div className="mb-3">
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          className="form-control"
          id="fname"
          autoFocus
          value={input.fname}
          onChange={handleChange}
          name="fname"
        />
        <span className="text-danger">{errors.fname}</span>
      </div>

      <div className="mb-3">
        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          className="form-control"
          id="lname"
          name="lname"
          value={input.lname}
          onChange={handleChange}
        />
        <span className="text-danger">{errors.lname}</span>
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={input.email}
          onChange={handleChange}
        />
        <span className="text-danger">{errors.email}</span>
      </div>

      <div className="mb-3">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          value={input.password}
          onChange={handleChange}
        />
        <span className="text-danger">{errors.password}</span>
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        disabled={valid && submitted}
      >
        Submit
      </button>
    </form>
  );
};

export default RegistrationForm;

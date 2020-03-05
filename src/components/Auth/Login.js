import React, { useState } from "react";
import useFormValidation from "./useFormValidation";
import validateLogin from "./validateLogin";
import firebase from "../../firebase";
import { Link } from "react-router-dom";

const INITIAL_STATE = {
  name: "",
  email: "",
  password: ""
};

function Login(props) {
  const {
    handleChange,
    handleSubmit,
    handleBlure,
    values,
    errors,
    isSubmiting
  } = useFormValidation(INITIAL_STATE, validateLogin, authnticateUser);
  const [login, setLogin] = useState(true);
  const [firebaseError, setFirebaseError] = useState(null);

  async function authnticateUser() {
    const { name, email, password } = values;

    try {
      login
        ? await firebase.login(email, password)
        : await firebase.register(name, email, password);
      props.history.push("/");
    } catch (error) {
      console.error("Authentocation Error", error);
      setFirebaseError(error.message);
    }
  }

  return (
    <div>
      <h2 className="mv3">{login ? "Login" : "Create Account"}</h2>
      <form onSubmit={handleSubmit} className="flex flex-column">
        {!login && (
          <input
            onChange={handleChange}
            value={values.name}
            name="name"
            type="text"
            placeholder="Your Name"
            autoComplete="off"
          />
        )}
        <input
          onChange={handleChange}
          onBlur={handleBlure}
          value={values.email}
          type="email"
          name="email"
          className={errors.email && "error-input"}
          placeholder="Your Email"
          autoComplete="off"
        />
        {errors.email && <p className="error-text">{errors.email}</p>}
        <input
          onChange={handleChange}
          onBlur={handleBlure}
          value={values.password}
          type="password"
          name="password"
          className={errors.password && "error-input"}
          placeholder="Choose a secure password"
        />
        {errors.password && <p className="error-text">{errors.password}</p>}
        {firebaseError && <p className="error-text">{firebaseError}</p>}
        <div className="flex mt3">
          <button
            type="submit"
            className="button pointer br2"
            disabled={isSubmiting}
            style={{ background: isSubmiting ? "grey" : "orange" }}
          >
            Submit
          </button>
          <button
            type="button"
            className="button pointer"
            onClick={() => setLogin(prevLogin => !prevLogin)}
          >
            {login ? "Need to Create an Account?" : "Already have an account?"}
          </button>
        </div>
      </form>
      <div className="forgot-password">
        <Link to="forgot">Forgot password?</Link>
      </div>
    </div>
  );
}

export default Login;

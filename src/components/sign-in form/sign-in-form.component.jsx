import React from 'react';
import { useState} from "react";
import {useDispatch} from 'react-redux';




import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component.jsx";
import FormInput from "../form-input/form-input.component.jsx";
import {SignUpContainer, ButtonsContainer } from "./sign-in-form.styles.jsx";
import { googleSignInStart,emailSignInStart  } from "../../store/user/user.action.js";

const defaultFormFields = {
  email: "",
  password: "",
};



const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const dispatch = useDispatch();


  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());

  };

  const submitFormHandler = async (event) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email,password));

      resetFormFields();
    } catch (err) {
      switch(err.code) {
        case 'auth/wrong-password':
          alert('Incorrect password');
          break;
        case 'auth/user-not-found':
          alert('User not found');
          break;
        default:
          console.log(err)
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <h2>Already have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={submitFormHandler}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignUpContainer>
  );
};
export default SignInForm;

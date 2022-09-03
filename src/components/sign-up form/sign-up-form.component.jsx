import { useState } from "react";
import { useDispatch} from 'react-redux';

import {signUpStart} from '../../store/user/user.action';

import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils.js'; 

import Button from "../button/button.component.jsx";
import FormInput from "../form-input/form-input.component.jsx";
import {SignUpContainer} from  './sign-up-form.styles.jsx';


const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const dispatch = useDispatch();


  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const submitFormHandler = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword){
      alert('Password and confirm password do not match!');
      return;
    }
    try {
      dispatch(signUpStart(email,password,displayName));
      resetFormFields();

    } catch (err) {
      if(err.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log(err.message);
      }
    }
  }


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value});
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={submitFormHandler}>
        <FormInput
          label = 'Display Name'
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <FormInput
          label = "Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label= "Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};
export default SignUpForm;

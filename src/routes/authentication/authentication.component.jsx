// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import React from 'react';
import SignUpForm from "../../components/sign-up form/sign-up-form.component";
import SignInForm from "../../components/sign-in form/sign-in-form.component";
import {AuthenticationContainer} from './authentication.styles.jsx';



const Authentication = () => {
  // useEffect(() => {
  //   const callGetRedirect = async () => {
  //     const response = await getRedirectResult(auth);
  //     if(response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   };
  //   callGetRedirect();
  // }, []);



  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};
export default Authentication;

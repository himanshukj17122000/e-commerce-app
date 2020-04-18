import React from "react";
import "../sign-in-sign-up/sign-in-sign-up.styles.scss";
import SignIn from "../../components/signIn/signIn.components";
import SignUp from "../../components/sign-up/sign-up.components";

const SignInSignUp = () => (
  <div className='sign-in-and-sign-out'>
    <SignIn />
    <SignUp />
  </div>
);

export default SignInSignUp;

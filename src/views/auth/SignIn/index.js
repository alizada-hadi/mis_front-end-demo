import React from "react";
import SignInForm from "./SignInForm";

const SignIn = () => {
  return (
    <>
      <div className="mb-8">
        <h3 className="mb-1 font-vazir text-2xl"> خوش آمدید!</h3>
        <p className="font-vazir">لطفا معلومات کاربری خود را وارد نمایید!</p>
      </div>
      <SignInForm disableSubmit={false} />
    </>
  );
};

export default SignIn;

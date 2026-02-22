'use client';

import { useCallback, useState } from "react";
import { Field, FieldValue, FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "./Inputs/Input";
import Button from "./Button";
import AuthSocialButton from "./AuthSocialButton";
import { BsGithub, BsGoogle } from "react-icons/bs";

type Variant = "LOGIN" | "REGISTER"; 
const AuthForm = () => {
const [variant, setVariant] = useState<Variant>("LOGIN");
const [isLoading, setIsLoading] = useState(false);

const toggleVariant = useCallback(() => { 
 if (variant === "LOGIN") {
  setVariant("REGISTER");
 } else {
  setVariant("LOGIN");
 }
},[variant]);

const socialAction = (action: string) => {
    setIsLoading(true);
}

const {register, handleSubmit, formState: { errors }   
} = useForm<FieldValues>({
    defaultValues: {
        name: "",
        email: "",
        password: "",
    }
})

if(variant === "REGISTER") {
    //
}
if(variant === "LOGIN") {
    //
}

const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
}

return (
<div className="auth-form-wrapper">
  <form onSubmit={handleSubmit(onSubmit)}>
    <div className="input-group">
      {variant === "REGISTER" && (
        <Input label="Name" register={register} errors={errors} id="name" disabled={isLoading} />
      )}
      <Input label="Email address" register={register} errors={errors} id="email" type="email" disabled={isLoading}/>
      <Input label="Password" register={register} errors={errors} id="password" type="password" disabled={isLoading}/>
    </div>

    <Button disabled={isLoading} fullWidth type="submit">
      {variant === "LOGIN" ? "Sign in" : "Register"}
    </Button>
  </form>

  {/* Divider */}
  <div className="relative-divider">
    <div className="divider-line"></div>
    <div className="divider-text-wrapper">
      <span className="divider-text">Or continue with</span>
    </div>
  </div>

  {/* Centered Social Buttons */}
  <div className="social-container">
    <div className="social-grid">
      <AuthSocialButton icon={BsGithub} onClick={() => socialAction('github')} />
      <AuthSocialButton icon={BsGoogle} onClick={() => socialAction('google')} />
    </div>
  </div>

  {/* Footer Toggle */}
  <div className="footer-toggle">
    <p>{variant === "LOGIN" ? "New to Messenger?" : "Already have an account?"}</p>
    <button onClick={toggleVariant} className="link-style">
      {variant === 'LOGIN' ? 'Create an account' : 'Login'}
    </button>
  </div>
</div>
)
}

export default AuthForm;
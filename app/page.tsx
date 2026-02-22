import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    /* This is the container we will center everything inside of */
    <div className="full-page-center">
      <div className="auth-card">
        <div className="auth-header">
          <Image src="/logo.png" alt="messenger Logo" width={72} height={72} />
          <h2>Sign in to your account</h2>
        </div>
        <AuthForm />
      </div>
    </div>
  );
}


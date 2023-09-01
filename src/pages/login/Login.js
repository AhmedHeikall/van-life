import { Form, redirect, useNavigation } from "react-router-dom";
import "./login.css";

export async function action({ request }) {
  // const formData = await request.formData();
  // const email = formData.get("email");
  // const password = formData.get("password");

  try {
    // const data = await loginUser({ email, password });
    localStorage.setItem("loggedIn", true);
    return redirect("/host");
  } catch (error) {
    return error.message;
  }
}

const Login = () => {
  const navigation = useNavigation();

  return (
    <div className="vanlife__login">
      <h1 className="login_header">Sign in to your account</h1>
      <Form method="post" replace>
        <input name="email" type="email" placeholder="Email address" />
        <input name="password" type="password" placeholder="Password" />

        <button
          type="submit"
          className="login-btn"
          disabled={navigation.state === "submitting"}
        >
          {navigation.state === "submitting" ? "Logging in..." : "Sign in"}
        </button>
      </Form>
      <h3 className="login_info">
        Don’t have an account?<span>Create one now</span>
      </h3>
    </div>
  );
};

export default Login;

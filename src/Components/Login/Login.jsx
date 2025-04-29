import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";

const Login = () => {
    const {signinUser} = use(AuthContext)
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)


        //login user
        signinUser(email, password)
        .then (result => {
            console.log(result)
        })
        .catch(error => {
            console.log(error)
        })
    }
  return (
    <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl text-center font-bold">Login now!</h1>
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <p>New to this site? please <Link className="text-blue-400 underline" to={"/register"}>Register</Link></p>
      </div>
    </div>
  );
};

export default Login;

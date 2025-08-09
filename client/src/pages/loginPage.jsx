import React from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/slices/auth";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault()
     const data = new Object()
     data.email = e.target.email.value
     data.password = e.target.password.value 

    try {
      dispatch(loginUser(data))
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit} className="card-body">
          <h2 className="text-2xl font-bold text-center">Login</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button  type="submit" className="btn btn-primary">Login</button>
          </div>
          <p className="text-center text-sm mt-2">
            Don't have an account? <a href="/signup" className="link link-hover text-primary">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

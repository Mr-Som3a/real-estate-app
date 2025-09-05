import { useState } from "react";
import { TextField} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { useNavigate } from "react-router-dom";
import LoadingSpinner from "./loadingSpinner";
// import LoadingSpinner from "../loadingSpinner";
// import { signup } from "../../../api/auth";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Min 6 characters").required("Required"),
});
const SignUpSchema = Yup.object().shape({
  fullName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Min 6 characters").required("Required"),
});

const AuthForm = () => {
  
  const [isLogin, setIsLogin] = useState(true);
  const [isSubmitting, setIsSubmitting] =useState(false)
  const [isLoading,setIsLoading]=useState(false)
  
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-white p-8 shadow-lg">
      <div className="flex items-center space-x-2 mb-6">
        <img src="/realEstate.svg" className="w-8 h-8 text-green-600 animate-bounce" />
        <h1 className="text-2xl font-bold text-gray-800">Real Estate</h1>
      </div>

      <h2 className="text-xl font-semibold mb-2">
        {isLogin ? "Welcome Back" : "Create Account"}
      </h2>
      <p className="text-gray-500 mb-6">
        {isLogin
          ? "Login to continue looking estate"
          : "Sign up to start Looiking for estate"}
      </p>
      {/*  */}
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={isLogin?LoginSchema:SignUpSchema}
        onSubmit={async (values) => {
          setIsSubmitting(true)
          try {
            isLogin?await login(values):await signup(values);
            navigate("/");
          } catch (error) {
            console.log(error);
          }finally{
            setIsSubmitting(false)
          }
        }}
      >
        {({ errors, touched }) => (
          <Form>
            {!isLogin && (
              <Field
                name="fullName"
                as={TextField}
                fullWidth
                label="Full Name"
                margin="normal"
                error={!!errors.fullName && touched.fullName}
                helperText={touched.fullName && errors.fullName}
              />
            )}
            <Field
              name="email"
              as={TextField}
              fullWidth
              label="Email"
              margin="normal"
              error={!!errors.email && touched.email}
              helperText={touched.email && errors.email}
            />
            <Field
          
              name="password"
              as={TextField}
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              error={!!errors.password && touched.password}
              helperText={touched.password && errors.password}
            />

            

              <button disabled={isSubmitting} type="submit" className="btn bg-teal-600 w-full">
              {isLoading?<LoadingSpinner scale={false}/>:isLogin ? "Log In" : "Sign Up"}
              
            </button>
           
            
          </Form>
        )}
      </Formik>
      {/* {error&& (<div className="text-red-500 font-bold my-2">{error.response.data.message||error.message}</div>)} */}
      <p className="mt-6 text-gray-600">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-green-600 font-semibold"
        >
          {isLogin ? "Sign up" : "Log in"}
        </button>
      </p>
    </div>
  );
};

export default AuthForm;

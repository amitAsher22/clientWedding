import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useFormik } from "formik";
import * as Yup from "yup";

function Login() {
  const [data, setData] = useState({ email: "", password: "" });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalud email address")
        .required("Email is Required"),
      password: Yup.string().required("password is Required"),
    }),
    onSubmit: (values) => {
      axios.post("http://localhost:8000/login/login", values).then((res) => {
        const data = res.data;
        console.log("after send data to mongodb", data);
      });
    },
  });

  return (
    <LoginDiv>
      <SecondDivLogin>
        <GoogleLogin
          size="sm"
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse.credential);
            var decoded = jwt_decode(credentialResponse.credential);
            if (decoded.email_verified) {
              console.log("verify!!!!");
            } else {
              console.log("not verify !!");
            }
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
        <TextMiddle>or</TextMiddle>

        <Input
          placeholder="Email"
          name="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email ? (
          <span className="errorMessage">{formik.errors.email}</span>
        ) : null}
        <Input
          placeholder="Password"
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik.errors.password ? (
          <span className="errorMessage">{formik.errors.password}</span>
        ) : null}
        <BtnLogin type="submit" onClick={formik.handleSubmit}>
          Log In
        </BtnLogin>

        <Hrstyle />
        <Link to="/register">
          <CreateAccountBtn>Create new account</CreateAccountBtn>
        </Link>
        {/* <ToastContainer /> */}
      </SecondDivLogin>
    </LoginDiv>
  );
}

export default Login;

const LoginDiv = styled.div`
  ackground-color: #d5d4d2;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1), 0 9px 10px rgba(0, 0, 0, 0.1);
  width: 30%;
  height: 80%;
  padding: 1.5em;
  margin: auto;
`;

const SecondDivLogin = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.8rem;
  margin: auto;
`;

const Input = styled.input`
  padding: 0.9rem;
  font-size: 1rem;
  background-color: #d7e0ec;
  color: black;
  border: 0.1em solid gray;
  border-radius: 0.7rem;
`;

const BtnLogin = styled.button`
  padding: 0.9rem;
  font-size: 1.5rem;
  color: white;
  background-color: #4267b2;
  border: none;
  border-radius: 0.7rem;
  &:hover {
    cursor: pointer;
  }
`;

const Hrstyle = styled.hr`
  width: 100%;
  font-size: 0.2rem;
`;

const CreateAccountBtn = styled.button`
  font-size: 1.3rem;
  color: white;
  width: 90%;
  background-color: #42b72a;
  border: none;
  border-radius: 0.2rem;
  margin: auto;
  &:hover {
    cursor: pointer;
  }
`;

const TextMiddle = styled.h2`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  &:after,
  &:before {
    content: "";
    flex: 1 1;
    border-bottom: 1px solid;
    margin: auto;
  }
`;

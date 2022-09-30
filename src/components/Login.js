import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GoogleButton from "react-google-button";
import { gapi } from "gapi-script";
import jwt_decode from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";

function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const clientId =
    "779329735420-mrklt4ktdq2u3d7m57gbjhbj0hv386hr.apps.googleusercontent.com";

  const collectionLogin = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const sendData = () => {
    axios.post("http://localhost:8000/login/login", data).then((res) => {
      const data = res.data;
      errorMessages(data);
    });
  };

  const errorMessages = (data) => {
    if (data.error) {
      data.error.errors.map((msgError) => {
        toast.error(msgError.msg);
      });
    }
    if (data.result) {
      if (data.result.length === 0) {
        toast.error("create new account");
      } else {
        toast("sucsess");
      }
    }
  };

  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS ! curent  :  res :", res);
  };
  const onFailure = (res) => {
    console.log("LOGIN FAILED  : res: ", res);
  };

  // useEffect(() => {
  //   function start() {
  //     gapi.client.init({
  //       clientid: clientId,
  //       scope: "",
  //     });
  //   }

  //   gapi.load("client : auth2", start);
  // });

  return (
    <LoginDiv>
      <SecondDivLogin>
        <GoogleButton
          style={{ width: "100%" }}
          clientid={clientId}
          onSuccess={onSuccess}
          onFailure={onFailure}
        />
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse.credential);
            var decoded = jwt_decode(credentialResponse.credential);
            console.log(decoded);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
        <TextMiddle>or</TextMiddle>
        <Input
          placeholder="Email"
          name="email"
          onChange={(e) => collectionLogin(e)}
        />
        <Input
          placeholder="Password"
          name="password"
          type="password"
          onChange={(e) => collectionLogin(e)}
        />
        <BtnLogin onClick={() => sendData()}>Log In</BtnLogin>
        <Hrstyle />
        <Link to="/register">
          <CreateAccountBtn>Create new account</CreateAccountBtn>
        </Link>
        <ToastContainer />
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

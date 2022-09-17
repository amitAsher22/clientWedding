import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";

///react-toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [data, setData] = useState({ email: "", password: "", name: "" });
  const [messageError, setMessageError] = useState([]);

  const collectionData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const sendDataRegister = () => {
    try {
      axios.post("http://localhost:8000/register", data).then((res) => {
        setMessageError(res.data);
      });
      errorMessage();
      // toast.error(messageError[0].msg || "error");
    } catch (error) {
      console.log(error, "error from register client");
    }
  };

  const errorMessage = () => {
    toast("succesr");
  };

  return (
    <LoginDiv>
      <SecondDivLogin>
        <Input
          placeholder="Email"
          name="email"
          onChange={(e) => collectionData(e)}
        />
        <Input
          placeholder="Name"
          name="name"
          onChange={(e) => collectionData(e)}
        />
        <Input
          placeholder="Password"
          name="password"
          onChange={(e) => collectionData(e)}
        />
        <BtnLogin onClick={() => sendDataRegister()}>register</BtnLogin>
        <Hrstyle />
        <Link to="/">
          <LoginUser>Go Login</LoginUser>
        </Link>
      </SecondDivLogin>
      <ToastContainer />
    </LoginDiv>
  );
}

export default Register;

const LoginDiv = styled.div`
  ackground-color: #fff;
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
  background-color: orange;
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

const LoginUser = styled.button`
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

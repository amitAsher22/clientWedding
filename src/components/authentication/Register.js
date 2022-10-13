import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import * as Yup from "yup";

function Register() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalud email address")
        .required("email is Required"),
      password: Yup.string().required("Password is Required"),
      name: Yup.string().required("Name is Required"),
    }),
    onSubmit: (values) => {
      axios.post("http://localhost:8000/register", values).then((res) => {
        const resultBack = res.data;
        const errrorMsg = res.data.result.errorMsg;

        if (errrorMsg) {
          toast.error("המשתמש קיים במערכת , עבור להתחבר");
        } else {
          navigate("/login");
        }

        console.log("data after send mongodb", resultBack);
      });
    },
  });

  return (
    <LoginDiv>
      <SecondDivLogin>
        <Input
          placeholder="אימל"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <span className="errorMessage">{formik.errors.email}</span>
        ) : null}
        <Input
          placeholder="שם"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name ? (
          <span className="errorMessage">{formik.errors.name}</span>
        ) : null}
        <Input
          placeholder="סיסמא"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          type="password"
        />
        {formik.errors.password ? (
          <span className="errorMessage">{formik.errors.password}</span>
        ) : null}
        <BtnLogin type="submit" onClick={formik.handleSubmit}>
          הירשם
        </BtnLogin>
        <Hrstyle />
        <Link to="/login">
          <LoginUser>עבור להתחבר</LoginUser>
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

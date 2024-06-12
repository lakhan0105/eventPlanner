import React, { useEffect, useState } from "react";
import FormInput from "../Components/FormInput";
import { NavLink, redirect, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/auth/authSlice";
import { ID } from "appwrite";

function Register() {
  // initialVal
  const initialVal = {
    firstName: "",
    email: "",
    password: "",
    userId: "",
  };

  const [data, setData] = useState(initialVal);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currUser } = useSelector((state) => state.authReducer);

  // handleChange;
  function handleChange(e) {
    const key = e.target.name;
    const val = e.target.value;
    setData((prev) => {
      return { ...prev, [key]: val };
    });
  }

  // handleSubmit
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(registerUser({ ...data, userId: ID.unique() }));
  }

  // if currUser is present, redirect to home page
  useEffect(() => {
    if (currUser) {
      navigate("/");
    }
  }, [currUser]);

  return (
    <section className="w-full h-screen bg-[#f5f5f5] flex flex-col items-center">
      <form
        className="mt-40 rounded-md w-full max-w-[400px] mx-auto p-10 bg-white shadow-md"
        onSubmit={handleSubmit}
      >
        <h2 className="mb-6 text-center font-semibold text-3xl">Sign up</h2>

        {/* FIRST NAME */}
        <FormInput
          label={"first name"}
          name={"firstName"}
          type={"text"}
          handleChange={handleChange}
        />

        {/* EMAIL */}
        <FormInput name={"email"} type={"text"} handleChange={handleChange} />

        {/* PASSWORD */}
        <FormInput
          name={"password"}
          type={"password"}
          handleChange={handleChange}
        />

        {/* SUBMIT BTN */}
        <button
          type="submit"
          className="border px-3 py-2 rounded-lg bg-[#a32a2a] text-white w-full mt-2"
        >
          Signup
        </button>

        {/* MSG */}
        <p className="text-center mt-4 text-gray-700">
          Already a member?{" "}
          <NavLink to={"/login"}>
            <span className="text-[#a32a2a] ml-1">login</span>
          </NavLink>
        </p>
      </form>
    </section>
  );
}

export default Register;

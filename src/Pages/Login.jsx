import React, { useEffect, useState } from "react";
import FormInput from "../Components/FormInput";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/auth/authSlice";

function Login() {
  const initialVal = {
    email: "",
    password: "",
  };

  const [data, setData] = useState(initialVal);
  const dispatch = useDispatch();
  const { currUser } = useSelector((state) => state.authReducer);
  const navigate = useNavigate();

  // navigate to home if currUser is already present
  useEffect(() => {
    if (currUser) {
      navigate("/");
    }
  }, [currUser]);

  // handleChange
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
    dispatch(loginUser(data));
  }

  return (
    <section className="w-full h-screen bg-[#f5f5f5] flex flex-col items-center">
      <form
        className="mt-40 rounded-md w-full max-w-[350px] mx-auto p-10 bg-white shadow-md"
        onSubmit={handleSubmit}
      >
        <h2 className="mb-6 text-center font-semibold text-3xl">Login</h2>

        <FormInput name={"email"} type={"text"} handleChange={handleChange} />
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
          login
        </button>

        {/* MSG */}
        <p className="text-center mt-4 text-gray-700">
          Don't have an account?{" "}
          <NavLink to={"/register"}>
            <span className="text-[#a32a2a] ml-1">Sign up</span>
          </NavLink>
        </p>
      </form>
    </section>
  );
}

export default Login;

import React from "react";
import FormInput from "../Components/FormInput";
import { NavLink } from "react-router-dom";

function Register() {
  return (
    <section className="w-full h-screen bg-[#f5f5f5] flex flex-col items-center">
      <form className="mt-40 rounded-md w-full max-w-[400px] mx-auto p-10 bg-white shadow-md">
        <h2 className="mb-6 text-center font-semibold text-3xl">Sign up</h2>

        <FormInput label={"first name"} name={"name"} type={"text"} />
        <FormInput name={"email"} type={"text"} />
        <FormInput name={"password"} type={"password"} />

        <button
          type="submit"
          className="border px-3 py-2 rounded-lg bg-[#a32a2a] text-white w-full mt-2"
        >
          Signup
        </button>

        <p className="text-center mt-4 text-gray-700">
          Already a member?{" "}
          <NavLink to={"/register"}>
            <span className="text-[#a32a2a] ml-1">login</span>
          </NavLink>
        </p>
      </form>
    </section>
  );
}

export default Register;

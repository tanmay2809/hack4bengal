import React from "react";
import frameImage from "../assets/frame.png";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from "react-router-dom";

const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
  // console.log("ye rha mera form type");
  // console.log(formtype)
  const navigate = useNavigate();
  function moveToSignup(){
    navigate('/signup');
  }
  return (
    <div className="flex justify-center w-full py-12 mx-auto gap-x-12 gap-y-0 bg-[#062f4f]">
      <div className="w-11/12 max-w-[500px]">
        <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">
          {title}
        </h1>

        <p className="text-[1.125rem] leading[1.625rem] mt-4">
          <span className="text-richblack-100">{desc1}</span>
          <br />
          <span className="text-blue-100 italic">{desc2}</span>
        </p>

        {formtype === "signup" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}

        <div className="flex w-full items-center my-4 gap-x-2">
          <div className="w-full h-[1px] bg-gray-200 "></div>
          <p className=" font-medium leading[1.375rem]">OR</p>
          <div className="w-full h-[1px] bg-gray-200 "></div>
        </div>

        <button
          className="w-full flex justify-evenly items-center rounded-[8px] font-medium text-richblack-100
            border border-richblack-700 bg-white px-[12px] py-[8px]  mt-6 "
        >
          <FcGoogle />
          <p>Sign Up with Google</p>
        </button>
        <div>
          {formtype === "login" && (
            <div className="mx-auto">
              <span className="text-blue-100 italic">
                Don't have an account?
              </span>
              <button onClick={moveToSignup} className="text-blue-100 italic">
                Sign Up Now!
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="relative w-11/12 max-w-[500px] mt-24 ">
        {/* <img
          src={frameImage}
          alt="Pattern"
          width={458}
          height={404}
          loading="lazy"
        /> */}

        <img
          src={image}
          alt="Students"
          width={548}
          loading="lazy"
          className="absolute -top-4 right-3  w-[400px] h-[365px]"
        />
      </div>
    </div>
  );
};

export default Template;

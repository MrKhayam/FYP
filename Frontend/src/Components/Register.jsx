import React from "react";
import { IoClose } from "react-icons/io5";

const Register = ({ hide }) => {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center absolute bg-[#0000003f] backdrop-blur-md">
        <IoClose
          onClick={() => hide(false)}
          color="white"
          cursor="pointer"
          size={25}
          className="top-5 right-5 absolute"
        />
        <div className="card bg-zinc-900 border border-zinc-500 rounded-md w-[95%] h-auto md:w-96 md:min-h-40 p-4">
          <h1 className="text-white text-center">Create New Account</h1>
          <div className="flex items-center md:flex-row flex-col mt-4 justify-center w-full gap-3">
            <input
              placeholder="First Name"
              className="md:w-40 w-full bg-[#3c3c3c] text-white px-3 h-10 rounded-md outline-none"
              type="text"
            />
            <input
              placeholder="Last Name"
              className="md:w-40 w-full bg-[#3c3c3c] text-white px-3 h-10 rounded-md outline-none"
              type="text"
            />
          </div>
          <input
            placeholder="Email"
            className="md:w-[95%] w-full mt-3 mx-auto block bg-[#3c3c3c] text-white px-3 h-10 rounded-md outline-none"
            type="text"
          />
          <input
            placeholder="Password"
            className="md:w-[95%] w-full mt-3 mx-auto block bg-[#3c3c3c] text-white px-3 h-10 rounded-md outline-none"
            type="text"
          />
          <button className="block w-[75%] transition-all duration-300 hover:bg-[#545454] rounded-full mx-auto mt-4 px-5 py-2 text-white bg-[#3c3c3c]">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;

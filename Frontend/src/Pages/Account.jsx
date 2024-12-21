import React, { useState } from "react";
import { RiServiceLine } from "react-icons/ri";
import Register from "../Components/Register";
import Login from "../Components/Login";

const Account = () => {
    const [isRegister, setIsRegister] = useState(false);
    const [isLog, setIsLog] = useState(false);
  return (
    <>
      <div className="w-full h-screen bg-zinc-900 font-[Poppins]">
              {
                  isRegister && <Register hide={setIsRegister} />
              }
              {
                  isLog && <Login hide={setIsLog} />
              }
        <div className="w-full flex-col h-full flex items-center justify-center">
          <div className="icon">
            <RiServiceLine color="white" cursor="pointer" size={200} />
          </div>
          <div className="downContent flex flex-col items-center">
            <h1 className="text-white text-2xl md:text-4xl font-semibold">
              Welcome to SocialX
            </h1>
            <h3 onClick={() => setIsLog(true)} className="text-[#818181] cursor-pointer text-lg mt-5 hover:underline">
              Login
            </h3>
            <h3 onClick={() => setIsRegister(true)} className="text-[#818181] cursor-pointer text-lg mt-2 hover:underline">
              Create New Account
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;

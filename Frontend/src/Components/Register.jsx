import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { regUser, reset } from "../Features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { RotatingLines } from 'react-loader-spinner';

const Register = ({ hide }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading, isError, isSuccess, user, message } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();

  const handleClick = () => {
    const data = {
      firstName,
      lastName,
      email,
      password,
    };
    dispatch(regUser(data));
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      navigate("/home");
      toast.success(message);
    }

    dispatch(reset());
  }, [isError, isSuccess]);

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
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              className="md:w-40 w-full bg-[#3c3c3c] text-white px-3 h-10 rounded-md outline-none"
              type="text"
            />
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              className="md:w-40 w-full bg-[#3c3c3c] text-white px-3 h-10 rounded-md outline-none"
              type="text"
            />
          </div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="md:w-[95%] w-full mt-3 mx-auto block bg-[#3c3c3c] text-white px-3 h-10 rounded-md outline-none"
            type="email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="md:w-[95%] w-full mt-3 mx-auto block bg-[#3c3c3c] text-white px-3 h-10 rounded-md outline-none"
            type="password"
          />
          <button
            onClick={handleClick}
            className="flex items-center justify-center w-[75%] transition-all duration-300 hover:bg-[#545454] rounded-full mx-auto mt-4 px-5 py-2 text-white bg-[#3c3c3c]"
          >
            {isLoading ? (
              <RotatingLines
                visible={true}
                height="24"
                width="24"
                color="#18181b"
                strokeColor="#18181b"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            ) : (
              "Next"
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;

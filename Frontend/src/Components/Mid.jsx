import React, { useState } from "react";
import { HiSparkles } from "react-icons/hi2";
import { FaImage } from "react-icons/fa6";
import { MdGifBox } from "react-icons/md";
import { BiPoll } from "react-icons/bi";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { RiMenu2Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { clicked } from "../Features/Navbar/NavSlice";
import Post from "./Post";




const Mid = () => {
  const postIcons = [
    {
      icon: (
        <div className="relative cursor-pointer">
          <FaImage />
          <input className="absolute z-10 cursor-pointer top-0 left=[]" type="file" />
          
        </div>
      ),
    },
    { icon: <MdGifBox /> },
    { icon: <BiPoll /> },
    { icon: <MdOutlineEmojiEmotions /> },
  ];
  const dispatch = useDispatch();

  // username: dqlxj8vxp
  // upload_preset: qcgyuz9o



  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);
  
  

  return (
    <>
      <div className="w-full h-full overflow-auto hide-scrollbar">
        <div className="top w-full bg-zinc-900 text-white h-auto p-3 border-b flex justify-between items-center">
          <div className="homeTop flex gap-3 items-center">
            <RiMenu2Line
              onClick={() => dispatch(clicked())}
              cursor="pointer"
              size={25}
              className="md:hidden block"
            />
            <h1 className="font-semibold text-lg">Home</h1>
          </div>
          <HiSparkles color="white" cursor="pointer" size={25} />
        </div>
        <div className="uploadPost bg-zinc-900 w-full h-auto px-3 py-5 flex">
          <div className="left w-[20%] sm:w-[15%] md:w-[9%]">
            <div className="profileImg w-[50px] h-[50px] rounded-full overflow-hidden">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/028/794/707/small/cartoon-cute-school-boy-photo.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="right w-[80%] sm:w-[85%] md:w-[91%]">
            <input
              type="text"
              className="w-full h-10 mt-1 p-2 placeholder:text-[#999999] bg-zinc-900 outline-none text-white"
              placeholder="What's happening?"
            />
            <div className="w-full flex justify-between items-center">
              <ul className="postIcons flex items-center gap-3 p-2">
                {postIcons.map((icons, index) => {
                  return (
                    <li
                      key={index}
                      className="text-white text-xl cursor-pointer"
                    >
                      {icons.icon}
                    </li>
                  );
                })}
              </ul>
              <div className="postBtn">
                <button className="px-6 transition-all duration-300 hover:bg-[#e6e6e6] py-2 rounded-full bg-white text-black">
                  Tweet
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="posts w-full h-auto mt-3">
          <Post />
        </div>
      </div>
    </>
  );
};

export default Mid;

import React from "react";
import { LuMessageCircle } from "react-icons/lu";
import { BiRepost } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { CiShare1 } from "react-icons/ci";



const Post = () => {
    const postIcons = [
      { icon: <LuMessageCircle size={20} />, count: 3 },
      { icon: <BiRepost size={20} />, count: 8 },
      { icon: <CiHeart size={20} />, count: 19 },
      { icon: <CiShare1 size={20} />, count: 5 },
    ];
  return (
    <>
      <div className="post border-b text-white bg-zinc-900 w-full h-auto px-3 py-5 flex">
        <div className="left w-[20%] sm:w-[15%] md:w-[9%]">
          <div className="profileImg w-[50px] h-[50px] rounded-full overflow-hidden">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/028/794/707/small/cartoon-cute-school-boy-photo.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="right w-[80%] sm:w-[85%] md:w-[91%]">
          <div className="postInfo flex gap-2 mt-2">
            <h1 className="text-white font-semibold">Khayam</h1>
            <h3 className="username text-[#a4a4a4]">@khayamijaz</h3>
            <h3 className="text-[#a4a4a4]">- 3m</h3>
          </div>
          <div className="postContent">
            <p className="w-full text-white mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam,
              dicta quia rem animi ratione nulla minima ducimus voluptatem
              blanditiis voluptatibus deleniti labore exercitationem impedit
              nemo.
            </p>
                  </div>
                  <ul className="postIcons mt-5 w-full flex items-center justify-between md:pr-10">
                      {
                          postIcons.map((icons, index) => {
                              return <li key={index} className="cursor-pointer text-white flex gap-1 items-center">{icons.icon} {icons.count}</li>
                          })
                      }
                  </ul>
        </div>
      </div>
    </>
  );
};

export default Post;

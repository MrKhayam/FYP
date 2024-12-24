import React from "react";
import { RiServiceLine } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa";
import { LiaClipboardListSolid } from "react-icons/lia";
import { FaCircleUser } from "react-icons/fa6";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { hide } from "../Features/Navbar/NavSlice";





const Left = () => {

    const navIcons = [
      {
        icon: <FaHome />,
        text: "Home",
      },
      {
        icon: <FaHashtag />,
        text: "Explore",
      },
      {
        icon: <IoMdNotifications />,
        text: "Notifications",
      },
      {
        icon: <IoMail />,
        text: "Messages",
      },
      {
        icon: <FaBookmark />,
        text: "Bookmarks",
      },
      {
        icon: <LiaClipboardListSolid />,
        text: "Lists",
      },
      {
        icon: <FaCircleUser />,
        text: "Profile",
      },
      {
        icon: <HiOutlineDotsCircleHorizontal />,
        text: "More",
      },
  ];
  const dispatch = useDispatch();
    return <>
        <div className="w-full h-full p-3 md:p-3">
            <div className="logo">
                <RiServiceLine color="white" cursor="pointer" size={40} />
        </div>
        <IoClose onClick={() => dispatch(hide())} className="md:hidden block absolute top-5 right-5" color="white" cursor="pointer" size={25} />
            <ul className="flex flex-col gap-7 mt-3 p-3">
                {
                    navIcons.map((icon, index) => {
                        return <li key={index} className="flex text-white cursor-pointer gap-3 text-xl items-center">{icon.icon} {icon.text}</li>
                    })
                }
        </ul>
        <button className="flex mt-2 bg-white w-[80%] py-3 rounded-full items-center justify-center">Tweet</button>
        </div>
    </>;
};

export default Left;

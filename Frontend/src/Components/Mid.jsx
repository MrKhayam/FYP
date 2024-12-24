import React from "react";
import { HiSparkles } from "react-icons/hi2";


const Mid = () => {
    return <>
        <div className="w-full h-auto">
            <div className="top w-full bg-zinc-900 text-white h-auto p-3 border-b flex justify-between items-center">
                <h1 className="font-semibold text-lg">Home</h1>
                <HiSparkles color="white" cursor="pointer" size={25} />
            </div>
            <div className="uploadPost bg-zinc-900 w-full h-auto px-3 py-5 flex">
                <div className="left w-[20%]">
                    <div className="profileImg">
                        <img src="" alt="" />
                    </div>
                </div>
                <div className="right w-[80%]"></div>
            </div>
        </div>
    </>;
};

export default Mid;

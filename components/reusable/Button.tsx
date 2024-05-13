"use client"

import React from "react";
import { useState } from "react";

type Button = {
    type: "main" | "second",
    content: string
}

const Button = ({ type, content }: Button) => {
    const [btnHovered, setBtnHovered] = useState(false);
  return (
    <button onMouseEnter={() => setBtnHovered(true)} onMouseLeave={() => setBtnHovered(false)} className="relative min-w-[150px] w-full h-[40px] text-white rounded-5 border-2 border-second cursor-pointer overflow-hidden">
      <span className={`absolute ${btnHovered ? "-top-[100%]" : "top-0"} ${type === "main" && "bg-second" } font-semibold left-0 w-full h-full duration-300 flex justify-center items-center`}>{content}</span>
      <span className={`absolute ${btnHovered ? "top-0" : "top-[100%]"} ${type === "second" && "bg-second" } font-semibold left-0 w-full h-full duration-300 flex justify-center items-center`}>{content}</span>
    </button>
  );
};

export default Button;

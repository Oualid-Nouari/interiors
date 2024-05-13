"use client"
import React, { useState } from 'react'

const InputField = ({labelBgColor, content} : {labelBgColor: string, content: string}) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  return (
    <div className='relative w-full'>
        <input onFocus={() => {setIsInputFocused(true)}} onBlur={() => {setIsInputFocused(false)}} style={{ backgroundColor: 'transparent'}} className='border-second focus:border-white border-2 rounded-5 p-2 duration-300 text-white outline-none w-full' />
        <label  className={`input-label w-[84px] h-[24px] flex items-center pl-1 text-second bg-${labelBgColor} absolute ${isInputFocused ? "top-0 z-10" : "top-1/2"} duration-300 left-2 -translate-y-1/2 -z-10`}>{content}</label>
    </div>
  )
}

export default InputField

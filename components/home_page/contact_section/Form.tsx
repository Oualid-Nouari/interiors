import Button from '@/components/reusable/Button'
import InputField from '@/components/reusable/InputField'
import SectionHeader from '@/components/reusable/SectionHeader'
import React from 'react'

const Form = () => {
  return (
    <div className='w-full 2xlg:w-[638px] 3xlg:w-[638px] 4xlg:w-[638px] h-full bg-black relative z-20 px-8 py-[92px] flex flex-col items-center gap-[100px]'>
      <div>
        <SectionHeader>Contact</SectionHeader>
        <p className='text-normal leading-normal w-full text-center opacity-40'>Fell free to ask us whatever you want, whenever you want</p>
      </div>
      <form className='w-full flex flex-col gap-6'>
        <InputField labelBgColor="black" content="First Name" />
        <InputField labelBgColor="black" content="Adresse" />
        <InputField labelBgColor="black" content="Message" />
        <Button type='main' content='Send message' />
      </form>
    </div>
  )
}

export default Form

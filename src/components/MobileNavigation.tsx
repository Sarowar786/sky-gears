"use client";
import React, { useState } from "react";
import { Dialog, DialogPanel,  } from "@headlessui/react";
import { IoIosMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import logo from '@/assets/images/logo.png'
import Image from "next/image";
import { navigation } from "@/constant";
import Link from "next/link";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu= ()=>{
    setIsOpen(true)
  }

  return (
    <div>
      <div>
        <IoIosMenu
          onClick={toggleMenu}
          size={30}
          className=" sm:hidden text-black border border-transparent cursor-pointer  text-xl h-10 w-10 rounded-full p-1 "
        />
      </div>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-50 lg:hidden text-white"
        onClose={()=> setIsOpen(false)}
      >
        <div className="fixed inset-0 bg-black/80 flex items-center justify-start   ">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-[70%] h-full  p-5 border border-primaryColor rounded-md absolute right-0  bg-white text-black "
            >
              <div className="flex  items-center justify-between">
                <Image src={logo} alt="logo" className="w-32" />
                <button onClick={()=> setIsOpen(false)} className="text-xl hover:text-red-500 duration-200"> <MdClose /> </button>
              </div>
              <div className="flex flex-col gap-5 p-6 text-lg font-medium capitalize cursor-pointer duration-300 ">
                {navigation?.map((item,i)=>(
                  <Link key={i} href={item.href} onClick={()=> setIsOpen(false)}className="hover:text-primaryColor " > {item.title} </Link>
                ))}
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

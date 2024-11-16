import React from 'react'
import Container from './Container'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../assets/images/logo.png' 
import { RiSearchLine } from 'react-icons/ri'
import { AiOutlineUser } from 'react-icons/ai'
import { LuShoppingCart } from 'react-icons/lu'
import { navigation } from '@/constant'
import MobileNavigation from './MobileNavigation'

export default function Header() {
     
  return (
    <div className='py-[15px] border-b-[1px] sticky top-0 z-50 bg-white shadow-[0_4px_4px_-2px_rgba(0,0,0,0.1)]'>
      <Container className='flex items-center justify-between text-center'>
        {/* logo */}
        
        <div>
        <Link href={'/'}>
          <Image src={logo} alt="logo" width={200} height={100} className='w-[173.33px] h-[50px]'  /> 
        </Link>
        </div>
        {/* menu */}
        <div className='hidden sm:inline-flex items-center gap-6 font-normal text-[14px]'>
            {navigation.map((item,i)=>(
                <Link href={item.href} key={i}>{item.title}</Link>
            ))}
        </div>
        {/* search input */}
        <div className='relative hidden lg:inline-flex'>
            <input type="text" placeholder='Search Products' className='border w-[416px] h-[24px] py-5 pl-[24px] rounded-[4px] outline-none ' />
            <span className="absolute p-[12px] top-0 right-0 duration-200 cursor-pointer text-white
             bg-btnColor rounded-tr-[4px] rounded-br-[4px]">
            <RiSearchLine />
          </span>
        </div>
        {/* user */}
        <div className='flex items-center justify-center md:gap-6 gap-1 sm:gap-3'>
            <LuShoppingCart className=' w-6 h-6 text-btnColor' /> 
            <AiOutlineUser className=' w-6 h-6 text-btnColor' />
            <span className='md:hidden'>

        <MobileNavigation />
            </span>
        </div>
      </Container>
    </div>
  )
}

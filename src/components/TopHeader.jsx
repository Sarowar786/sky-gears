import React from "react";
import Container from "./Container";
import { FaFacebook ,FaInstagram,FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function TopHeader() {
    const socialIcon =[
        {
            icon:<FaFacebook />,
            link:'https://www.facebook.com'
        },
        {
            icon:<FaInstagram />,
            link:'https://www.instagram.com'
        },
        {
            icon:<FaTwitter />,
            link:'https://www.twtter.com'
        },
    ]
  return (
    <div className="bg-headerColor h-[30px] text-white py-[7px] ">
      <Container className="flex items-center justify-between h-[16px]">
        <p className="text-white text-[13px]">Hotline: <span className="font-bold">+0186-1123325</span> </p>
        <div className="flex items-center justify-center gap-10">
            <p className="text-[13px]">Contact us</p>
            <div className="flex items-center justify-center gap-2">
            {socialIcon.map((item,i)=>(
                <Link href={item.link} key={i} className="w-[16px] h-[16px]">
                {item.icon}
                </Link>
            ))}
            </div>
        </div>
      </Container>
    </div>
  );
}

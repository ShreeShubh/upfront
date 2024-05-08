import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="bg-customBlack pt-12 pb-24 px-10 flex gap-28">
        <div>
          <Image
            src="/homePage/upfrontLogo.svg"
            width={118}
            height={111}
            alt="upfront logo"
          />
        </div>
        <div className="flex gap-16">
          <ul className="text-customGrayMd text-xl">
            <h3 className="text-white text-2xl">ABOUT US</h3>
            <div className="w-[175px] h-[1px] bg-customGrayMd my-3"></div>
            <li>Our Story</li>
            <li>What We Do</li>
            <li>Our Team</li>
          </ul>
          <ul className="text-customGrayMd text-xl">
            <h3 className="text-white text-2xl">OUR WORK</h3>
            <div className="w-[175px] h-[1px] bg-customGrayMd my-3"></div>
          </ul>
          <ul className="text-customGrayMd text-xl">
            <h3 className="text-white text-2xl">INSIGHTS</h3>
            <div className="w-[175px] h-[1px] bg-customGrayMd my-3"></div>
          </ul>
          <ul className="text-customGrayMd text-xl">
            <h3 className="text-white text-2xl">CONTACT US</h3>
            <div className="w-[175px] h-[1px] bg-customGrayMd my-3"></div>
            <li>Email: 123@gmail.com</li>
            <li>Phone: +91 1234567890</li>
          </ul>
        </div>
      </div>
      <div className="bg-customGray flex px-10 py-6">
        <p className="text-gray-400">
          Upfront s an initiative of the Catalyst Group 2024. All Rights
          Reserved
        </p>
      </div>
    </>
  )
}

export default Footer

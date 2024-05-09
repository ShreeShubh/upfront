'use client'

import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const OurPartners = () => {
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
    ],
  }

  return (
    <div className="bg-customLightGray px-10 py-16 text-center">
      <h1 className="text-6xl mb-10">OUR PARTNERS</h1>
      <div className="ps-11">
        <Slider className="" {...settings}>
          <div>
            <Image
              src="/homePage/ourPartner1.png"
              width={200}
              height={100}
              alt=""
            />
          </div>
          <div>
            <Image
              src="/homePage/ourPartner2.png"
              width={200}
              height={100}
              alt=""
            />
          </div>
          <div>
            <Image
              src="/homePage/ourPartner3.png"
              width={200}
              height={100}
              alt=""
            />
          </div>
          <div>
            <Image
              src="/homePage/ourPartner4.png"
              width={200}
              height={100}
              alt=""
            />
          </div>
          <div>
            <Image
              src="/homePage/ourPartner5.png"
              width={200}
              height={100}
              alt=""
            />
          </div>
          <div>
            <Image
              src="/homePage/ourPartner6.png"
              width={200}
              height={100}
              alt=""
            />
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default OurPartners

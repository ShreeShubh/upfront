'use client'

import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const OurKeyCommunities = () => {
  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
    <>
      <div className="space-y-5 px-10 mb-10 text-center">
        <h1 className="text-6xl mb-10">
          OUR KEY <br /> COMMUNITIES
        </h1>
        <div>
          <Slider {...settings}>
            <div>
              <div className="flex flex-col items-center space-y-3">
                <Image
                  src="/whatWeDo/streetVendors.png"
                  width={300}
                  height={300}
                  alt=""
                />
                <p>Street Vendors</p>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center space-y-3">
                <Image
                  src="/whatWeDo/factoryWorkers.png"
                  width={300}
                  height={300}
                  alt=""
                />
                <p>Factory Workers</p>
              </div>
            </div>

            <div>
              <div className="flex flex-col items-center space-y-3">
                <Image
                  src="/whatWeDo/frontlineHealthWorkers.png"
                  width={300}
                  height={300}
                  alt=""
                />
                <p>Frontline Health Workers</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="text-center">
        <p className="text-xl mt-7">
          And Other Workforces Including Plantation Workers, Domestic Workers,
          Gig Workers Etc.)
        </p>
      </div>
    </>
  )
}

export default OurKeyCommunities

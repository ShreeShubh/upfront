'use client'

import Image from 'next/image'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const OurPartners = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
  }

  return (
    <div className="bg-customLightGray px-10 py-16 text-center flex flex-col items-center">
      <h1 className="text-6xl mb-10">OUR PARTNERS</h1>

      <Slider className="gap-6" {...settings}>
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
  )
}

export default OurPartners

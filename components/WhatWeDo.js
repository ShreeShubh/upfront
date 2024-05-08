import Image from 'next/image'

const WhatWeDo = () => {
  return (
    <div className="my-16 ps-10 flex justify-between">
      <div className="w-2/5 flex flex-col justify-evenly items-start">
        <h1 className="text-6xl">
          WHAT <br /> WE <br /> DO?
        </h1>
        <p className="w-3/5 tracking-wide">
          Upfront aims to achieve workforce wellbeing by unlocking human
          potential, making ‘systems’ work, orchestrating investments,
          collaborations and partnerships.Thereby making a critical value
          proposition to improve social and economic outcomes impacting people
          and planet wellbeing through scale, impact and sustainability.
        </p>
        <button className="border border-gray-300 px-5 py-2">Know more</button>
      </div>

      <div className="w-3/5">
        <Image
          src="/homePage/WhatWeDo.png"
          width={740}
          height={669}
          alt="what we do"
        />
      </div>
    </div>
  )
}

export default WhatWeDo

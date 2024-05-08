import Image from 'next/image'
import React from 'react'

const CaseStudy = () => {
  return (
    <div className="bg-customLightGray bg-opacity-60 p-10 flex flex-col">
      <h2 className="text-5xl">CASE STUDIES</h2>
      <div className="px-16 py-8 self-center text-center">
        <Image
          src="/homePage/fishVendors.png"
          width={1000}
          height={500}
          alt="fish vendor"
          className="w-100"
        />
        <button className="bg-customGray text-white p-3 mt-10">
          View All Casestudies
        </button>
      </div>
    </div>
  )
}

export default CaseStudy

import Image from 'next/image'

const OurMission = () => {
  return (
    <div className="flex bg-customBlack">
      <div className="w-3/5 py-12">
        <Image
          src="/ourStory/ourVision.png"
          width={750}
          height={300}
          alt=""
          className="w-9/12"
        />
      </div>
      <div className="flex w-2/5">
        <div className="triangle-left self-center"></div>
        <div className="bg-customRed flex flex-col justify-center px-10 py-28 space-y-2">
          <h2 className="text-5xl text-white">
            OUR <br /> VISION
          </h2>
          <p className="text-white text-xl w-3/5">
            Make Wellbeing a reality for the Workforces
          </p>
        </div>
      </div>
    </div>
  )
}

export default OurMission

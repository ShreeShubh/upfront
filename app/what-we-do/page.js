'use client'

import Header from '@components/Header'
import Tab from '@components/Tab'
import { whatWeDoTabs } from '@utils/data'

const page = () => {
  const getActiveTab = (tab) => {
    console.log(tab)
  }
  return (
    <>
      <div className="bg-[url('/whatWeDo/banner.png')] bg-cover h-[60vh] flex flex-col ps-16 pb-8">
        <Header />
        <h1 className="text-white text-6xl mt-auto">
          WHAT <br /> WE DO
        </h1>
      </div>
      <Tab tabs={whatWeDoTabs} getActiveTab={getActiveTab} />
    </>
  )
}

export default page

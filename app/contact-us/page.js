'use client'

import Header from '@components/Header'
import Tab from '@components/Tab'
import { contactUsTabs } from '@utils/data'

const page = () => {
  const getActiveTab = (tab) => {
    console.log(tab)
  }
  return (
    <>
      <div className="bg-[url('/contactUs/banner.png')] bg-cover h-[60vh]">
        <Header />
      </div>
      <Tab tabs={contactUsTabs} getActiveTab={getActiveTab} />
    </>
  )
}

export default page

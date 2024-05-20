'use client'

import Header from '@components/Header'
import Tab from '@components/Tab'
import { contactUsTabs } from '@utils/data'
import React from 'react'

const page = () => {
  const getActiveTab = (tab) => {
    console.log(tab)
  }
  return (
    <>
      <div className="bg-customGray h-36">
        <Header />
      </div>
      <Tab tabs={contactUsTabs} getActiveTab={getActiveTab} />
    </>
  )
}

export default page

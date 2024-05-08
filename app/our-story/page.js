'use client'

import Header from '@components/Header'
import Tab from '@components/Tab'
import ThematicAreas from '@components/ThematicAreas'
import { ourStoryTabs } from '@utils/data'
import Image from 'next/image'

const page = () => {
  const getActiveTab = (tab) => {
    console.log(tab)
  }

  return (
    <>
      <div className="bg-ourStory bg-cover h-[60vh] flex flex-col ps-16 pb-8">
        <Header />
        <h1 className="text-white text-6xl mt-auto">
          OUR <br /> STORY
        </h1>
      </div>
      <Tab tabs={ourStoryTabs} getActiveTab={getActiveTab} />

      <div className="px-10 py-16">
        <h1 className="text-6xl">
          WHY <br /> WORKFORCE <br /> WELLBEING?
        </h1>
      </div>

      <div className="relative mb-96">
        <div className="p-10 flex justify-center">
          <ul className="flex justify-between w-3/4 px-6">
            <li className="w-36 h-36 rounded-full border-8 border-[#FACDD4] bg-customGray flex justify-center items-center">
              <p className="text-white text-xl text-center">
                Systemic <br /> Issues
              </p>
            </li>
            <li className="w-36 h-36 rounded-full border-8 border-[#FACDD4] bg-customGray flex justify-center items-center">
              <p className="text-white text-xl text-center">
                This <br /> leads to
              </p>
            </li>
            <li className="w-36 h-36 rounded-full border-8 border-[#FACDD4] bg-customGray flex justify-center items-center">
              <p className="text-white text-xl text-center">
                Our <br /> interventions <br /> work on
              </p>
            </li>
          </ul>
        </div>

        <div className="absolute inset-0 top-1/2 px-10 flex justify-center -z-10">
          <ul className="flex justify-evenly gap-10 w-11/12">
            <li className="w-80">
              <div className="bg-customLightGray pt-28 pb-5 border border-[#707070] rounded-xl">
                <ul className="list-square text-xl px-8">
                  <li>
                    Labour markets are volatile, uncertain, complex, and
                    ambiguous
                  </li>
                  <li>Inefficient and uncapacitated systems</li>
                  <li>
                    Business wellbeing is prioritised over worker wellbeing
                    making both the workers and businesses vulnerable
                  </li>
                  <li>Rising climate, health & occupational risks</li>
                  <li>Low wages and no social security or coverage</li>
                </ul>
              </div>
            </li>
            <li className="w-80">
              <div className="bg-customLightGray pt-28 pb-5 border border-[#707070] rounded-xl">
                <ul className="list-square text-xl px-8">
                  <li>
                    Labour markets are volatile, uncertain, complex, and
                    ambiguous
                  </li>
                  <li>Inefficient and uncapacitated systems</li>
                  <li>
                    Business wellbeing is prioritised over worker wellbeing
                    making both the workers and businesses vulnerable
                  </li>
                  <li>Rising climate, health & occupational risks</li>
                  <li>Low wages and no social security or coverage</li>
                </ul>
              </div>
            </li>
            <li className="w-80">
              <div className="bg-customLightGray pt-28 pb-5 border border-[#707070] rounded-xl">
                <ul className="list-square text-xl px-8">
                  <li>
                    Labour markets are volatile, uncertain, complex, and
                    ambiguous
                  </li>
                  <li>Inefficient and uncapacitated systems</li>
                  <li>
                    Business wellbeing is prioritised over worker wellbeing
                    making both the workers and businesses vulnerable
                  </li>
                  <li>Rising climate, health & occupational risks</li>
                  <li>Low wages and no social security or coverage</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-[500px]">
        <ThematicAreas />
      </div>
    </>
  )
}

export default page

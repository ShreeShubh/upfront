'use client'

import Header from '@components/Header'
import Impact from '@components/Impact'
import OurKeyCommunities from '@components/OurKeyCommunities'
import Tab from '@components/Tab'
import { whatWeDoTabs } from '@utils/data'
import Image from 'next/image'

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

      <div className="max-w-screen-xl mx-auto px-40 py-16 tracking-wide text-center space-y-4">
        <h1 className="text-5xl">OVERVIEW</h1>
        <p className="text-xl">
          Our journey began with narrowing down the focus on one of the most
          vital components of the global economy—the workforce. We have been
          championing the wellbeing of the formal and informal workforce,
          especially women workforce, through empowerment by enhancing their
          skills, amplifying their voices, and fostering responsible business
          practices.
        </p>
        <p>
          As the world evolves, so does the need for a comprehensive approach to
          the wellbeing of the workforce. Join us as we continue to pave the way
          for healthier, more empowered work environments across the globe.
        </p>
        <p className="font-semibold text-[#292929]">
          Together let us create a future where every individual thrives.
        </p>
      </div>

      <div className="bg-[url('/whatWeDo/rectangle.png')] bg-no-repeat bg-cover flex flex-col items-center p-20 text-center mb-12">
        <h1 className="text-5xl">OUR APPROACH</h1>
        <div className="bg-white py-10 px-24 mt-10">
          <p className="text-xl text-[#222222]">
            Upfront prioritises the wellbeing of the formal and informal
            workforce, placing their health and happiness at the core of its
            work, upholding its commitment to the community. We employ
            innovative, transformative, and sustainable practices tailored to be
            locally applicable, sensitive, and inclusive, addressing specific
            needs and requirements effectively and helping us bring meaningful{' '}
            <span className="font-semibold">Impact</span>. To ensure impact at{' '}
            <span className="font-semibold">Scale</span>, Upfront focuses on
            moving from demonstration to orchestration. This strategic shift
            involves collaborating and partnering with others working in the
            space, becoming part of forums and platforms, thereby leveraging
            collective strengths to achieve greater impact and scalability.
            Additionally, it focuses on promoting Sustainability by shaping and
            influencing leaders, investments, systems, and policies, ensuring
            that workforce wellbeing practices and principles are integrated at
            all levels of decision-making. Ensuring{' '}
            <span className="font-semibold">sustainability</span> also needs
            investment for the cause, Upfront also designs innovative financing
            solutions to encourage investments and generate tangible results,
            reinforcing its overall mission and vision for a healthy, wealthy
            and thriving workforce.
          </p>
          <div className="w-full flex justify-center">
            <Image
              src="/whatWeDo/ourApproach.png"
              width={500}
              height={500}
              alt=""
              className="mt-10 w-3/4"
            />
          </div>
        </div>
      </div>

      <div className="bg-customLightGray p-12 flex justify-center mb-12">
        <div className="w-2/3 space-y-5 text-center">
          <h1 className="text-5xl">BUILDING RESILIENCE OF THE WORKFORCES</h1>
          <p className="text-[#222222] text-xl">
            Upfront focuses on fostering individual resilience by building
            agency, ensuring access to essential services, and enhancing
            structural and systemic capabilities through thought leadership,
            proactive action, and targeted interventions, ultimately driving
            transformative change.
          </p>
          <Image
            src="/whatWeDo/PeopleResilience.png"
            width={600}
            height={400}
            alt=""
            className="w-full"
          />
        </div>
      </div>

      <OurKeyCommunities />
      <Impact />
    </>
  )
}

export default page

import CaseStudy from '@components/CaseStudy'
import Header from '@components/Header'
import ImpactStories from '@components/ImpactStories'
import OurPartners from '@components/OurPartners'
import OurPresence from '@components/OurPresence'
import OurReach from '@components/OurReach'
import ThematicAreas from '@components/ThematicAreas'
import WhatWeDo from '@components/WhatWeDo'
import WhoAreWe from '@components/WhoAreWe'

export default function Home() {
  return (
    <>
      <div className="bg-[url('/homePage/homeBanner.png')] bg-cover h-screen">
        <Header />
      </div>
      <div className="max-w-screen-xl mx-auto px-40 py-20 tracking-wide">
        <p className="text-center">
          Workforces are key to economic growth however, the labour markets
          remain volatile, uncertain, complex, and ambiguous and the systems may
          be incapacitated to address it. We believe in the non-negotiable right
          to a safe and enabling work environment for any workforce. Upfront
          thus strives to make systems, capacities and markets stronger &
          inclusive to ensure both workforces & their business thrive, but not
          at the cost of their wellbeing.
        </p>
      </div>
      <WhoAreWe />
      <WhatWeDo />
      <OurReach />
      <OurPresence />
      <ThematicAreas />
      <ImpactStories />
      <CaseStudy />
      <OurPartners />
    </>
  )
}

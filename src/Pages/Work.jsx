
import WorkHero from '@/components/WorkHero'
import WorkSection from '@/components/WorkSection'
import React from 'react'

function Work() {
  return (
   <>
   <div className='text-center h-auto w-auto pt-[150px]'>
    <WorkHero/>
   </div>
   <div className='pt-[100px]'>
    <WorkSection/>
   </div>
   
   </>
  )
}

export default Work

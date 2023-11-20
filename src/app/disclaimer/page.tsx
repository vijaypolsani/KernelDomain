import Container from '@/components/Container'
import Link from 'next/link'
import React from 'react'

const AboutPage = () => {
  return (
    <Container className='flex items-center justify-center py-20'>
      <div className='min-h-[200px] flex flex-col items-center justify-center gap-y-5'>
        <h1 className='text-brand-primary mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug'>
          About
        </h1>
        <div className='grid grid-cols-2 gap-4 place-content-evenly hover:place-content-center font-bold px-8 line-clamp-2 h-60 ...'>
          <div>Disclaimer(s)</div>
          <div><span/></div>
          <div><span/></div>
        </div>
        <p className='text-left dark:prose-invert'>. . .</p>
        <p className='text-lg'>..</p>

        <Link
          href={'/'}
          className='bg-black text-slate-100 w-44 h-12 rounded-full text-base font-semibold flex items-center justify-center hover:bg-orange-600 hover:text-white duration-200'
        >
          Back to Home
        </Link>
      </div>
    </Container>
  )
}

export default AboutPage

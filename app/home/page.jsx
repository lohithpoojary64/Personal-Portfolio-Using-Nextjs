import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Skills from '@/components/Skills';
import React from 'react'

const page = () => {
  return (
       <main className='bg-black min-h-screen h-[200vh] w-[100%]'>
        <Navbar/>
        <Header/>
        <Skills/>
       </main>
    )
}

export default page

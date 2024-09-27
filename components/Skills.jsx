import React from 'react';
import Image from 'next/image';
import react from '../public/react.png'

const Skills = () => {
  return (
    <div>
       <div>
       <Image src={react} alt='react-image' height={30} width={40}></Image>
        Image
       </div>
    </div>
  )
}

export default Skills

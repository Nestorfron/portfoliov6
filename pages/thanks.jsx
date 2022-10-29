import Image from 'next/image';
import React from 'react';
import Img4 from '../public/assets/thanks.png';

const thanks = () => {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-20 flex justify-center items-center'>
          <Image 
            className='absolute'
            width={400}
            height={400}
            src={Img4}
            alt='/'
          />
        </div>
    </div>
  );
};

export default thanks;

import Link from 'next/link';
import React from 'react';

const layout = ({ children }) => {
    return (
        <div className='grid grid-cols-12 gap-5 items-center justify-center my-10'>
            <div className='col-span-5 col-start-2'>
                <img className='w-[80%]' src="https://pathwayport.com/saasland/images/login@4x.png" alt="" />
            </div>
            <div className='col-span-5 col-start-7'>
                {children}
            </div>
        </div>

    );
};

export default layout;
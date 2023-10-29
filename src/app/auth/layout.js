import Link from 'next/link';
import React from 'react';

const layout = ({ children }) => {
    return (
        <div>
            <div className='text-center space-x-4 text-xl font-semibold my-3'>
                <Link href={"/auth/login"}>Login</Link>
                <Link href={"/auth/register"}>Register</Link>
            </div>
            <div className='grid grid-cols-2 gap-5 items-center'>
                <div>
                    <img src="https://pathwayport.com/saasland/images/login@4x.png" alt="" />
                </div>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default layout;
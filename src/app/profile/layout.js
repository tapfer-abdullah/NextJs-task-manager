import Link from 'next/link';
import React from 'react';

const layout = ({ children }) => {
    return (
        <div>
            <header className='bg-green-600 font-sans font-bold space-x-4 text-center py-4 text-2xl'>

                <Link href="/profile/users">Users</Link>
                <Link href="/profile/admin">Admin</Link>
            </header>
            {children}
        </div>
    );
};

export default layout;
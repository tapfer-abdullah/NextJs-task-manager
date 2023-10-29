import React from 'react';

const makeWait = async (t) => {
    await new Promise(resolve => {
        setTimeout(resolve, t);
    })
}

const page = async () => {
    await makeWait(3000);
    return (
        <div>
            Admin page
        </div>
    );
};

export default page;
import React from 'react';
import AllTasks from './AllTasks';

export const metadata = {
    title: "All-Tasks | Task-Manager"
}


const page = () => {
    return (
        <div>
            <AllTasks />
        </div>
    );
};

export default page;
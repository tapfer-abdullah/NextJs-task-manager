import React from 'react';
import AddTask from './AddTask';

export const metadata = {
    title: "Add-Task | Task-Manager"
}

const page = () => {
    return (
        <div>
            <AddTask />
        </div>
    );
};

export default page;
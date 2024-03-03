import React from 'react';
import Sidebar from './_components/sidebar';
const DashBoardLayout = ({ children }) => {
    children: React.ReactNode;
    return (
        <div className='h-full'>
            <div className="hidden md:flex w-56 flex-col fixed inset-y-4 z-50 ">
            <Sidebar />
            </div>
            {children}
        </div>
    );
};

export default DashBoardLayout;
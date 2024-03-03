"use client";
import React from 'react';

const SideBarRoutes = () => {
    const guestRoutes = [
        {
            icon: Layout,
            label: "Dashboard",
            herf: "/",
        },
        {
            icon: Campass,
            label: "Browse",
            herf: "/search",
        }
    ];

    return (
        <div className='flex flex-col w-full'>
            {guestRoutes.map((route, index) => (
                <div key={index} className='flex items-center justify-start p-4'>
                    <route.icon />
                    <a href={route.herf} className='ml-4 text-gray-600'>{route.label}</a>
                </div>
            ))}
        </div>
    );
};

export default SideBarRoutes;
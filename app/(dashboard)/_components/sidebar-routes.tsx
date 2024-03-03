"use client";
import { config } from '@/config';
import React from 'react';
import SidebarItem from './sidebar-item';

const SideBarRoutes = () => {
    return (
        <div className='flex flex-col w-full'>
            {
                config.guestRoutes.map((route, index) => {
                    return (
                        <SidebarItem key={index} href={route.href} label={route.label} icon={route.icon} />
                    );
                })
            }
        </div>
    );
};

export default SideBarRoutes;
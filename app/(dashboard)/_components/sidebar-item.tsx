"use client";

import { LucideIcon } from 'lucide-react';
import React from 'react';

interface SidebarItemProps {
    icon: LucideIcon;
    label: string;
    herf: string;
}

const SidebarItem = (props: SidebarItemProps) => {
    return (
        <>
            <h2>Hello</h2>
        </>
    );
};

export default SidebarItem;
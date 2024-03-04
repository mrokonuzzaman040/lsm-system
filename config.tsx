import { Compass, Layout } from "lucide-react";

const config = {

    guestRoutes: [
        {
            href: '/',
            label: 'Dashboard',
            icon: Layout
        },
        {
            href: '/search',
            label: 'Browse',
            icon: Compass
        }
    ],


};

export { config };
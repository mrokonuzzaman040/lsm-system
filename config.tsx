import { Compass, Layout } from "lucide-react";

const config = {

    guestRoutes: [
        {
            href: '/',
            label: 'Dashboard',
            icon: Layout
        },
        {
            href: '/login',
            label: 'Login',
            icon: Compass
        }
    ],


};

export { config };
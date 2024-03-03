import React from 'react';
import Image from 'next/image';

const Logo = () => {
    return (
        <div>
            <Image src="/logo.svg" alt="logo" width={130} height={130} />
        </div>
    );
};

export default Logo;
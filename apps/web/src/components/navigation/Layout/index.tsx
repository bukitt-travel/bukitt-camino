import { useState } from 'react';

import { navLinks } from '@/data/navigation';
import { contacts } from '@/data/contacts';

import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import MobileMenu from '@/components/navigation/MobileMenu';

const Layout = ({ children }) => {
    const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
    return (
        <>
            <div>
                <Header setOpenMobileMenu={setIsOpenMobileMenu} navLinks={navLinks} />
                <div className="min-h-screen">{children}</div>
                <Footer navLinks={navLinks} contacts={contacts} />
            </div>
            <MobileMenu open={isOpenMobileMenu} setOpen={setIsOpenMobileMenu} navLinks={navLinks} />
        </>
    );
};

export default Layout;

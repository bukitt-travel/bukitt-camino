import { useState } from 'react';

import { navLinks } from '@/data/navigation';

import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import BookingSlideOver from '@/components/shared/BookingSlideOver';
import MobileMenu from '@/components/navigation/MobileMenu';

const Layout = ({ children }) => {
    const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
    return (
        <>
            <div>
                <Header
                    openMobileMenu={isOpenMobileMenu}
                    setOpenMobileMenu={setIsOpenMobileMenu}
                    navLinks={navLinks}
                />
                <div className="min-h-screen">{children}</div>
                <Footer />
            </div>
            <BookingSlideOver />
            <MobileMenu open={isOpenMobileMenu} setOpen={setIsOpenMobileMenu} navLinks={navLinks} />
        </>
    );
};

export default Layout;

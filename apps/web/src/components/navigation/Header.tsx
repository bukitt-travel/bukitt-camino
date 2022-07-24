import Link from 'next/link';
import { RiMenu4Line, RiSendPlaneLine } from 'react-icons/ri';

import { useStore } from '@/lib/store';

import NavLink from '@/components/navigation/NavLink';
import Logo from '@/components/icons/Logo';

const Header = ({ setOpenMobileMenu, navLinks }) => {
    // @ts-expect-error need to find types for useStore()
    const { toggleBooking } = useStore();

    return (
        <nav className="z-50 mx-auto grid h-16 grid-cols-3 items-center border-b p-3  lg:h-24">
            <div className="col-span-1 hidden justify-start space-x-6 lg:flex">
                {navLinks.map((navLink) => (
                    <div key={navLink.id}>
                        <NavLink href={`/${navLink.slug}`}>{navLink.label}</NavLink>
                    </div>
                ))}
            </div>
            <div className="lg:hidden" onClick={() => setOpenMobileMenu(true)}>
                <RiMenu4Line className="h-6 w-6" />
            </div>

            <div className="col-span-1 flex justify-center">
                <Link href="/">
                    <a className="tw-transition w-32 hover:scale-95 md:w-48">
                        <Logo />
                    </a>
                </Link>
            </div>

            <div className="col-span-1 hidden justify-end lg:flex">
                <button
                    className="tw-transition w-fit rounded-full border-2 border-stone-900 px-3 py-1 text-sm font-semibold uppercase hover:bg-stone-900 hover:text-stone-100 md:text-lg"
                    onClick={() => toggleBooking(true)}
                >
                    Get a Quote!
                </button>
            </div>
            <div className="col-span-1 flex justify-end lg:hidden">
                <button onClick={() => toggleBooking(true)}>
                    <RiSendPlaneLine className="h-6 w-6" />
                </button>
            </div>
        </nav>
    );
};

export default Header;

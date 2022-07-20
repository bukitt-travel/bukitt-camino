import Image from 'next/image';
import Link from 'next/link';
import { RiMenu4Line, RiSendPlaneLine } from 'react-icons/ri';

import { useStore } from '@/lib/store';

import NavLink from '@/components/navigation/NavLink';

const Header = ({ openMobileMenu, setOpenMobileMenu, navLinks }) => {
    const { toggleBooking } = useStore();

    return (
        <nav className="mx-auto grid h-24 grid-cols-3 items-center border-b px-3 md:px-6">
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
                    <a className="tw-transition w-12 hover:scale-95 md:w-16">
                        <Image
                            src="/logo.png"
                            className="inline-block"
                            layout="responsive"
                            width={1}
                            height={1}
                            alt="Bukitt Camino"
                            priority
                            unoptimized
                        />
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

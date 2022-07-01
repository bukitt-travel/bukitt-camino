import Image from 'next/image';
import Link from 'next/link';

const NavLink = ({ children, href }: { children: React.ReactNode; href: string }) => (
    <Link href={href}>
        <a
            className={[
                'tw-transition text-lg font-semibold hover:cursor-pointer hover:opacity-75',
            ].join(' ')}
        >
            {children}
        </a>
    </Link>
);

const Navigation = () => (
    <nav className="mx-auto grid max-w-screen-2xl grid-cols-3 items-center border-b-2 py-6 px-3 md:px-6">
        <div className="col-span-1 flex justify-start space-x-6">
            <NavLink href="/about">About us</NavLink>
            <NavLink href="/help">Help</NavLink>
        </div>

        <div className="col-span-1 flex justify-center">
            <Link href="/">
                <a className="tw-transition w-16 hover:scale-95">
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

        <div className="col-span-1 flex justify-end">
            <button className="tw-transition w-fit rounded-full border-2 border-stone-900 px-3 py-1 text-sm font-semibold uppercase hover:bg-stone-900 hover:text-stone-100 md:text-lg">
                Book Now!
            </button>
        </div>
    </nav>
);

export default Navigation;

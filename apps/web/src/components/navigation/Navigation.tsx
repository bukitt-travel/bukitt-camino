import Image from 'next/image';
import Link from 'next/link';

const NavLink = ({ children, href }: { children: React.ReactNode; href: string }) => (
    <Link href={href}>
        <a
            className={[
                'tw-transition text-lg font-bold hover:cursor-pointer hover:text-stone-500',
            ].join(' ')}
        >
            {children}
        </a>
    </Link>
);

const Navigation = () => (
    <nav className="grid max-w-screen-2xl grid-cols-3 items-center py-6">
        <div className="flex justify-start space-x-6">
            <NavLink href="/om-oss">About us</NavLink>
            <NavLink href="/bilder">Help</NavLink>
        </div>

        <div className="flex justify-center">
            <Link href="/">
                <a className="tw-transition w-24 hover:scale-95">
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

        <div className="flex justify-end">
            <button className="tw-transition rounded-full border-2 border-black px-3 py-1 text-lg font-bold uppercase hover:bg-black hover:text-white">
                Book Now!
            </button>
        </div>
    </nav>
);

export default Navigation;

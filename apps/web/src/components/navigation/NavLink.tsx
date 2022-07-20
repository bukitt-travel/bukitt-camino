import Link from 'next/link';

const NavLink = ({ children, href }: { children: React.ReactNode; href: string }) => (
    <Link href={href}>
        <a
            className={[
                'tw-transition text-lg font-semibold uppercase hover:cursor-pointer hover:opacity-75',
            ].join(' ')}
        >
            {children}
        </a>
    </Link>
);

export default NavLink;

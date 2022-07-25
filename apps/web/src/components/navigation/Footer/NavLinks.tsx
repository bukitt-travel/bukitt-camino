import Link from 'next/link';

const NavLinks = ({ navLinks }) => {
    return (
        <ul className="flex flex-col gap-y-6 font-serif lg:gap-y-12 lg:p-6 lg:text-right">
            {navLinks.map((navLink) => (
                <li key={navLink.id} className="text-3xl text-stone-50 lg:text-4xl">
                    <Link href={`/${navLink.slug}`}>
                        <a>{navLink.label}</a>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default NavLinks;

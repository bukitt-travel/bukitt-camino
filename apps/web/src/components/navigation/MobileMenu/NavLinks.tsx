import Link from 'next/link';

const NavLinks = ({ navLinks, setOpen }) => {
    return (
        <ul className="relative my-6 flex flex-1 flex-col items-center justify-center gap-y-12">
            {navLinks.map((navLink) => (
                <li key={navLink.id}>
                    <Link href={navLink.slug} passHref>
                        <a className="flex font-serif text-4xl" onClick={() => setOpen(false)}>
                            <span>{navLink.label}</span>
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default NavLinks;

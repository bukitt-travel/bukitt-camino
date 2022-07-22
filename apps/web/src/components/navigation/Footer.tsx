import Link from 'next/link';

const Footer = ({ navLinks }) => {
    return (
        <footer className="h-96 bg-stone-900">
            <section className="mx-auto max-w-7xl py-12">
                <ul className="flex flex-col gap-y-3 font-serif">
                    {navLinks.map((navLink) => (
                        <li className="text-2xl text-stone-50" key={navLink.id}>
                            <Link href={`/${navLink.slug}`}>
                                <a>{navLink.label}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </footer>
    );
};

export default Footer;

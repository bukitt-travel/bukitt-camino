import Logo from '@/components/icons/Logo';
import NavLinks from '@/components/navigation/Footer/NavLinks';

const Footer = ({ navLinks, contacts }) => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-stone-900 px-3 lg:px-6">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-y-24 pt-20 pb-40 lg:flex-row lg:gap-y-0 lg:pt-24  lg:pb-48">
                <div className="w-48 lg:w-72">
                    <div>
                        <Logo className="fill-stone-50" />
                    </div>
                    <ul className="mt-6 flex justify-between">
                        {contacts.map((contact) => (
                            <li
                                key={contact.id}
                                className="tw-transition rounded-full border-2 border-stone-50 bg-stone-50 p-1 text-stone-900 hover:border-stone-50 hover:bg-stone-900 hover:text-stone-50 lg:p-2"
                            >
                                <a href={contact.href} target="_blank" rel="noopener noreferrer">
                                    <contact.icon className="h-5 w-5 lg:h-6 lg:w-6" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <NavLinks navLinks={navLinks} />
            </div>

            <div className="pb-1 text-center text-xs font-thin text-stone-300">
                © {currentYear}, Bukitt LLC. Seller of Travel Reg. No. ST42985.
            </div>
        </footer>
    );
};

export default Footer;

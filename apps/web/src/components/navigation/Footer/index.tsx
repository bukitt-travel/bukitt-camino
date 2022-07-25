import NavLinks from '@/components/navigation/Footer/NavLinks';

export const currentYear = new Date().getFullYear();

const Footer = ({ navLinks }) => {
    return (
        <footer className="bg-stone-900 px-3 lg:px-6">
            <div className="mx-auto flex max-w-7xl items-center pt-24 pb-48">
                <NavLinks navLinks={navLinks} />
            </div>

            <div className="pb-1 text-center text-xs font-thin text-stone-300">
                © {currentYear}, Bukitt LLC. Seller of Travel Reg. No. ST42985.
            </div>
        </footer>
    );
};

export default Footer;

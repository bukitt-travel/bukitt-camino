import { RiPhoneLine, RiMailLine, RiInformationLine, RiQuestionLine } from 'react-icons/ri';

const ActionsMenu = ({ adventure, setOpenBooking, setOpenServices }) => {
    return (
        <nav className="fixed left-0 bottom-0 right-0 flex h-24 items-center justify-between bg-stone-900 px-6 text-stone-100 shadow-2xl">
            <div>
                <p className="font-serif font-medium uppercase md:text-2xl">{adventure.title}</p>
                <p>
                    <span className="font-serif text-xs md:text-sm">from</span>
                    <span className="text-sm md:text-lg"> ${adventure.price}</span>
                </p>
            </div>

            <div className="flex gap-x-3 md:gap-x-12">
                <button
                    className="tw-transition rounded-full border-2 border-stone-100 p-3 text-stone-100 hover:bg-stone-100 hover:text-stone-900"
                    onClick={() => setOpenServices(true)}
                >
                    <RiInformationLine className="h-4 w-4 md:h-6 md:w-6" />
                </button>
                <a
                    href="mailto:hello@bukitt.com"
                    className="tw-transition rounded-full border-2 border-stone-100 p-3 text-stone-100 hover:bg-stone-100 hover:text-stone-900"
                >
                    <RiMailLine className="h-4 w-4 md:h-6 md:w-6" />
                </a>
                <a
                    href="tel:3059986034"
                    className="tw-transition rounded-full border-2 border-stone-100 p-3 text-stone-100 hover:bg-stone-100 hover:text-stone-900"
                >
                    <RiPhoneLine className="h-4 w-4 md:h-6 md:w-6" />
                </a>
                <button
                    className="tw-transition rounded-full border-2 border-stone-100 p-3 text-stone-100 hover:bg-stone-100 hover:text-stone-900"
                    onClick={() => setOpenBooking(true)}
                >
                    <RiQuestionLine className="h-4 w-4 md:h-6 md:w-6" />
                </button>
            </div>
        </nav>
    );
};

export default ActionsMenu;

import {
    RiPhoneLine,
    RiMailLine,
    RiInformationLine,
    RiQuestionLine,
    RiMailFill,
    RiPhoneFill,
    RiQuestionFill,
    RiInformationFill,
} from 'react-icons/ri';

import { useStore } from '@/lib/store';

const ActionsMenu = ({ adventure, setOpenServices }) => {
    // @ts-expect-error need to find types for useStore()
    const { toggleBooking } = useStore();

    return (
        <nav className="fixed left-0 bottom-0 right-0 flex flex-col items-center justify-between gap-y-2 bg-stone-900 py-4 px-3 text-stone-100 md:flex-row">
            <div className="flex gap-x-2 md:flex-col">
                <p className="font-serif text-lg font-medium uppercase md:text-2xl">
                    {adventure.title}
                </p>
                <p className="text-stone-300">
                    <span className="font-serif text-sm font-thin italic md:text-base">from</span>
                    <span className="text-base md:text-lg"> ${adventure.price}</span>
                </p>
            </div>

            <div className="flex gap-x-6 md:gap-x-12">
                <div>
                    <button
                        className="tw-transition hidden rounded-full border-2 border-stone-100 p-3 text-stone-100 hover:bg-stone-100 hover:text-stone-900 md:block"
                        onClick={() => setOpenServices(true)}
                    >
                        <RiInformationLine className="md:h-6 md:w-6" />
                    </button>
                    <button
                        className="block text-stone-100 md:hidden"
                        onClick={() => setOpenServices(true)}
                    >
                        <RiInformationFill className="h-8 w-8" />
                    </button>
                </div>
                <div>
                    <button className="tw-transition hidden rounded-full border-2 border-stone-100 p-3 text-stone-100 hover:bg-stone-100 hover:text-stone-900 md:block">
                        <a href="mailto:hello@bukitt.com">
                            <RiMailLine className="md:h-6 md:w-6" />
                        </a>
                    </button>
                    <button className="block text-stone-100 md:hidden">
                        <a href="mailto:hello@bukitt.com">
                            <RiMailFill className="h-8 w-8" />
                        </a>
                    </button>
                </div>
                <div>
                    <button className="tw-transition hidden rounded-full border-2 border-stone-100 p-3 text-stone-100 hover:bg-stone-100 hover:text-stone-900 md:block">
                        <a href="tel:3059986034">
                            <RiPhoneLine className="h-4 w-4 md:h-6 md:w-6" />
                        </a>
                    </button>
                    <button className="block text-stone-100 md:hidden">
                        <a href="mailto:hello@bukitt.com">
                            <RiPhoneFill className="h-8 w-8" />
                        </a>
                    </button>
                </div>
                <div>
                    <button
                        className="tw-transition hidden rounded-full border-2 border-stone-100 p-3 text-stone-100 hover:bg-stone-100 hover:text-stone-900 md:block"
                        onClick={() => toggleBooking(true)}
                    >
                        <RiQuestionLine className="h-4 w-4 md:h-6 md:w-6" />
                    </button>
                    <button
                        className="block text-stone-100 md:hidden"
                        onClick={() => toggleBooking(true)}
                    >
                        <RiQuestionFill className="h-8 w-8" />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default ActionsMenu;

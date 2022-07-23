import { RiPhoneLine, RiMailLine, RiInformationLine, RiQuestionLine } from 'react-icons/ri';

import { useStore } from '@/lib/store';

const ActionsMenu = ({ setOpenServices }) => {
    // @ts-expect-error need to find types for useStore()
    const { toggleBooking } = useStore();

    return (
        <nav className="fixed left-0 bottom-0 right-0 flex justify-around bg-transparent py-4 px-3 text-stone-50 lg:justify-end lg:gap-x-6">
            <div>
                <button
                    className="tw-transition rounded-full bg-stone-900 p-3 hover:bg-stone-100 hover:text-stone-900 md:block"
                    onClick={() => setOpenServices(true)}
                >
                    <RiInformationLine className="h-6 w-6" />
                </button>
            </div>
            <div>
                <button className="tw-transition rounded-full bg-stone-900 p-3 hover:bg-stone-100 hover:text-stone-900 md:block">
                    <a href="mailto:hello@bukitt.com">
                        <RiMailLine className="h-6 w-6" />
                    </a>
                </button>
            </div>
            <div>
                <button className="tw-transition rounded-full bg-stone-900 p-3 hover:bg-stone-100 hover:text-stone-900 md:block">
                    <a href="tel:3059986034">
                        <RiPhoneLine className="h-6 w-6" />
                    </a>
                </button>
            </div>
            <div>
                <button
                    className="tw-transition rounded-full bg-stone-900 p-3 hover:bg-stone-100 hover:text-stone-900 md:block"
                    onClick={() => toggleBooking(true)}
                >
                    <RiQuestionLine className="h-6 w-6" />
                </button>
            </div>
        </nav>
    );
};

export default ActionsMenu;

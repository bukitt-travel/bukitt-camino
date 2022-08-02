import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Popover } from '@headlessui/react';
import clsx from 'clsx';
import { RiArrowDropDownLine } from 'react-icons/ri';

const sections = [
    { id: 'camino-history', title: 'History' },
    { id: 'camino-routes', title: 'Routes' },
];

const NavBar = () => {
    const navBarRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(null);
    const mobileActiveIndex = activeIndex === null ? 0 : activeIndex;

    useEffect(() => {
        function updateActiveIndex() {
            let newActiveIndex = null;
            const elements = sections.map(({ id }) => document.getElementById(id));
            const bodyRect = document.body.getBoundingClientRect();
            const offset = bodyRect.top + navBarRef.current.offsetHeight + 1;

            if (window.scrollY >= Math.floor(bodyRect.height) - window.innerHeight) {
                setActiveIndex(sections.length - 1);
                return;
            }

            for (let index = 0; index < elements.length; index++) {
                if (window.scrollY >= elements[index].getBoundingClientRect().top - offset) {
                    newActiveIndex = index;
                } else {
                    break;
                }
            }

            setActiveIndex(newActiveIndex);
        }

        updateActiveIndex();

        window.addEventListener('resize', updateActiveIndex);
        window.addEventListener('scroll', updateActiveIndex, { passive: true });

        return () => {
            window.removeEventListener('resize', updateActiveIndex);
            // @ts-ignore
            window.removeEventListener('scroll', updateActiveIndex, { passive: true });
        };
    }, []);

    return (
        <div ref={navBarRef} className="sticky top-0 z-50">
            <Popover className="sm:hidden">
                {({ open }) => (
                    <>
                        <div
                            className={clsx(
                                'relative flex items-center py-3 px-4',
                                !open &&
                                    'bg-white/95 shadow-sm [@supports(backdrop-filter:blur(0))]:bg-white/80 [@supports(backdrop-filter:blur(0))]:backdrop-blur',
                            )}
                        >
                            {!open && (
                                <>
                                    <span aria-hidden="true" className="text-sm text-yellow-600">
                                        {(mobileActiveIndex + 1).toString().padStart(2, '0')}
                                    </span>
                                    <span className="ml-4 text-base font-medium text-stone-900">
                                        {sections[mobileActiveIndex].title}
                                    </span>
                                </>
                            )}
                            <Popover.Button
                                className={clsx(
                                    '-mr-1 ml-auto flex h-8 w-8 items-center justify-center',
                                    open && 'relative z-10',
                                )}
                                aria-label="Toggle navigation menu"
                            >
                                {!open && (
                                    <>
                                        {/* Increase hit area */}
                                        <span className="absolute inset-0" />
                                    </>
                                )}
                                <div>
                                    <RiArrowDropDownLine
                                        className={clsx(
                                            open ? '-rotate-180' : 'rotate-0',
                                            'tw-transition h-6 w-6 text-stone-900',
                                        )}
                                    />
                                </div>
                            </Popover.Button>
                        </div>
                        <Popover.Panel className="absolute inset-x-0 top-0 bg-white/95 py-3.5 shadow-sm [@supports(backdrop-filter:blur(0))]:bg-white/80 [@supports(backdrop-filter:blur(0))]:backdrop-blur">
                            {sections.map((section, sectionIndex) => (
                                <Popover.Button
                                    key={section.id}
                                    className="flex items-center py-1.5 px-4"
                                >
                                    <Link href={`#${section.id}`}>
                                        <a>
                                            <span
                                                aria-hidden="true"
                                                className="text-sm text-yellow-600"
                                            >
                                                {(sectionIndex + 1).toString().padStart(2, '0')}
                                            </span>
                                            <span className="ml-4 text-base font-medium text-stone-900">
                                                {section.title}
                                            </span>
                                        </a>
                                    </Link>
                                </Popover.Button>
                            ))}
                        </Popover.Panel>
                        <div className="absolute inset-x-0 bottom-full z-10 h-4 bg-white" />
                    </>
                )}
            </Popover>

            <div className="hidden sm:flex sm:h-32 sm:justify-center sm:border-b sm:border-stone-200 sm:bg-white/95 sm:[@supports(backdrop-filter:blur(0))]:bg-white/80 sm:[@supports(backdrop-filter:blur(0))]:backdrop-blur">
                <ol
                    role="list"
                    className="grid auto-cols-[minmax(0,15rem)] grid-flow-col text-base font-medium text-stone-900 [counter-reset:section]"
                >
                    {sections.map((section, sectionIndex) => (
                        <li
                            key={section.id}
                            className={clsx(
                                'flex w-full items-center justify-center border-b-2',
                                sectionIndex === activeIndex
                                    ? 'border-yellow-600 bg-yellow-50 font-bold text-yellow-600 before:text-yellow-600'
                                    : 'tw-transition border-transparent before:text-stone-500 hover:bg-yellow-50/40 hover:before:text-stone-900',
                            )}
                        >
                            <Link href={`#${section.id}`}>
                                <a className="flex flex-col items-center gap-y-3">
                                    <span className="text-xs font-medium text-stone-500">
                                        {(sectionIndex + 1).toString().padStart(2, '0')}
                                    </span>
                                    <span className="uppercase">{section.title}</span>
                                </a>
                            </Link>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default NavBar;

import { useEffect, useId, useState } from 'react';
import Image from 'next/image';
import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import { RiTrainLine, RiBus2Line, RiPlaneLine, RiWalkLine } from 'react-icons/ri';

import { urlForImage } from '@/lib/sanity';

import Container from '@/components/shared/Container';
import DiamondIcon from '@/components/icons/DiamondIcon';

const Itinerary = ({ itinerary, color }) => {
    const id = useId();
    const [tabOrientation, setTabOrientation] = useState('horizontal');

    useEffect(() => {
        const lgMediaQuery = window.matchMedia('(min-width: 1024px)');

        function onMediaQueryChange({ matches }) {
            setTabOrientation(matches ? 'vertical' : 'horizontal');
        }

        onMediaQueryChange(lgMediaQuery);
        lgMediaQuery.addEventListener('change', onMediaQueryChange);

        return () => {
            lgMediaQuery.removeEventListener('change', onMediaQueryChange);
        };
    }, []);
    return (
        <section id="itinerary" aria-labelledby="itinerary-title" className="py-20 sm:py-32">
            <Container className="">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 id="itinerary-title" className="tw-subheading" style={{ color: color }}>
                        Itinerary
                    </h2>
                </div>
                <Tab.Group
                    as="div"
                    className="mt-14 grid grid-cols-1 items-start gap-y-8 gap-x-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
                    vertical={tabOrientation === 'vertical'}
                >
                    <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
                        <div className="absolute bottom-0 top-2 left-0.5 hidden w-px bg-stone-200 lg:block" />
                        <Tab.List className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4 sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
                            {({ selectedIndex }) =>
                                itinerary?.map((stage, stageIndex) => (
                                    <div key={stage.dateTime} className="relative lg:pl-8">
                                        <DiamondIcon
                                            className={clsx(
                                                'absolute top-[0.5625rem] left-[-0.5px] hidden h-1.5 w-1.5 overflow-visible lg:block',
                                                stageIndex === selectedIndex
                                                    ? 'fill-stone-900 stroke-stone-600'
                                                    : 'fill-transparent stroke-stone-400',
                                            )}
                                        />
                                        <div className="relative">
                                            <div
                                                className={clsx(
                                                    'text-md',
                                                    stageIndex === selectedIndex
                                                        ? 'font-semibold'
                                                        : 'opacity-50',
                                                )}
                                                style={{ color: color }}
                                            >
                                                <Tab className="outline-none [&:not(:focus-visible)]:focus:outline-none">
                                                    <span className="absolute inset-0" />
                                                    {stage.locationFrom}
                                                    {stage.locationTo && ` - ${stage.locationTo}`}
                                                </Tab>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </Tab.List>
                    </div>
                    <Tab.Panels className="lg:col-span-3">
                        {itinerary?.map((stage) => (
                            <Tab.Panel
                                key={stage.id}
                                className="[&:not(:focus-visible)]:focus:outline-none"
                                unmount={false}
                            >
                                <section>
                                    <div className="flex text-lg font-medium uppercase tracking-wider text-stone-700">
                                        <div>
                                            {stage.dayTo && (
                                                <div>
                                                    days {stage.dayFrom} - {stage.dayTo}
                                                </div>
                                            )}
                                            {!stage.dayTo && <div>day {stage.dayFrom}</div>}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="mt-4 font-serif text-6xl font-medium">
                                            {stage.locationFrom}
                                            {stage.locationTo && ` - ${stage.locationTo}`}
                                        </h3>
                                    </div>

                                    <div className="mt-12 grid w-full grid-cols-2 gap-x-6">
                                        <div className="col-span-1">
                                            {stage.image && (
                                                <Image
                                                    src={urlForImage(stage.image)
                                                        .width(1080)
                                                        .height(1080)
                                                        .url()}
                                                    alt=""
                                                    layout="responsive"
                                                    width={1}
                                                    height={1}
                                                    objectFit="cover"
                                                    objectPosition="center"
                                                    className="bg-stone-200"
                                                />
                                            )}
                                        </div>
                                        <div className="col-span-1">
                                            <div>
                                                {stage.activity === 'route stage' && (
                                                    <div>
                                                        <div className="flex items-baseline gap-x-2 text-2xl font-medium">
                                                            <RiWalkLine />
                                                            <span>Route {stage.stageNumber}:</span>
                                                            <span>{stage.distance} km</span>
                                                        </div>
                                                        <hr className="border-b-0.5 my-2 border-stone-900" />
                                                    </div>
                                                )}
                                                {stage.activity === 'check-in and transfer' && (
                                                    <div>
                                                        <div className="flex items-center gap-x-2 text-2xl font-medium">
                                                            {stage.transportation === 'train' && (
                                                                <RiTrainLine />
                                                            )}
                                                            {stage.transportation === 'car' && (
                                                                <RiBus2Line />
                                                            )}
                                                            {stage.transportation === 'plane' && (
                                                                <RiPlaneLine />
                                                            )}
                                                            <span>Check-in and Transfer</span>
                                                        </div>
                                                        <hr className="border-b-0.5 my-2 border-stone-900" />
                                                    </div>
                                                )}
                                                {stage.activity === 'check-out and transfer' && (
                                                    <div>
                                                        <div className="flex items-center gap-x-2 text-2xl font-medium">
                                                            {stage.transportation === 'train' && (
                                                                <RiTrainLine />
                                                            )}
                                                            {stage.transportation === 'car' && (
                                                                <RiBus2Line />
                                                            )}
                                                            {stage.transportation === 'plane' && (
                                                                <RiPlaneLine />
                                                            )}
                                                            <span>Check-out and Transfer</span>
                                                        </div>
                                                        <hr className="border-b-0.5 my-2 border-stone-900" />
                                                    </div>
                                                )}
                                                {stage.activity === 'day trip' && (
                                                    <div>
                                                        <div className="flex items-center gap-x-2 text-2xl font-medium">
                                                            {stage.transportation === 'train' && (
                                                                <RiTrainLine />
                                                            )}
                                                            {stage.transportation === 'car' && (
                                                                <RiBus2Line />
                                                            )}
                                                            {stage.transportation === 'plane' && (
                                                                <RiPlaneLine />
                                                            )}
                                                            {stage.transportation === 'walk' && (
                                                                <RiWalkLine />
                                                            )}
                                                            <span>Day Trip</span>
                                                        </div>
                                                        <hr className="border-b-0.5 my-2 border-stone-900" />
                                                    </div>
                                                )}
                                            </div>

                                            <div className="prose-lg">{stage.description}</div>
                                        </div>
                                    </div>
                                </section>
                            </Tab.Panel>
                        ))}
                    </Tab.Panels>
                </Tab.Group>
            </Container>
        </section>
    );
};

export default Itinerary;

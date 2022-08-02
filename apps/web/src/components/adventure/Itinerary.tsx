import { useEffect, useState } from 'react';
import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import {
    RiTrainLine,
    RiBus2Line,
    RiPlaneLine,
    RiWalkLine,
    RiPinDistanceLine,
    RiTimerLine,
    RiHotelBedLine,
} from 'react-icons/ri';

import Slider from '@/components/adventure/Highlights/Slider';
import DiamondIcon from '@/components/icons/DiamondIcon';

const Itinerary = ({ itinerary, color }) => {
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
        <section
            id="itinerary"
            aria-labelledby="itinerary-title"
            className="mx-auto max-w-7xl px-3 py-16 md:px-0"
        >
            <h2
                id="itinerary-title"
                className="tw-subheading text-center lg:text-left"
                style={{ color: color }}
            >
                Itinerary
            </h2>
            <Tab.Group
                as="div"
                className="mt-12 grid grid-cols-1 items-start gap-y-8 gap-x-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
                vertical={tabOrientation === 'vertical'}
            >
                <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
                    <div className="absolute bottom-0 top-2 left-0.5 hidden w-px bg-stone-200 lg:block" />
                    <Tab.List className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4 sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
                        {({ selectedIndex }) =>
                            itinerary?.map((stage, stageIndex) => (
                                <div key={stageIndex} className="relative lg:pl-8">
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
                                                'text-sm lg:text-base',
                                                stageIndex === selectedIndex
                                                    ? 'font-semibold'
                                                    : 'opacity-50',
                                            )}
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
                <Tab.Panels className="bg-stone-50 lg:col-span-3">
                    {itinerary?.map((stage, idx) => (
                        <Tab.Panel key={idx}>
                            <div>
                                <div className="mb-3 p-3 lg:mb-0 lg:p-6">
                                    <div className="text-center text-sm font-semibold uppercase tracking-wider text-stone-700 lg:text-left lg:text-lg">
                                        {stage.dayTo && (
                                            <h3>
                                                days {stage.dayFrom} - {stage.dayTo}
                                            </h3>
                                        )}
                                        {!stage.dayTo && <h3>day {stage.dayFrom}</h3>}
                                    </div>
                                    <div>
                                        <h3 className="mt-2 flex flex-col gap-x-2 text-center font-serif text-4xl font-medium lg:mt-4 lg:flex-row lg:text-left lg:text-6xl">
                                            <span>{stage.locationFrom}</span>
                                            {stage.locationTo && (
                                                <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-2">
                                                    <span className="text-xl italic lg:hidden lg:text-3xl">
                                                        to
                                                    </span>
                                                    <span className="hidden text-xl italic lg:block lg:text-3xl">
                                                        —
                                                    </span>
                                                    <span>{stage.locationTo}</span>
                                                </div>
                                            )}
                                        </h3>
                                    </div>
                                </div>

                                <div>
                                    {stage.activity === 'route stage' && (
                                        <div
                                            className="flex justify-center gap-x-2 py-2 text-lg font-semibold uppercase text-stone-900 lg:text-xl "
                                            style={{ backgroundColor: color }}
                                        >
                                            <RiWalkLine className="h-6 w-6" />
                                            <span>Stage {stage.stageNumber}</span>
                                        </div>
                                    )}
                                    {stage.activity === 'check-in and transfer' && (
                                        <div
                                            className="flex justify-center gap-x-2 py-2 text-lg font-semibold uppercase text-stone-900 lg:text-xl"
                                            style={{ backgroundColor: color }}
                                        >
                                            {stage.transportation === 'train' && (
                                                <RiTrainLine className="h-6 w-6" />
                                            )}
                                            {stage.transportation === 'car' && (
                                                <RiBus2Line className="h-6 w-6" />
                                            )}
                                            {stage.transportation === 'plane' && (
                                                <RiPlaneLine className="h-6 w-6" />
                                            )}
                                            <span>Check-in and Transfer</span>
                                        </div>
                                    )}
                                    {stage.activity === 'check-out and transfer' && (
                                        <div
                                            className="flex justify-center gap-x-2 py-2 text-lg font-semibold uppercase text-stone-900 lg:text-xl"
                                            style={{ backgroundColor: color }}
                                        >
                                            {stage.transportation === 'train' && (
                                                <RiTrainLine className="h-6 w-6" />
                                            )}
                                            {stage.transportation === 'car' && (
                                                <RiBus2Line className="h-6 w-6" />
                                            )}
                                            {stage.transportation === 'plane' && (
                                                <RiPlaneLine className="h-6 w-6" />
                                            )}
                                            <span>Check-out and Transfer</span>
                                        </div>
                                    )}
                                    {stage.activity === 'day trip' && (
                                        <div
                                            className="flex justify-center gap-x-2 py-2 text-lg font-semibold uppercase text-stone-900 lg:text-xl"
                                            style={{ backgroundColor: color }}
                                        >
                                            {stage.transportation === 'train' && (
                                                <RiTrainLine className="h-6 w-6" />
                                            )}
                                            {stage.transportation === 'car' && (
                                                <RiBus2Line className="h-6 w-6" />
                                            )}
                                            {stage.transportation === 'plane' && (
                                                <RiPlaneLine className="h-6 w-6" />
                                            )}
                                            {stage.transportation === 'walk' && (
                                                <RiWalkLine className="h-6 w-6" />
                                            )}
                                            <span>Day Trip</span>
                                        </div>
                                    )}
                                </div>
                                {stage.activity === 'route stage' && (
                                    <div className="grid grid-cols-3 place-content-center gap-x-1 divide-x divide-dashed divide-stone-900 divide-opacity-50 border-b border-dashed border-stone-900 border-opacity-50">
                                        {stage.walkingDistance && (
                                            <div className="flex flex-col items-center justify-center gap-y-1 p-3 lg:p-6">
                                                <RiPinDistanceLine className="h-5 w-5 lg:h-6 lg:w-6" />
                                                <h3 className="hidden text-xs font-medium uppercase lg:block lg:text-sm">
                                                    Distance
                                                </h3>
                                                <h4 className="gap-x-1 text-sm font-semibold capitalize lg:text-xl">
                                                    {stage.walkingDistance}
                                                    <span className="ml-0.5 text-xs text-stone-500">
                                                        km
                                                    </span>
                                                </h4>
                                            </div>
                                        )}
                                        {stage.walkingTime && (
                                            <div className="flex flex-col items-center justify-center gap-y-1 p-3 lg:p-6">
                                                <RiTimerLine className="h-5 w-5 lg:h-6 lg:w-6" />
                                                <h3 className="hidden text-xs font-medium uppercase lg:block lg:text-sm">
                                                    Duration
                                                </h3>
                                                <h4 className="flex gap-x-1 text-sm font-semibold capitalize lg:text-xl">
                                                    <span>
                                                        {stage.walkingTime.hours}
                                                        <span className="ml-0.5 text-xs text-stone-500">
                                                            h
                                                        </span>
                                                    </span>
                                                    <span>
                                                        {stage.walkingTime.minutes}
                                                        <span className="ml-0.5 text-xs text-stone-500">
                                                            min
                                                        </span>
                                                    </span>
                                                </h4>
                                            </div>
                                        )}

                                        {stage.overnightStay && (
                                            <div className="flex flex-col items-center justify-center gap-y-1 p-3 lg:p-6">
                                                <RiHotelBedLine className="h-5 w-5 lg:h-6 lg:w-6" />
                                                <h3 className="hidden text-xs font-medium uppercase lg:block lg:text-sm">
                                                    Accommodation
                                                </h3>
                                                <h4 className="text-sm font-semibold capitalize lg:text-xl">
                                                    {stage.overnightStay}
                                                </h4>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>

                            <div className="grid w-full grid-cols-1 gap-x-6 lg:grid-cols-2 lg:p-6">
                                <div className="col-span-1">
                                    {stage.gallery && (
                                        <Slider gallery={stage.gallery} color={color} />
                                    )}
                                </div>

                                <div className="col-span-1 mt-6 lg:mt-0">
                                    {stage.description && (
                                        <div className="prose prose-lg w-full lg:prose-xl">
                                            {stage.description}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </section>
    );
};

export default Itinerary;

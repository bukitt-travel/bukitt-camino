import {
    RiMoneyDollarCircleFill,
    RiGroupFill,
    RiPinDistanceFill,
    RiTimeFill,
    RiBarChart2Fill,
} from 'react-icons/ri';

const Details = ({ difficulty, price, group, distance, duration }) => {
    return (
        <section className="col-span-1 flex flex-col divide-y divide-dashed divide-stone-900 divide-opacity-50 md:col-span-2">
            <div className="py-3">
                <div className="flex items-baseline gap-x-3 font-medium uppercase md:text-base">
                    <RiMoneyDollarCircleFill />
                    <h2 className="text-base">Price</h2>
                </div>

                <p className="mt-1 text-lg">
                    <span className="text-sm text-stone-500">from</span>
                    <span className="font-semibold"> ${price}</span>
                </p>
            </div>
            <div className="py-3">
                <div className="flex items-baseline gap-x-3 font-medium uppercase">
                    <RiGroupFill />
                    <h2 className="text-stone-700">Group</h2>
                </div>

                <p className="mt-1">
                    <span className="font-semibold">{group}</span>
                    <span className="text-sm text-stone-500"> min.</span>
                </p>
            </div>
            <div className="py-3">
                <div className="flex items-baseline gap-x-3 font-medium uppercase">
                    <RiBarChart2Fill />
                    <h2 className="">Difficulty</h2>
                </div>
                <p className="mt-1">
                    <span className="font-semibold capitalize">{difficulty}</span>
                </p>
            </div>
            <div className="py-3">
                <div className="flex items-baseline gap-x-3 font-medium uppercase">
                    <RiPinDistanceFill />
                    <h2 className="">Distance</h2>
                </div>
                <p className="mt-1">
                    <span className="font-semibold capitalize">{distance}</span>
                    <span className="text-sm text-stone-500"> km.</span>
                </p>
            </div>
            <div className="py-3">
                <div className="flex items-baseline gap-x-3 font-medium uppercase">
                    <RiTimeFill />
                    <h2 className="">Duration</h2>
                </div>
                <p className="mt-1">
                    <span className="font-semibold capitalize">{duration}</span>
                    <span className="text-sm text-stone-500"> days</span>
                </p>
            </div>
        </section>
    );
};

export default Details;

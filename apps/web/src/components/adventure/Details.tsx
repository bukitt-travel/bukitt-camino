import {
    IoPricetag,
    IoPeople,
    IoPin,
    IoTime,
    IoBarChart,
    IoInformationCircle,
} from 'react-icons/io5';

const Details = ({ difficulty, price, group, distance, duration, setOpen }) => {
    return (
        <section className="col-span-1 flex flex-col divide-y divide-dashed divide-stone-900 divide-opacity-50 md:col-span-2">
            <div className="py-3">
                <div className="flex items-baseline gap-x-3 font-medium uppercase md:text-base">
                    <IoPricetag />
                    <h2 className="text-base">Price</h2>
                </div>

                <p className="mt-1 text-lg">
                    <span className="text-sm text-stone-500">from</span>
                    <span className="font-semibold"> ${price}</span>
                </p>
            </div>
            <div className="py-3">
                <div className="flex items-baseline gap-x-3 font-medium uppercase">
                    <IoPeople />
                    <h2 className="text-stone-700">Group</h2>
                </div>

                <p className="mt-1">
                    <span className="font-semibold">{group}</span>
                    <span className="text-sm text-stone-500"> min.</span>
                </p>
            </div>
            <div className="py-3">
                <div className="flex items-baseline gap-x-3 font-medium uppercase">
                    <IoBarChart />
                    <h2 className="">Difficulty</h2>
                </div>
                <p className="mt-1">
                    <span className="font-semibold capitalize">{difficulty}</span>
                </p>
            </div>
            <div className="py-3">
                <div className="flex items-baseline gap-x-3 font-medium uppercase">
                    <IoPin />
                    <h2 className="">Distance</h2>
                </div>
                <p className="mt-1">
                    <span className="font-semibold capitalize">{distance}</span>
                    <span className="text-sm text-stone-500"> km.</span>
                </p>
            </div>
            <div className="py-3">
                <div className="flex items-baseline gap-x-3 font-medium uppercase">
                    <IoTime />
                    <h2 className="">Duration</h2>
                </div>
                <p className="mt-1">
                    <span className="font-semibold capitalize">{duration}</span>
                    <span className="text-sm text-stone-500"> days</span>
                </p>
            </div>
            <div className="py-3">
                <div className="flex items-baseline gap-x-3 font-medium uppercase">
                    <IoInformationCircle className="tw-transition hover:scale-105" />
                    <h2 className="">Trip Details</h2>
                </div>
                <button className="mt-1" onClick={() => setOpen(true)}>
                    <span className="text-sm text-stone-500">Click for </span>
                    <span className="font-semibold">+ details</span>
                </button>
            </div>
        </section>
    );
};

export default Details;

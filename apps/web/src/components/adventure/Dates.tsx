import { format, isBefore } from 'date-fns';
import clsx from 'clsx';
import { RiCalendar2Line } from 'react-icons/ri';

const Dates = ({ dates, color }) => {
    console.log(dates);
    const todayDate = format(new Date(), 'MM-dd-yyyy');
    const formattedDates = dates.map((date) => ({
        startDate: format(new Date(date.startDate), 'MM-dd-yyyy'),
        endDate: format(new Date(date.endDate), 'MM-dd-yyyy'),
        availability: date.availability,
    }));
    return (
        <section className="text-center md:col-span-2">
            <div
                className="flex h-12 items-center justify-center gap-x-2 text-lg font-semibold uppercase"
                style={{ backgroundColor: color }}
            >
                <RiCalendar2Line className="h-6 w-6" />
                <h3>Available Dates</h3>
            </div>
            <div className="divide-y divide-dashed divide-stone-900 divide-opacity-50 bg-stone-50 px-3">
                {formattedDates.map((date) => (
                    <div key={date._key} className="flex h-24 flex-col place-content-center">
                        <div className="flex items-center justify-center gap-x-2">
                            <div
                                className={clsx(
                                    isBefore(new Date(todayDate), new Date(date.startDate))
                                        ? ''
                                        : 'font-normal line-through opacity-50',
                                    'whitespace-nowrap text-lg font-medium text-stone-900 lg:text-xl',
                                )}
                            >
                                {format(new Date(date.startDate), 'MMM d y')}
                            </div>
                            <div> - </div>
                            <div
                                className={clsx(
                                    isBefore(new Date(todayDate), new Date(date.endDate))
                                        ? ''
                                        : 'font-normal line-through opacity-50',
                                    'whitespace-nowrap text-lg font-medium text-stone-900 lg:text-xl',
                                )}
                            >
                                {format(new Date(date.endDate), 'MMM d y')}
                            </div>
                        </div>
                        {date.availability && (
                            <div>
                                {date.availability === 'last spots' && (
                                    <p
                                        className="text-sm font-bold uppercase tracking-wider"
                                        style={{ color: color }}
                                    >
                                        Last Spots
                                    </p>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Dates;

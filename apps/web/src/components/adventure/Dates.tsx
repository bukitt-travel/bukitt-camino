import { format, isBefore } from 'date-fns';
import clsx from 'clsx';
import { TbPlaneDeparture, TbPlaneArrival } from 'react-icons/tb';

const Dates = ({ dates, color }) => {
    const todayDate = format(new Date(), 'MM-dd-yyyy');
    const formattedDates = dates.map((date) => ({
        startDate: format(new Date(date.startDate), 'MM-dd-yyyy'),
        endDate: format(new Date(date.endDate), 'MM-dd-yyyy'),
    }));
    return (
        <section className="mx-auto max-w-7xl text-center">
            <div>
                <table className="min-w-full divide-y divide-stone-300">
                    <thead style={{ backgroundColor: color }}>
                        <tr>
                            <th
                                scope="col"
                                className="py-3.5 pl-4 pr-3 text-center text-xs font-semibold uppercase text-stone-900 sm:pl-6 lg:text-lg"
                            >
                                <TbPlaneDeparture className="w-full text-4xl" />
                                <p className="mt-2 hidden lg:block">Start Date</p>
                            </th>
                            <th
                                scope="col"
                                className="py-3.5 pl-4 pr-3 text-center text-xs font-semibold uppercase text-stone-900 sm:pl-6 lg:text-lg"
                            >
                                <TbPlaneArrival className="w-full text-4xl" />
                                <p className="mt-2 hidden lg:block">End Date</p>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {formattedDates.map((date, idx) => (
                            <tr
                                key={date.email}
                                className={idx % 2 === 0 ? undefined : 'bg-stone-50'}
                            >
                                <td
                                    className={clsx(
                                        isBefore(new Date(todayDate), new Date(date.startDate))
                                            ? ''
                                            : 'font-normal line-through opacity-50',
                                        'whitespace-nowrap p-4 text-lg font-semibold text-stone-900 lg:text-xl',
                                    )}
                                >
                                    {format(new Date(date.startDate), 'do MMM y')}
                                </td>
                                <td
                                    className={clsx(
                                        isBefore(new Date(todayDate), new Date(date.endDate))
                                            ? ''
                                            : 'font-normal line-through opacity-50',
                                        'whitespace-nowrap p-4 text-lg font-semibold text-stone-900 lg:text-xl',
                                    )}
                                >
                                    {format(new Date(date.endDate), 'do MMM y')}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Dates;

import { format, isBefore } from 'date-fns';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import clsx from 'clsx';
import { RiShieldCheckLine } from 'react-icons/ri';
import { Switch } from '@headlessui/react';
import { yupResolver } from '@hookform/resolvers/yup';

import { phoneRegExp } from '@/utils/validators';

import BtnInquiryForm from '@/components/forms/BtnInquiryForm';
import InputBox from '@/components/forms/InputBox';
import InputLabel from '@/components/forms/InputLabel';
import FormError from '@/components/forms/FormError';

const schema = yup
    .object()
    .shape({
        firstName: yup.string().required('Please enter a first name.'),
        lastName: yup.string().required('Please enter a last name.'),
        email: yup.string().email('Please enter a valid email.').required('Please enter an email.'),
        phone: yup
            .string()
            .required('Please enter a phone number.')
            .matches(phoneRegExp, 'Please enter a valid phone number.')
            .min(5, 'The phone number is too short.')
            .max(15, 'The phone number is too long.'),
        adventure: yup.string().required('Please pick an adventure.'),
        tripDate: yup.string().required('Please pick a trip date.'),
        message: yup.string().required('Please enter an inquiry message.'),
    })
    .required();

const InquiryForm = ({ adventures }) => {
    const [adventureDates, setAdventureDates] = useState([]);
    const [agreedContact, setAgreedContact] = useState(false);
    const [serverError, setServerError] = useState('');
    const [success, setSuccess] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { isSubmitting, errors },
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema),
    });

    const watchAdventure = watch('adventure');

    useEffect(() => {
        const filteredAdventure = adventures.find(
            (adventure) => adventure.title === watchAdventure,
        );

        const filteredDates = filteredAdventure?.dates?.filter((date) =>
            isBefore(new Date(), new Date(date?.startDate)),
        );

        console.log(filteredDates);

        setAdventureDates(
            filteredDates?.map((date) => ({
                fullDate: `${format(new Date(date.startDate), 'MMM d y')} - ${format(
                    new Date(date.endDate),
                    'MMM d y',
                )}`,
            })),
        );
    }, [watchAdventure]);

    const onSubmit = async (formData) => {
        if (submitting) {
            return false;
        }

        setSubmitting(true);
        setServerError('');

        const res = await fetch('/api/send', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (data.error) {
            setServerError(data.error);
            setSuccess('');
        } else {
            setSuccess('Your Camino Sherpa will contact you in the next 72h.');
            setServerError('');
        }

        setSubmitting(false);

        reset();

        return data;
    };

    return (
        <AnimatePresence exitBeforeEnter>
            {!success ? (
                <motion.form
                    initial={{ opacity: 0, x: '-100%' }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: '100%' }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="mx-auto grid max-w-3xl grid-cols-2 gap-12"
                >
                    <div className="col-span-2 lg:col-span-1">
                        <div className="relative">
                            <InputBox
                                id="firstName"
                                name="firstName"
                                type="text"
                                placeholder="First Name"
                                autoComplete="given-name"
                                register={register}
                                registerValue="firstName"
                            />

                            <InputLabel htmlFor="firstName">First Name</InputLabel>

                            <div className="h-3">
                                {errors?.firstName?.message && (
                                    <FormError>{errors?.firstName?.message}</FormError>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="col-span-2 lg:col-span-1">
                        <div className="relative">
                            <InputBox
                                id="lastName"
                                name="lastName"
                                type="text"
                                placeholder="Last Name"
                                autoComplete="family-name"
                                register={register}
                                registerValue="lastName"
                            />
                            <InputLabel htmlFor="lastName">Last Name</InputLabel>
                        </div>

                        <div className="h-3">
                            {errors?.lastName?.message && (
                                <FormError>{errors?.lastName?.message}</FormError>
                            )}
                        </div>
                    </div>

                    <div className="col-span-2">
                        <div className="relative">
                            <InputBox
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Email"
                                autoComplete="email"
                                register={register}
                                registerValue="email"
                            />
                            <InputLabel htmlFor="email">Email</InputLabel>
                        </div>
                        <div className="h-3">
                            {errors?.email?.message && (
                                <FormError>{errors?.email?.message}</FormError>
                            )}
                        </div>
                    </div>

                    <div className="col-span-2">
                        <div className="relative">
                            <InputBox
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="Phone"
                                autoComplete="phone"
                                register={register}
                                registerValue="phone"
                            />
                            <InputLabel htmlFor="phone">phone</InputLabel>
                        </div>
                        <div className="h-3">
                            {errors?.phone?.message && (
                                <FormError>{errors?.phone?.message}</FormError>
                            )}
                        </div>
                    </div>

                    <div className="col-span-2">
                        <div className="relative">
                            <select
                                name="adventure"
                                id="adventure"
                                defaultValue="default"
                                {...register('adventure')}
                                className="peer h-10 w-full border-0 border-b border-dashed border-stone-900 bg-transparent pt-2 text-sm italic text-stone-700 placeholder-transparent focus:border-stone-500 focus:outline-none focus:ring-0"
                            >
                                <option disabled value="default">
                                    -- Pick your Camino --
                                </option>

                                {adventures.map((adventure, idx) => (
                                    <option key={idx} value={adventure.title}>
                                        {adventure.title}
                                    </option>
                                ))}
                            </select>
                            <InputLabel htmlFor="adventure">Adventure</InputLabel>
                        </div>
                        <div className="h-3">
                            {errors?.adventure && <FormError>{errors.adventure.message}</FormError>}
                        </div>
                    </div>

                    <div className="col-span-2">
                        <div className="relative">
                            <select
                                name="tripDate"
                                id="tripDate"
                                defaultValue="default"
                                {...register('tripDate')}
                                className="peer h-10 w-full border-0 border-b border-dashed border-stone-900 bg-transparent pt-2 text-sm italic text-stone-700 placeholder-transparent focus:border-stone-500 focus:outline-none focus:ring-0"
                            >
                                <option disabled value="default">
                                    -- Choose a Date --
                                </option>

                                {adventureDates?.map((adventureDate, idx) => (
                                    <option key={idx} value={adventureDate.fullDate}>
                                        {adventureDate.fullDate}
                                    </option>
                                ))}
                            </select>
                            <InputLabel htmlFor="tripdDate">Trip Date</InputLabel>
                        </div>
                        <div className="h-3">
                            {errors?.adventure && <FormError>{errors.adventure.message}</FormError>}
                        </div>
                    </div>

                    <div className="col-span-2">
                        <div className="relative">
                            <textarea
                                id="message"
                                name="message"
                                rows={1}
                                placeholder="Message"
                                {...register('message', {})}
                                className="peer h-10 w-full border-0 border-b border-dashed border-stone-900 bg-transparent pt-2 text-sm italic text-stone-700 placeholder-transparent focus:border-stone-500 focus:outline-none focus:ring-0"
                            />

                            <InputLabel htmlFor="message">Message</InputLabel>

                            <div className="h-3">
                                {errors?.message?.message && (
                                    <FormError>{errors?.message?.message}</FormError>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="col-span-2 flex items-center space-x-3 lg:col-span-2">
                        <Switch
                            checked={agreedContact}
                            onChange={setAgreedContact}
                            className="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2"
                        >
                            <span className="sr-only">Agree to contact.</span>
                            <span
                                aria-hidden="true"
                                className="pointer-events-none absolute h-full w-full rounded-md bg-stone-50"
                            />

                            <span
                                aria-hidden="true"
                                className={clsx(
                                    agreedContact ? 'bg-stone-900' : 'bg-stone-200',
                                    'pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out',
                                )}
                            />
                            <span
                                aria-hidden="true"
                                className={clsx(
                                    agreedContact ? 'translate-x-5' : 'translate-x-0',
                                    'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-stone-200 bg-stone-50 shadow ring-0 transition-transform duration-200 ease-in-out',
                                )}
                            />
                        </Switch>

                        <p className="text-xs text-stone-700">
                            Can we contact you and use your details to plan your trip?
                        </p>
                    </div>

                    <div className="mx-auto mt-12 flex flex-col items-center justify-center sm:col-span-2">
                        <BtnInquiryForm
                            isSubmitting={isSubmitting}
                            disabled={isSubmitting || agreedContact === false}
                        >
                            {isSubmitting ? 'Submitting' : 'Send Message'}
                        </BtnInquiryForm>
                        {serverError && <span>{serverError}</span>}
                    </div>
                </motion.form>
            ) : (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center gap-y-6 text-center"
                >
                    <RiShieldCheckLine className="h-10 w-10 lg:h-12 lg:w-12" />
                    <p>
                        <span className="inline-block font-serif text-3xl font-medium lg:text-4xl">
                            Message Sent!
                        </span>
                        <span className="mt-1.5 inline-block text-xl lg:mt-2 lg:text-2xl">
                            {success}
                        </span>
                    </p>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default InquiryForm;

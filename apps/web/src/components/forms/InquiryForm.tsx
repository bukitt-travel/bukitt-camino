import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import clsx from 'clsx';
import { motion, AnimateSharedLayout } from 'framer-motion';
import { Switch } from '@headlessui/react';
import { yupResolver } from '@hookform/resolvers/yup';

import BtnInquiryForm from '@/components/forms/BtnInquiryForm';
import InputBox from '@/components/forms/InputBox';
import InputLabel from '@/components/forms/InputLabel';

const schema = yup
    .object()
    .shape({
        firstName: yup.string().required('Please enter a first name.'),
        lastName: yup.string().required('Please enter a last name.'),
        email: yup.string().email('Please enter a valid email.').required('Please enter an email.'),
        message: yup.string().required('Please enter an inquiry message.'),
    })
    .required();

const InquiryForm = () => {
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

    // //   const watchCategory = watch('category');

    const onSubmit = async (formData) => {
        if (submitting) {
            return false;
        }

        setSubmitting(true);
        setServerError('');

        const res = await fetch('/api/mail', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phone: formData.phone,
                message: formData.message,
            }),
        });

        const data = await res.json();

        if (data.error) {
            setServerError(data.error);
            setSuccess('');
        } else {
            setSuccess(
                'Your inquiry message has been successfully submitted. Our travel concierge will contact you shortly!',
            );
            setServerError('');
        }

        setSubmitting(false);

        reset();
    };

    return (
        <AnimateSharedLayout>
            <motion.div layout>
                {!success ? (
                    <form
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

                                {/* <div className="h-3">
                {errors?.firstName?.message && (
                  <FormError>{errors?.firstName?.message}</FormError>
                  )}
                </div> */}
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

                            {/* <div className="h-3">
                {errors?.lastName?.message && (
                  <FormError>{errors?.lastName?.message}</FormError>
                  )}
                </div> */}
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
                            {/* <div className="h-3">
              {errors?.email?.message && (
                <FormError>{errors?.email?.message}</FormError>
                )}
              </div> */}
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
                            </div>

                            {/* <label htmlFor="message" className="tw-inquiry-form-label">
                                Message
                            </label>
                            <div className="mt-1">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    {...register('message', {})}
                                    className="focus:border-brand-500 focus:ring-brand-500 block w-full rounded-md border border-slate-300 py-3 px-4 shadow-sm"
                                />
                                <div className="h-3">
                                    {errors?.message?.message && (
                                        <FormError>{errors?.message?.message}</FormError>
                                    )}
                                </div>
                            </div> */}
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
                    </form>
                ) : (
                    <div className="text-brand mx-auto mt-12 max-w-3xl text-center text-lg font-medium">
                        {success}
                    </div>
                )}
            </motion.div>
        </AnimateSharedLayout>
    );
};

export default InquiryForm;

import clsx from 'clsx';
import { PortableText } from '@portabletext/react';
import { Disclosure, Transition } from '@headlessui/react';
import { RiArrowDownSLine } from 'react-icons/ri';

import { sanityClient } from '@/lib/sanity.server';
import { faqPageQuery } from '@/lib/queries';

import Page from '@/components/shared/Page';
import Tagline from '@/components/shared/Tagline';
import BookingSlideOver from '@/components/shared/BookingSlideOver';

const FAQ = ({ faq, adventures }) => {
    return (
        <Page metaTitle="FAQ" metaDescription="We answer the most impor.">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-3xl">
                    <section className="mx-auto my-12 max-w-2xl text-center">
                        <Tagline>No question is too small</Tagline>
                        <h1 className="mt-6 font-serif text-8xl font-bold uppercase">FAQ</h1>
                    </section>
                    <dl className="mt-6 space-y-6 divide-y divide-dashed divide-stone-900 divide-opacity-50">
                        {faq.map((faq) => (
                            <Disclosure as="div" key={faq.question} className="pt-6">
                                {({ open }) => (
                                    <>
                                        <dt className="text-lg">
                                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-stone-900">
                                                <span className="font-semibold text-stone-900">
                                                    {faq.question}
                                                </span>
                                                <span className="ml-6 flex h-7 items-center">
                                                    <RiArrowDownSLine
                                                        className={clsx(
                                                            open ? '-rotate-180' : 'rotate-0',
                                                            'tw-transition h-6 w-6 transform',
                                                        )}
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            </Disclosure.Button>
                                        </dt>
                                        <Transition
                                            enter="transition duration-100 ease-out"
                                            enterFrom="transform scale-95 opacity-0"
                                            enterTo="transform scale-100 opacity-100"
                                            leave="transition duration-75 ease-out"
                                            leaveFrom="transform scale-100 opacity-100"
                                            leaveTo="transform scale-95 opacity-0"
                                        >
                                            <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                                <div className="prose text-base text-stone-700">
                                                    <PortableText value={faq.answer} />
                                                </div>
                                            </Disclosure.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
            <BookingSlideOver adventures={adventures} />
        </Page>
    );
};

export default FAQ;

export async function getStaticProps() {
    const data = await sanityClient.fetch(faqPageQuery);
    return {
        props: {
            faq: data.faq,
            adventures: data.adventures,
        },
        revalidate: 10,
    };
}

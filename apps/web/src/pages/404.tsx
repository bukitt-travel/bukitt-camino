import Link from 'next/link';
import { RiHome4Line } from 'react-icons/ri';

import { sanityClient } from '@/lib/sanity.server';
import { errorPageQuery } from '@/lib/queries';

import Page from '@/components/shared/Page';
import BookingSlideOver from '@/components/shared/BookingSlideOver';

const ErrorPage = ({ adventures }) => {
    return (
        <Page metaTitle="Error" metaDescription="Page not found.">
            <div className="tw-hero-full-desktop mx-auto flex max-w-3xl flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-y-3">
                    <h1 className="font-serif text-9xl font-medium">404</h1>
                    <h2 className="font-serif text-3xl">Page not found</h2>
                    <p className="prose prose-lg">
                        It seems you&apos;ve gone the wrong way! Click the icon below to head back
                        home.
                    </p>
                </div>

                <div className="mt-6 w-fit">
                    <Link href="/">
                        <a className="tw-transition rounded-full border-2 border-stone-900 bg-stone-50 p-2 text-stone-900 hover:bg-stone-900 hover:text-stone-50 md:block">
                            <RiHome4Line className="h-6 w-6" />
                        </a>
                    </Link>
                </div>
            </div>

            <BookingSlideOver adventures={adventures} />
        </Page>
    );
};

export default ErrorPage;

export async function getStaticProps() {
    const data = await sanityClient.fetch(errorPageQuery);
    return {
        props: {
            adventures: data.adventures,
        },
        revalidate: 10,
    };
}

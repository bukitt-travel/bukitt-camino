import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import { AnimatePresence } from 'framer-motion';

import { useCreateStore, Provider } from '@/lib/store';

import Layout from '@/components/navigation/Layout';

import '@/styles/styles.css';

export default function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    const createStore = useCreateStore(pageProps.initialZustandState);

    const url = `https://bukittcamino.com${router.asPath}`;

    return (
        <Provider createStore={createStore}>
            <DefaultSeo
                titleTemplate="%s - Bukitt Camino"
                openGraph={{
                    type: 'website',
                    locale: 'en_IE',
                    url,
                    description:
                        'Experience the tradition of the Camino de Santiago with all the luxury of our bespoke packages.',
                    site_name: 'Bukitt Camino | bukittcamino.com',
                    images: [],
                }}
                canonical={url}
            />

            <Layout>
                <AnimatePresence
                    initial={false}
                    exitBeforeEnter
                    onExitComplete={() => window.scrollTo(0, 0)}
                >
                    <Component {...pageProps} canonical={url} key={url} />
                </AnimatePresence>
            </Layout>
        </Provider>
    );
}

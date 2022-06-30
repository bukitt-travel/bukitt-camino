import Head from 'next/head';

type PageProps = {
    children: React.ReactNode;
    title?: string;
};
const Page = ({ children, title = 'Bukitt Camino' }: PageProps) => {
    const description =
        'Experience a Camino de Santiago with no hassle and total comfort with the luxury packages of Bukitt Camino.';

    return (
        <main className="overflow-hidden px-3">
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />

                <meta key="og:title" property="og:title" content={title} />
                <meta key="description" property="description" content={description} />
                <meta key="og:description" property="og:description" content={description} />
            </Head>
            {children}
        </main>
    );
};

export default Page;

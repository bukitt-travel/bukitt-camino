import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';

import { pageVariants } from '@/utils/framer';

type PageProps = {
    children: React.ReactNode;
    metaTitle: string;
    metaDescription: string;
};
const Page = ({ children, metaTitle, metaDescription }: PageProps) => {
    return (
        <>
            <NextSeo title={metaTitle} description={metaDescription} />
            <motion.main
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={pageVariants}
                transition={{ type: 'easeInOut' }}
                className="mx-auto min-h-screen max-w-screen-2xl overflow-hidden"
            >
                {children}
            </motion.main>
        </>
    );
};

export default Page;

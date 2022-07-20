import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { urlForImage } from '@/lib/sanity';

const Card = ({ story }) => {
    return (
        <motion.li
            layout
            key={story.id}
            initial="initial"
            exit={{ opacity: 0 }}
            className="odd:mt-0 odd:text-left even:mt-12 even:text-right"
        >
            <Link href={`/${story.slug}`}>
                <a>
                    <Image
                        src={urlForImage(story.image).url()}
                        alt="Camino de Santiago"
                        layout="responsive"
                        width={4}
                        height={3}
                        objectFit="cover"
                        objectPosition="center"
                        className="tw-transition"
                    />
                    <h2 className="mt-4 font-serif text-2xl font-medium uppercase">
                        {story.title}
                    </h2>
                </a>
            </Link>
        </motion.li>
    );
};

export default Card;

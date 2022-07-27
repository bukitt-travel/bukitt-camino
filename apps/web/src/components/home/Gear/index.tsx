import { useState } from 'react';
import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

import Modal from '@/components/home/Gear/Modal';

const Gear = ({ gear }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(null);

    const handleModalToggle = (key) => {
        setIsOpen(!isOpen);
        setSelected(key);
    };

    return (
        <section className="mx-auto grid max-w-5xl grid-cols-2 gap-6 p-6 md:grid-cols-3">
            {gear.map((item, idx) => (
                <button
                    key={idx}
                    className="tw-transition bg-stone-200 hover:bg-stone-100"
                    onClick={() => handleModalToggle(idx)}
                >
                    {item.image && (
                        <Image
                            key={idx}
                            src={urlForImage(item.image).width(1080).height(1080).url()}
                            alt="gear"
                            layout="responsive"
                            width={1}
                            height={1}
                            objectFit="cover"
                            objectPosition="center"
                            className="tw-transition md:grayscale md:hover:grayscale-0"
                        />
                    )}
                </button>
            ))}
            <Modal gear={gear} isOpen={isOpen} setIsOpen={setIsOpen} selected={selected} />
        </section>
    );
};

export default Gear;

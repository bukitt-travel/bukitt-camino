import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';

import { urlForImage } from '@/lib/sanity';

import { PrevButton, NextButton } from '@/components/adventure/Highlights/Buttons';

const Slider = ({ gallery, color }) => {
    console.log(gallery);
    const [viewportRef, embla] = useEmblaCarousel({
        loop: true,
        skipSnaps: false,
    });
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
    const onSelect = useCallback(() => {
        if (!embla) return;
        setPrevBtnEnabled(embla.canScrollPrev());
        setNextBtnEnabled(embla.canScrollNext());
    }, [embla]);

    useEffect(() => {
        if (!embla) return;
        embla.on('select', onSelect);
        onSelect();
    }, [embla, onSelect]);

    return (
        <div className="relative">
            <div className="w-full overflow-hidden" ref={viewportRef}>
                <div className="tw-embla-container -ml-2 flex select-none">
                    {gallery.map((image, index) => (
                        <div className="relative min-w-full" key={index}>
                            <div className="relative overflow-hidden">
                                <Image
                                    src={urlForImage(image.image).url()}
                                    layout="responsive"
                                    height={1}
                                    width={1}
                                    objectFit="cover"
                                    objectPosition="center"
                                    alt="A cool cat."
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} color={color} />
            <NextButton onClick={scrollNext} enabled={nextBtnEnabled} color={color} />
        </div>
    );
};

export default Slider;

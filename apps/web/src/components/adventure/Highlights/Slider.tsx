import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';

import { urlForImage } from '@/lib/sanity';

import { PrevButton, NextButton } from '@/components/adventure/Highlights/Buttons';

const Slider = ({ gallery, color, blurHash }) => {
    console.log(blurHash);
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
        <div className="relative bg-stone-200">
            <div className="w-full overflow-hidden" ref={viewportRef}>
                <div className="tw-embla-container flex select-none">
                    {gallery &&
                        gallery.map((image, idx) => (
                            <div className="relative min-w-full" key={idx}>
                                <Image
                                    src={urlForImage(image).width(1080).height(1080).url()}
                                    layout="responsive"
                                    width={1}
                                    height={1}
                                    objectFit="cover"
                                    objectPosition="center"
                                    alt={image.alt ?? ''}
                                    placeholder="blur"
                                    blurDataURL="dHE:MC?vWTIU0d?co#IU?wo~j{t7?vxvx[ogNZ%MtQWE"
                                />
                            </div>
                        ))}
                </div>
            </div>

            {gallery && gallery.length > 1 && (
                <>
                    <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} color={color} />
                    <NextButton onClick={scrollNext} enabled={nextBtnEnabled} color={color} />
                </>
            )}
        </div>
    );
};

export default Slider;

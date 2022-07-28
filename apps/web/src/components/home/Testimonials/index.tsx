import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { PortableText } from '@portabletext/react';

import { urlForImage } from '@/lib/sanity';

const Testimonials = ({ testimonials }) => {
    // emblaRef will be a reference to our carousel viewport
    const [emblaRef, embla] = useEmblaCarousel({
        align: 'start',
        // aligns the first slide to the start
        // of the viewport else will align it to the middle.

        loop: true,
        // we need the carousel to loop to the
        // first slide once it reaches the last slide.

        skipSnaps: false,
        // Allow the carousel to skip scroll snaps if
        // it's dragged vigorously.

        inViewThreshold: 0.7,

        // percentage of a slide that need's to be visible
        // inorder to be considered in view, 0.7 is 70%.
    });

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    // this function allow's us to scroll to the slide whose
    // id correspond's to the id of the navigation dot when we
    // click on it.

    const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [embla]);

    // set the id of the current slide to active id
    // we need it to correctly highlight it's corresponding
    // navigation dot.

    const onSelect = useCallback(() => {
        if (!embla) return;
        setSelectedIndex(embla.selectedScrollSnap());
    }, [embla, setSelectedIndex]);

    // make sure embla is mounted and return true operation's
    // can be only performed on it if it's successfully mounted.

    useEffect(() => {
        if (!embla) return;
        onSelect();
        setScrollSnaps(embla.scrollSnapList());
        embla.on('select', onSelect);
    }, [embla, setScrollSnaps, onSelect]);

    return (
        <section className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center">
            <h2 className="tw-subheading text-center">Our costumers</h2>

            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="relative flex w-full flex-none flex-wrap px-3 lg:mx-10 lg:flex-nowrap lg:px-0"
                        >
                            <div className="flex flex-col items-center justify-center text-center">
                                <div className="font-serif text-xl md:text-3xl">
                                    <PortableText value={testimonial.quote} />
                                </div>
                                <div className="mt-2 w-16 cursor-pointer overflow-hidden rounded-full bg-stone-200 md:mt-8 lg:mt-4 lg:w-24">
                                    {testimonial.image && (
                                        <Image
                                            src={urlForImage(testimonial.image)
                                                .width(640)
                                                .height(640)
                                                .url()}
                                            layout="responsive"
                                            height={1}
                                            width={1}
                                            objectFit="cover"
                                            objectPosition="center"
                                            alt={testimonial.image.alt}
                                            className="rounded-full"
                                        />
                                    )}
                                </div>
                                <h2 className="mt-1 text-sm font-semibold uppercase text-slate-700 md:mt-2 md:text-xl">
                                    {testimonial.name}
                                </h2>
                                <h2 className="text-sm italic text-slate-500 md:text-base">
                                    {testimonial.location}
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-5 flex items-center justify-center space-x-2">
                {scrollSnaps.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => scrollTo(idx)}
                        className={`h-2 w-2 rounded-full ${
                            idx === selectedIndex ? 'bg-stone-900' : 'bg-stone-300'
                        }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Testimonials;

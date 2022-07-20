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
        <div className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {testimonials.map((testimonial) => (
                        <div
                            className="relative mx-10 flex w-full flex-none flex-wrap lg:flex-nowrap"
                            key={testimonial.id}
                        >
                            <div className="flex flex-col items-center justify-center text-center">
                                <div className="font-serif text-xl md:text-3xl">
                                    <PortableText value={testimonial.quote} />
                                </div>
                                <div className="mt-4 w-24 cursor-pointer overflow-hidden md:mt-8">
                                    <Image
                                        src={urlForImage(testimonial.image).url()}
                                        layout="responsive"
                                        height={1}
                                        width={1}
                                        objectFit="cover"
                                        objectPosition="center"
                                        alt="cover image"
                                        className="rounded-full"
                                    />
                                </div>
                                <h2 className="mt-1 text-base font-medium uppercase md:mt-2 md:text-xl">
                                    {testimonial.name}
                                </h2>
                                <h2 className="text-sm italic md:text-base">
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
                        className={`h-2 w-2 rounded-full ${
                            idx === selectedIndex ? 'bg-stone-500' : 'bg-stone-300'
                        }`}
                        key={idx}
                        onClick={() => scrollTo(idx)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Testimonials;

// // // import { useState, useEffect, useCallback } from 'react';
// // // import Image from 'next/image';
// // // import useEmblaCarousel from 'embla-carousel-react';
// // // import { mediaByIndex } from '../media';
// // // import { PortableText } from '@portabletext/react';

// // // import { urlForImage } from '@/lib/sanity';

// // // import { DotButton, PrevButton, NextButton } from '@/components/home/Testimonials/Buttons';

// // // const Testimonials = ({ slides }) => {
// // //     const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
// // //     const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
// // //     const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
// // //     const [selectedIndex, setSelectedIndex] = useState(0);
// // //     const [scrollSnaps, setScrollSnaps] = useState([]);

// // //     const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
// // //     const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
// // //     const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [embla]);

// // //     const onSelect = useCallback(() => {
// // //         if (!embla) return;
// // //         setSelectedIndex(embla.selectedScrollSnap());
// // //         setPrevBtnEnabled(embla.canScrollPrev());
// // //         setNextBtnEnabled(embla.canScrollNext());
// // //     }, [embla, setSelectedIndex]);

// // //     useEffect(() => {
// // //         if (!embla) return;
// // //         onSelect();
// // //         setScrollSnaps(embla.scrollSnapList());
// // //         embla.on('select', onSelect);
// // //     }, [embla, setScrollSnaps, onSelect]);

// // //     return (
// // //         <>
// // //             <div className="relative mx-auto max-w-2xl bg-stone-200 p-5">
// // //                 <div ref={viewportRef} className="w-full overflow-hidden">
// // //                     <div className="tw-embla-container -ml-2 flex select-none">
// // //                         {slides.map((slide, idx) => (
// // //                             <div className="relative min-w-full pl-2" key={idx}>
// // //                                 <div className="relative h-48 overflow-hidden">
// // //                                     <PortableText value={slide.description} />
// // //                                     {/* <img
// // //                                         className="embla__slide__img"
// // //                                         src={mediaByIndex(index)}
// // //                                         alt="A cool cat."
// // //                                     /> */}
// // //                                 </div>
// // //                             </div>
// // //                         ))}
// // //                     </div>
// // //                 </div>
// // //                 <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
// // //                 <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
// // //             </div>

// // //             <div className="flex list-none justify-center pt-2">
// // //                 {scrollSnaps.map((_, index) => (
// // //                     <DotButton
// // //                         key={index}
// // //                         selected={index === selectedIndex}
// // //                         onClick={() => scrollTo(index)}
// // //                     />
// // //                 ))}
// // //             </div>
// // //         </>
// // //         <section className="mx-auto flex min-h-screen max-w-3xl items-center justify-center text-center">
// // //             {slides.map((slide) => (
// // //                 <div key={slide.id} className="flex flex-col items-center">
// // //                     <div className="font-serif text-4xl">
// // //                         <PortableText value={slide.quote} />
// // //                     </div>
// // //                     <div className="mt-6 w-24 rounded-full bg-stone-200">
// // //                         <Image
// // //                             src={urlForImage(slide.image).url()}
// // //                             alt=""
// // //                             layout="responsive"
// // //                             width={1}
// // //                             height={1}
// // //                             objectFit="cover"
// // //                             objectPosition="center"
// // //                             className="rounded-full"
// // //                         />
// // //                     </div>
// // //                     <div className="mt-2 text-lg font-medium uppercase">{slide.name}</div>
// // //                     <div className="text-base italic text-stone-700">{slide.location}</div>
// // //                 </div>
// // //             ))}
// // //         </section>
// // //     );
// // // };

// // // export default Testimonials;

import CaminoIcon from '@/components/icons/CaminoIcon';

const Hero = () => {
    return (
        <section className="lg:tw-hero-full-desktop tw-hero-full-mobile relative flex flex-col items-center justify-center bg-stone-200 bg-[url('/images/home-hero.png')] bg-cover bg-fixed bg-center">
            <div className="absolute inset-0 bg-stone-900 opacity-25" />

            <div className="relative mx-auto flex max-w-6xl flex-col items-center text-center text-stone-50">
                <CaminoIcon className="tw-transition w-32 fill-yellow-500" />
                <div className="mt-3">
                    <h1 className="flex flex-col font-serif font-light">
                        <span className="text-4xl italic lg:text-7xl">All Caminos Lead to</span>
                        <span className="text-6xl font-bold uppercase lg:text-9xl">Santiago</span>
                    </h1>
                    <h2 className="mt-1 text-xs uppercase tracking-widest lg:mt-2 lg:text-2xl">
                        Luxury Pilgrimages for the modern traveler
                    </h2>
                </div>
            </div>
        </section>
    );
};

export default Hero;

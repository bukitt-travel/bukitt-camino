import CaminoIcon from '@/components/icons/CaminoIcon';

const Hero = () => {
    return (
        <section className="tw-hero-full relative flex flex-col items-center justify-center bg-stone-200 bg-[url('/images/home-hero.png')] bg-cover bg-fixed bg-center">
            <div className="absolute inset-0 bg-stone-900 opacity-25" />

            <div className="relative mx-auto flex max-w-6xl flex-col items-center text-center text-stone-50">
                <h1 className="flex flex-col font-serif font-light">
                    <span className="text-4xl italic lg:text-6xl">All Caminos Lead to</span>
                    <span className="text-6xl font-bold uppercase lg:text-8xl">Santiago</span>
                </h1>
                <h2 className="text-lg font-medium uppercase tracking-widest lg:text-xl">
                    Luxury Pilgrimages for the modern traveler
                </h2>
            </div>

            <a href="#adventures">
                <CaminoIcon className="tw-transition mt-6 w-24 rotate-180 cursor-pointer fill-stone-50 hover:scale-105 hover:fill-stone-900" />
            </a>
        </section>
    );
};

export default Hero;

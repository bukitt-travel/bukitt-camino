import Container from '@/components/about/Camino/Shared/Container';
import SectionHeading from '@/components/about/Camino/Shared/SectionHeading';

const CaminoHistory = () => {
    return (
        <section
            id="camino-history"
            aria-labelledby="table-of-contents-title"
            className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
        >
            <Container>
                <SectionHeading number="1" id="camino-history">
                    History
                </SectionHeading>
                <p className="font-display mt-8 text-4xl font-bold tracking-tight text-slate-900">
                    Camino de Santiago History.
                </p>
                <p className="mt-4 text-lg tracking-tight text-slate-700">
                    There are more than 12 official Camino de Santiago routes, the Camino Francés
                    being the most popular with more than 300,000 pilgrims walking its paths each
                    year.
                </p>
            </Container>
        </section>
    );
};

export default CaminoHistory;

import Container from '@/components/about/Camino/Shared/Container';
import Expandable from '@/components/about/Camino/Shared/Expandable';
import SectionHeading from '@/components/about/Camino/Shared/SectionHeading';

const tableOfContents = {
    'Getting started': {
        'Getting started': 1,
        'Intro to Figma': 15,
        'Setting up your first artboard': 20,
    },
    Fundamentals: {
        'Strokes and fills': 21,
        'End points': 22,
        'Bezier curves': 26,
        'Designing on a grid': 31,
        'Vector shapes': 45,
    },
    'Boolean operations': {
        'Combining shapes': 50,
        'Subtracting shapes': 57,
        'Intersecting shapes': 66,
        Flattening: 78,
    },
    'Optimizing for production': {
        'Preparing for SVG': 82,
        'Configuring your export settings': 88,
        'Minifying and removing metadata': 95,
    },
};

const CaminoRoutes = () => {
    return (
        <section
            id="camino-routes"
            aria-labelledby="table-of-contents-title"
            className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
        >
            <Container>
                <SectionHeading number="2" id="camino-routes-title">
                    Routes
                </SectionHeading>
                <p className="font-display mt-8 text-4xl font-bold tracking-tight text-slate-900">
                    Camino de Santiago Routes.
                </p>
                <p className="mt-4 text-lg tracking-tight text-slate-700">
                    There are more than 12 official Camino de Santiago routes, the Camino Francés
                    being the most popular with more than 300,000 pilgrims walking its paths each
                    year.
                </p>
                <Expandable>
                    {({ isExpanded }) => (
                        <>
                            <ol role="list" className="mt-16 space-y-10 sm:space-y-16">
                                {Object.entries(tableOfContents)
                                    .slice(0, isExpanded ? undefined : 2)
                                    .map(([title, pages]) => (
                                        <li key={title}>
                                            <h3 className="font-display text-3xl font-bold tracking-tight text-slate-900">
                                                {title}
                                            </h3>
                                            <ol
                                                role="list"
                                                className="mt-8 divide-y divide-slate-300/30 rounded-2xl bg-slate-50 py-3 px-6 text-base tracking-tight sm:py-7 sm:px-8"
                                            >
                                                {Object.entries(pages).map(
                                                    ([title, pageNumber]) => (
                                                        <li
                                                            key={title}
                                                            className="flex justify-between py-3"
                                                            aria-label={`${title} on page ${pageNumber}`}
                                                        >
                                                            <span
                                                                className="font-medium text-slate-900"
                                                                aria-hidden="true"
                                                            >
                                                                {title}
                                                            </span>
                                                            <span
                                                                className="font-mono text-slate-400"
                                                                aria-hidden="true"
                                                            >
                                                                {pageNumber}
                                                            </span>
                                                        </li>
                                                    ),
                                                )}
                                            </ol>
                                        </li>
                                    ))}
                            </ol>
                            <Expandable.Button>See more</Expandable.Button>
                        </>
                    )}
                </Expandable>
            </Container>
        </section>
    );
};

export default CaminoRoutes;

import ServiceCategory from '@/components/adventure/Services/ServiceCategory';

const Services = ({ includedServices, notIncludedServices, addOnServices, color }) => {
    return (
        <section
            id="services"
            aria-labelledby="itinerary-title"
            className="mx-auto max-w-3xl py-24 px-3 lg:py-32 lg:px-0"
        >
            <h2 id="services-title" className="tw-subheading text-center" style={{ color: color }}>
                Trip Details
            </h2>
            {includedServices?.length ? (
                <ServiceCategory label="Included" services={includedServices} />
            ) : (
                <></>
            )}

            {notIncludedServices?.length ? (
                <ServiceCategory label="Not Included" services={notIncludedServices} />
            ) : (
                <></>
            )}

            {addOnServices?.length ? (
                <ServiceCategory label="Add-Ons" services={addOnServices} />
            ) : (
                <></>
            )}
        </section>
    );
};

export default Services;

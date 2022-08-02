import clsx from 'clsx';

const SectionHeading = ({ number, children, ...props }) => {
    return (
        <h2
            className={clsx(
                'inline-flex items-center rounded-full py-1 px-4 text-yellow-600 ring-1 ring-inset ring-yellow-600',
            )}
            {...props}
        >
            <span className="font-mono text-sm" aria-hidden="true">
                {number.padStart(2, '0')}
            </span>
            <span className="ml-3 h-3.5 w-px bg-yellow-600/20" />
            <span className="ml-3 text-base font-medium tracking-tight">{children}</span>
        </h2>
    );
};

export default SectionHeading;

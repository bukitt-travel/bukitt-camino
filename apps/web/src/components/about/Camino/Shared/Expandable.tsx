import { createContext, useContext, useState } from 'react';

function ArrowDownIcon(props) {
    return (
        <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
            <path
                d="m17 14-5 5-5-5M12 18.5V5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

const ExpandableContext = createContext({
    isExpanded: false,

    setIsExpanded: () => {
        // @ts-ignore
    },
});

const Expandable = ({ children }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <ExpandableContext.Provider
            value={{
                isExpanded,
                // @ts-ignore
                expand: () => {
                    setIsExpanded(true);
                },
            }}
        >
            {children({ isExpanded })}
        </ExpandableContext.Provider>
    );
};

export default Expandable;

Expandable.Button = function Button({ children }) {
    // @ts-ignore

    const { isExpanded, expand } = useContext(ExpandableContext);

    return (
        !isExpanded && (
            <div className="mt-10 flex justify-center">
                <button
                    type="button"
                    className="flex items-center text-base font-medium tracking-tight text-slate-900 hover:text-slate-700"
                    onClick={expand}
                >
                    {children}
                    <ArrowDownIcon className="ml-2 h-6 w-6" />
                </button>
            </div>
        )
    );
};

import { RiSendPlaneLine, RiLoaderLine } from 'react-icons/ri';

const BtnInquiryForm = ({ children, isSubmitting, disabled }) => {
    return (
        <div>
            <button
                type="submit"
                disabled={disabled}
                className="tw-transition tw-transition flex w-fit items-center gap-x-3 rounded-full border-2 border-stone-900 px-3 py-1 text-sm font-semibold uppercase hover:bg-stone-900 hover:text-stone-100 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-stone-900 md:text-lg"
            >
                {isSubmitting ? (
                    <RiLoaderLine className="animate-spin" />
                ) : (
                    <RiSendPlaneLine className="" />
                )}
                <span>{children}</span>
            </button>
        </div>
    );
};

export default BtnInquiryForm;

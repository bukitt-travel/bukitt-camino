const FormError = ({ children }) => {
    return (
        <span role="alert" className="text-xs leading-3 text-red-500">
            ❗{children}
        </span>
    );
};

export default FormError;

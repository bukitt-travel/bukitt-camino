const FormSuccess = ({ children }) => {
    return (
        <span role="alert" className="text-xs leading-3 text-green-500">
            ✅ {children}
        </span>
    );
};

export default FormSuccess;

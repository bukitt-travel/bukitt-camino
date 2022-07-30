const InputLabel = ({ children, htmlFor }) => {
    return (
        <label
            htmlFor={htmlFor}
            className="absolute left-0 -top-3.5 text-xs uppercase transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:font-medium peer-placeholder-shown:text-stone-900 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:font-light peer-focus:text-stone-500"
        >
            {children}
        </label>
    );
};

export default InputLabel;

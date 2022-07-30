const InputBox = ({ id, name, type, placeholder, autoComplete, register, registerValue }) => {
    return (
        <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            autoComplete={autoComplete}
            {...register(`${registerValue}`)}
            className="peer h-10 w-full border-0 border-b border-dashed border-stone-900 bg-transparent text-sm italic text-stone-700 placeholder-transparent focus:border-stone-500 focus:outline-none focus:ring-0"
        />
    );
};

export default InputBox;

function InputField({
    label,
    name,
    value,
    placeholder,
    onChange,
}) {
    return (
        <div className="flex flex-col gap-2">

            <label className="text-sm font-medium text-slate-300">
                {label}
            </label>

            <input
                type="number"
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="
                    w-full
                    rounded-xl
                    border border-white/10
                    bg-white/5
                    px-4
                    py-3
                    text-white
                    placeholder:text-slate-500
                    outline-none
                    transition
                    duration-300
                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-500/30
                "
            />

        </div>
    );
}

export default InputField;
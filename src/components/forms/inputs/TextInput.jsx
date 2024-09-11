import { forwardRef } from "react";

const TextInput = forwardRef(
    ({ type, label, id, placeholder, error, ...rest}, ref) => {
        return (
            <div className="flex flex-col gap-2">
                <label htmlFor={id} className="font-syne font-extrabold text-whiteText">
                    {label}
                </label>
                <input
                    type={type}
                    name={id}
                    id={id}
                    placeholder={placeholder}
                    ref={ref}
                    {...rest}
                    className="text-[0.813rem] text-secondary p-2 rounded-md border border-primary placeholder-secondary focus:border-secondary bg-whiteText"
                />
                {error && (
                <p className="text-accent">{error}</p>
            )}
            </div>
        );
    }
);

TextInput.displayName = 'TextInput';
export default TextInput;

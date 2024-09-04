import { PropTypes } from "prop-types";

const TextInput = ({ type, label, id, placeholder, onChange }) => {
    return (
        <div className="flex flex-col gap-2">
            <label 
            htmlFor={id} 
            className="font-syne font-extrabold">
                {label}</label>
            <input 
            type={type} 
            name={id} 
            id={id} 
            placeholder={placeholder} 
            onChange={onChange} 
            className="text-[0.813rem] text-secondary p-2 mb-9 rounded-sm border-primary border-2 placeholder-secondary focus:border-secondary"/>
        </div>
    );
};

TextInput.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.function
}
export default TextInput;

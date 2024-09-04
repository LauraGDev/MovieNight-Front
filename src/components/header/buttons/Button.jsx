import { PropTypes } from "prop-types";

const Button = ({ text, type, color, onClick }) => {
    const colors = {
        primary: "bg-primary hover:bg-[#5f449d]",
        secondary: "bg-secondary hover:bg-[#454072]",
        accent: "bg-accent hover:bg[#e63d14]"
    }
  return (
    <button 
    className={`w-full font-syne text-base text-white font-extrabold p-2 rounded-sm ${colors[color]}`}
    type={type}
    onClick={onClick}>{text}</button>
  )
}

Button.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.function
}
export default Button

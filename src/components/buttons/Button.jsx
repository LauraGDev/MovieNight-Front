

const Button = ({ text, type, color, onClick, styles }) => {
    const colors = {
        primary: "bg-primary hover:bg-[#5f449d]",
        secondary: "bg-secondary hover:bg-[#454072]",
        accent: "bg-accent hover:bg-[#e63d14]"
    }
  return (
    <button 
    className={`w-full font-syne text-base text-white font-extrabold p-2 rounded-sm ${styles} ${colors[color]}`}
    type={type}
    onClick={onClick}>{text}</button>
  )
}

export default Button

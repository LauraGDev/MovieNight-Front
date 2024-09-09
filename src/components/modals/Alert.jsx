import Button from "../buttons/Button"

const Alert = ( {message, onAccept, onCancel, showCancel}) => {
  return (
    <div className="absolute h-screen inset-0 bg-[rgba(23,20,44,0.85)] z-1000 flex items-center justify-center mx-3">
        <div className="w-full bg-secondary relative inline m-auto rounded-md py-10 px-6 text-center">
            <p>{ message }</p>
            <div className="flex gap-4 mt-8">
                <Button text="Aceptar" color="primary" onClick={onAccept}/>
                {showCancel &&
                <Button text="Cancelar" color="accent" onClick={onCancel}/>}
            </div>
        </div>
    </div>
  )
}

export default Alert

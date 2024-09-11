import Button from "../buttons/Button"

const Alert = ( {message, onAccept, onCancel, showCancel}) => {
  return (
    <div className="fixed inset-0 bg-[#17142cd9] z-1000 flex items-center justify-center">
        <div className="w-full max-w-md bg-secondary relative inline m-auto rounded-md py-10 px-6 text-center mx-3">
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

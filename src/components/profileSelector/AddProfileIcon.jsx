

const AddProfileIcon = ({onClick} ) => {

  return (
    <figure onClick={onClick} className="cursor-pointer">
        <img src="./assets/add_user.svg" alt="Añadir perfil" />
        <p className="pt-3">Nuevo perfil</p>
    </figure>
  )
}

export default AddProfileIcon

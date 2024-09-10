

const AddProfileIcon = () => {
    const addProfile = () => {
        alert("Add profile")
    }

  return (
    <figure onClick={addProfile} className="cursor-pointer">
        <img src="./assets/add_user.svg" alt="Añadir perfil" />
        <p className="pt-3">Nuevo perfil</p>
    </figure>
  )
}

export default AddProfileIcon

const ProfileIcon = ({ name, id, photo, onClick }) => {

    return (
        <figure id={id} onClick={() => onClick(id)} className="cursor-pointer">
            <img src={photo} alt={`Foto de ${name}`} className="w-full aspect-square rounded-full object-cover"/>
            <p className="pt-3">{name}</p>
        </figure>
    );
};

export default ProfileIcon;

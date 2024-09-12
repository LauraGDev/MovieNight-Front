const ProfileIcon = ({ name, id, photo, onClick, horizontal = false }) => {

    return (
        <figure id={id} onClick={() => onClick(id)} className={`cursor-pointer ${horizontal ? 'flex items-center gap-2 ': ''}`}>
            <img src={photo} alt={`Foto de ${name}`} className={`aspect-square rounded-full object-cover ${horizontal ? 'w-10': 'w-full'}`}/>
            <p className={horizontal ? 'pt-0': 'pt-3'}>{name}</p>
        </figure>
    );
};

export default ProfileIcon;

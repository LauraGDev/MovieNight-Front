import { useState } from "react";


const useProfile = () => {
    const [profile, setProfile] = useState(null);
    return { profile, setProfile};
};

export default useProfile;
import EditProfileForm from "../components/ProfileComponents/EditProfileForm";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function EditProfile(){


    const { idProfile } = useParams();
    const [userUpdate, setUserUpdate] = useState()

    useEffect(() => {
        const getUser = (id) => {
            const URL_GETUSER = 'http://localhost:3001/users/'+idProfile
            axios.get(URL_GETUSER)
                .then(res => {
                    const result = res.data[0];
                    setUserUpdate(result);
                    })
                .catch(err => console.log(err))
        }

        getUser(idProfile)
    },[idProfile])

    if (!userUpdate) {
        return null
    }
    return(
        <EditProfileForm userId={idProfile} userEdit={userUpdate}></EditProfileForm>
    )

}
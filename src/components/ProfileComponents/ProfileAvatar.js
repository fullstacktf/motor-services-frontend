import { Avatar } from "@mui/material";


export default function ProfileAvatar({imgUrl}){

    return(
        <Avatar 
            alt="Profile Avatar"
            src={imgUrl}
            sx={{ width: 80, height: 80 }}
        />
    )
}
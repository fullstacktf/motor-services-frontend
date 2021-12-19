import { Avatar } from "@mui/material";


export default function ProfileAvatar({imgUrl, width, height}){

    return(
        <Avatar 
            alt="Profile Avatar"
            src={imgUrl}
            sx={{ width: width, height: height }}
        />
    )
}
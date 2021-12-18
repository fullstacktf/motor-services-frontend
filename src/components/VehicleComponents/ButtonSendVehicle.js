import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { useEffect } from "react";

export default function ButtonSend({text,icon}){
    
    let iconButton = <AddIcon/> 
    icon == true ? iconButton =  <EditIcon/> : <AddIcon/> 

    return (
        <Button style={{backgroundColor:'#03045E'}}  type="submit"  variant="contained" startIcon={iconButton}>{text}</Button>
    )
}
import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function ButtonSend({text,icon,link}){
    
    let iconButton = <AddIcon/> 
    icon == true ? iconButton =  <EditIcon/> : <AddIcon/> 
    link == null ? link = "" : link = link
    return (
        <Button style={{backgroundColor:'#03045E'}} component={Link} to={link}  type="submit"  variant="contained" startIcon={iconButton}>{text}</Button>
    )
}
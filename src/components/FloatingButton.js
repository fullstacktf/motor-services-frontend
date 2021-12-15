import { Fab } from "@mui/material";
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';

export default function FloatingButton(){

    const style = {
        bottom: '16px',
        right: '16px',
        color: '#FFF',
        backgroundColor:'#03045E'
    }
  
    return(
        <Fab style={style} component={Link} to='/vehicles/add' size="large">
            <AddIcon/>
        </Fab>    
    )
}
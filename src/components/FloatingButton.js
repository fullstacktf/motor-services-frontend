import { Fab } from "@mui/material";
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';

export default function FloatingButton(){

    const fabStyle = {
        // position: 'fixed',
        bottom: '16px',
        right: '16px',
        color: '#fff',
        backgroundColor:'#03045E'
    }

    return(
        // <Fab sx={fabStyle} component={Link} to='/vehicles/add'>
        //     <AddIcon/>
        // </Fab>
        <Fab sx={fabStyle} component={Link} to='/vehicles/add'>
            <AddIcon/>
        </Fab>
    )
}
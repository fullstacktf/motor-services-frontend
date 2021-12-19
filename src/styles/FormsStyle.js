import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles(
    {
        root:{
            height:'100vh',
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            backgroundColor: '#e9ecef',
            borderRadius: '8px',
            padding:'1rem'
        },
        textfield:{
            marginBottom: '15px',
            backgroundColor:'red'
        }
    }
)
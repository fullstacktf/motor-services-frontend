import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme)=>({

    root:{
        color:'#fff',
        backgroundColor: theme.palette.primary.dark,
    },
    [theme.breakpoints.down('xs')]:{
        root:{
            display: 'none',
        }
    },
    [theme.breakpoints.down('sm')]:{
        root:{
            display: 'none',
        }
    }


}))
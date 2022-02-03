import React from 'react'
import { makeStyles,Box, Typography } from '@material-ui/core'
import DetailView from '../posts/DetailView';
const useStyles=makeStyles({
    images:{
        background:`url(${`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS03t9Ar_VsNnp949Xr3DFXrlV7bXBKIm_Rvw&usqp=CAU%27`}) center/55% repeat-x #000`,
        width:'100%',
        height:'50vh',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        '& :first-child':{
            fontSize:67,
            color:'#ffffff',
            lineHeight:1.5
        },
        '& :last-child':{
            fontSize:20,
            background:'#ffffff'
        }


    }
})
export default function Banner() {
    const classes=useStyles();
    return (
        <Box className={classes.images}>
            <Typography>Coronavirus disease</Typography>
            <Typography>Lets Fight</Typography>
        </Box>
    )
}

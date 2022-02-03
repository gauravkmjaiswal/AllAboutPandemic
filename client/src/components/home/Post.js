import React from 'react'
import { Box, Typography,makeStyles } from '@material-ui/core'

const useStyles=makeStyles({
    container:{
        margin:20,
        height:350,
        border:'1px solid #d3cede',
        borderRadius:10,
        display:'flex',
        alignItems:'center',
        flexDirection:'column',
        '& >*':{
            padding:' 0 5px 5px 5px '
        }
        
    },

    image:{
       
       height:200,
       width:'100%',
       objectFit:'cover',
       borderRadius:'10px 10px 0 0'
        
        
    },
    text:{
        color:'#878787',
        fontSize:12,
    },
    heading:{
        fontSize:18,
        fontWeight:600,
        wordBreak:'break-word',
        textAlign:'center'
    },
    detail:{
        fontSize:14,
        wordBreak:'break-word',

    }
})
export default function Post({post}) {
    const classes=useStyles()
    const url=post.picture || 'https://picsum.photos/1000/800'
    const addElipsis=(str,limit)=>{
        return str.length>limit ? str.substring(0,limit) +'...' : str;
    }
    return(
        <>
        <Box className={classes.container}>
            <img className={classes.image} src={url} ></img>
           <Typography className={classes.text}>{post.categories}</Typography>
            <Typography className={classes.heading}>{addElipsis(post.title,30)}</Typography>
            <Typography className={classes.text}>{post.username}</Typography>
            <Typography className={classes.detail}>{addElipsis(post.description,100)}</Typography>
            </Box>
        </>
    )
}
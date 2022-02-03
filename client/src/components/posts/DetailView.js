import { Box ,makeStyles, Typography} from '@material-ui/core'
import React ,{useEffect,useState}from 'react'
import {Edit,Delete} from '@material-ui/icons';
import {Link,useHistory} from 'react-router-dom'
import { getPost,deletePost } from '../../service/api';
import Comments from '../commests/Comments';
const useStyles=makeStyles((theme)=>({
    container:{
        padding:'0 100px',
        [theme.breakpoints.down('md')]:{
            padding:0
        }
    },

    image:{
        width:'100%',
        height:'50vh',
        objectFit:'cover'

    },
    icons:{
        float:'right'
    },
    icon:{
        margin:5,
        padding:5,
        border:'1px solid #878787',
        borderRadius:10
    },
    heading:{
        fontSize:38,
        fontWeight:600,
        textAlign:'center',
        margin:"50px 0 10px 0"
    },
    subheading:{
        color:'#878787',
        display:'flex',
        margin:'20px 0',
        [theme.breakpoints.down('xs')]:{
            display:'block'
        }

    },
    link:{
        textDecoration:'none',
        color:'inherit'
    }
}))
export default function DetailView({match}) {
    const classes=useStyles()


    const [post, setPost] = useState({})
    const history=useHistory()

    useEffect(()=>{
        const fetchData=async()=>{
            let data = await getPost(match.params.id)
            JSON.stringify(data)
            console.log("hello sir ji hum tho h")
             setPost(data)
        }
        fetchData()
    },[])
    
    let url='https://picsum.photos/1200/900'
    const deleteBlog=async()=>{
        await deletePost(post._id);
        history.push('/')
    }

    return (
        <>
        <Box className={classes.container}> 
            <img className={classes.image} src={post.picture || url} alt='image'/>
            <Box className={classes.icons}>
                <Link to={`/update/${post._id}`}><Edit className={classes.icon} color="primary"/></Link>
                <Delete onClick={()=>deleteBlog()} className={classes.icon} color="error"/>
            </Box>
            <Typography className={classes.heading}>{post.title}</Typography>
            <Box className={classes.subheading}>
                <Link className={classes.link} to={`/?username=${post.username}`}>
                    <Typography>Author:<span style={{fontWeight:600}}>{post.username}</span></Typography>
                </Link>
                <Typography style={{marginLeft:'auto'}}>{new Date(post.createdDate).toDateString()}</Typography>
            </Box>
            <Typography>{post.description}</Typography>
            <Comments post={post}/>
        </Box>
        </>
    )
}

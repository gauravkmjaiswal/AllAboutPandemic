import { useState,useEffect,useContext } from 'react';
import {Box,Button, TextareaAutosize,makeStyles} from '@material-ui/core'
import { getComments, newComment } from '../../service/api';
import { LoginContext } from '../ContextProvider';
import Comment from './Comment';
const useStyles=makeStyles({
    component:{
        marginTop:100,
        display:'flex'
    },
    image:{
        width:50,
        height:50,
        borderRadius:"50%"
    },
    textarea:{
        width:"100%",
        margin:"0 20px"
    },
    button:{
        height:40
    }
})

const initialValue={
    name:'',
    postId:'',
    date:new Date(),
    comments:''
}

export default function Comments({post}) {
    const classes=useStyles();
   //console.log(post)

    let url='https://picsum.photos/40/40'

    const [comment, setComment] = useState(initialValue)
    const [comments,setComments]=useState([])
    const { account, setAccount } = useContext(LoginContext);
    const [toggle,setToggle]=useState(false)
    useEffect(()=>{
        const getData=async()=>{
             let response =   await getComments(post._id)
             setComments(response)
        }
        getData()
    },[post,toggle])
    
    
    const handleChange=(e)=>{
        setComment({
            ...comment,
            name: account,
            postId:post._id,
            comments:e.target.value

        })
    }
    const postcomment=async()=>{
        console.log(comment)
        await newComment(comment)
        setToggle(prev=>!prev)
    }
    return (
        <Box>
            <Box className={classes.component}>
                <img src={url} className={classes.image} alt="img here" />
                <TextareaAutosize 
                    className={classes.textarea}
                    minRows={3}
                    onChange={(e)=>handleChange(e)}

                />
                <Button 
                    variant="contained"
                    color="primary"
                    size="medium"
                    className={classes.button}
                    onClick={()=> postcomment()}
                >Post</Button>
            </Box>
           
            {
               

                comments && comments.map(comment=>(
                   
                    <Comment comment={comment} setToggle={setToggle}/>
    ))
            }
        </Box>
    )
}

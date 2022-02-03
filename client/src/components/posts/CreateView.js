import React,{useState,useEffect} from 'react'
import { Box ,makeStyles,FormControl, InputBase,Button ,TextareaAutosize } from '@material-ui/core'
import {AddCircle} from '@material-ui/icons';
import {createPost,uploadFile} from '../../service/api'
import {useHistory} from 'react-router-dom'
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
    form:{
        display:'flex',
        flexDirection:'row',
        marginTop:10
    },
    textField:{
        flex:1,
        margin:'0 30px',
        fontSize:25
    },
    textarea:{
        width:"100%",
        marginTop:50,
        border:'none',
        fontSize:18,
        '&:focus-visible':{
            outline:'none'
        }

    }
}))
const initialValues={
    title:'',
    description:'',
    picture:'',
    username:'gaurav',
    categories:'All',
    createdDate:new Date()
}

export default function CreateView() {
    const classes = useStyles();
    const history=useHistory();

    const [post, setPost] = useState(initialValues)
    let   url=post.picture? post.picture : "http://picsum.photos/1000/800"
    const [file, setFile] = useState('')
    const [image, setImage] = useState('')
    const handleChange=(e)=>{
        setPost({
            ...post,
            [e.target.name]:e.target.value
        })
    }
    const savePost=async()=>{
        
        await createPost(post)
        history.push('/')
    }
    useEffect(()=>{
        const getImage=async()=>{
            if(file)
            {
                const data= new FormData()
                data.append("name",file.name)
                data.append("file",file)
                const image=await uploadFile(data)
                post.picture=image.data
                setImage(image.data)

            }
        }
        getImage()
    },[file])
    return (
        <>
            <Box className={classes.container}>
                <img className={classes.image} src={url} alt="banner"></img>
                <FormControl className={classes.form}>
                <label htmlFor="fileInput">
                    <AddCircle fontSize="large" color="action"/>
                </label>
                <input
                    type="file"
                    id="fileInput"
                    style={{display:'none'}}
                    onChange={(e)=>setFile(e.target.files[0])}
                />
                <InputBase
                    onChange={(e)=>{handleChange(e)}} 
                    name="title"
                    placeholder="Title" 
                    className={classes.textField}
                />
                <Button onClick={()=>savePost()}variant="contained" color="primary">Publish</Button>
                </FormControl>
                <TextareaAutosize
                minRows={5} 
                onChange={(e)=>{handleChange(e)}} 
                name="description"
                placeholder="enter text" 
                className={classes.textarea}
            />
            </Box>

            
        </>
    )
}

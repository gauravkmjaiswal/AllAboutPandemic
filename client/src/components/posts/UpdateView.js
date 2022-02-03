import React,{useState,useEffect} from 'react'
import { Box ,makeStyles,FormControl, InputBase,Button ,TextareaAutosize } from '@material-ui/core'
import {AddCircle} from '@material-ui/icons';
import { getPost,updatePost,uploadFile } from '../../service/api';
import { useHistory } from 'react-router-dom';
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


export default function UpdateView({match}) {
    const classes = useStyles();
    
    const [post, setPost] = useState({initialValues})
    const [file, setFile] = useState('')
    const [image, setImage] = useState('')

    const url=post.picture?post.picture:"http://picsum.photos/1000/800"

    const history=useHistory()
    useEffect(()=>{
        const fetchData=async()=>{
            let data=await getPost(match.params.id)
            console.log(data)
            setPost(data)
        }
        fetchData();

    },[])
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

 

    const handleChange=(e)=>{
        setPost({
            ...post,
            [e.target.name]:e.target.value
        })
    }
    const updateBlog=async()=>{
        await updatePost(match.params.id,post)
        history.push(`/details/${match.params.id}`)
    }

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
                <InputBase value={post.title} onChange={(e)=>{handleChange(e)}} name="title" placeholder="this is placeholder" className={classes.textField}/>
                <Button onClick={()=>{updateBlog()}}variant="contained" color="primary">Update</Button>
            </FormControl>
            <TextareaAutosize
            minRows={5} 
            placeholder="enter text" 
            onChange={(e)=>{handleChange(e)}} 
            value={post.description}
            name="description"
            className={classes.textarea}
            />
            </Box>

            
        </>
    )
}

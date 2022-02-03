import React,{useState,useEffect} from 'react'
import Post from './Post'
import { Grid } from '@material-ui/core'
import { Link,useLocation } from 'react-router-dom'
import { getAllPosts } from '../../service/api'

export default function Posts() {
    let [posts,setPost]= useState([])
    let {search}=useLocation()
    //let  posts=[1,2,3,4,5,6,7,8,9,10]
    useEffect(()=>{
        const fetchData=async ()=>{
           const data=await  getAllPosts(search)
           console.log(data)
           setPost(data)
        }
        fetchData()
    },[search])
    return (
        <>
        {
            posts.map( (post)=>{
                return(

                <Grid  item lg={3} md={4} sm={6} xs={12}>
                    <Link to={`/details/${post._id}`} style={{textDecoration:'none',color:'inherit'}}>
                    <Post key={post._id} post={post}/>
                    </Link>
                </Grid>
                )
            })
        }

        </>
    )
}

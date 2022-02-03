import React from 'react'
import Banner from './Banner'
import Catagories from './Catagories'
import Posts from './Posts'
import {Box, Grid}from '@material-ui/core' 

export default function Home() {
    return (
        <>
            <Banner/>
            <Grid container>
                <Grid item lg={2} xs={12} sm={3} md={2}>
                    <Catagories/>
                </Grid>
                <Grid container item lg={10} xs={12} sm={9} md={10}>
                    <Posts/>
                </Grid>
            </Grid>

        </>
    )
}

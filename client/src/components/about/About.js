
import { Box, makeStyles, Typography, Link } from '@material-ui/core';

const useStyles = makeStyles({
    banner: {
        background:`url(${`https://picsum.photos/1000/800`}) center/55% repeat-x #000`,
        width: '100%',
        height: '50vh',
        backgroundPosition: 'left 0px bottom 0px',
        backgroundSize: 'cover'
    },
    wrapper: {
        padding: 20,
        '& > *': {
            marginTop: 50
        }
    },
    text: {
        color: '#878787'
    }
})

const About = () => {
    const classes = useStyles();
    return (
        <Box>
            <Box className={classes.banner}></Box>
            <Box className={classes.wrapper}>
                <Typography variant="h3">AllAboutPendemic</Typography>
                <Typography variant="h5" className={classes.text}>
                    This site helps people to share thier story during pendemic.<br />
                    People tell about thier situation during pendmic and how they fight to it.
                
                </Typography>
               
            </Box>
        </Box>
    )
}

export default About;
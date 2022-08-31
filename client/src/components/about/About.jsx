
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background: url(https://picsum.photos/1000/800) center/55% repeat-x #000;
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;




const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
            <Typography variant="h3">AllAboutPendemic</Typography>
                <Typography variant="h5">
                     This site helps people to share thier story during pendemic.<br />
                    People tell about thier situation during pendmic and how they fight to it.
                
                </Typography>
            </Wrapper>
        </Box>
    )
}

export default About;

import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
background: url(https://picsum.photos/900/700) center/55% repeat-x #000;
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


const Contact = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Getting in touch is easy!</Typography>    
                <Text variant="h5">
                    Reach out to me on
                    Reach out to me on
                    <Link href="https://www.instagram.com/guest/" color="inherit" target="_blank">
                        <Instagram/>
                    </Link>
                    or send me an Email 
                    <Link href="mailto:guest@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email />
                    </Link>.
                </Text>
            </Wrapper>
        </Box>
    );
}

export default Contact;
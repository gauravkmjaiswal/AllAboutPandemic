
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS03t9Ar_VsNnp949Xr3DFXrlV7bXBKIm_Rvw&usqp=CAU%27) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #b6baba;
    border-radius:5px;
    padding:3px;
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>Pandemic</Heading>
            <SubHeading>Lets fight together</SubHeading>
        </Image>
    )
}

export default Banner;
import React from 'react';
import { Box,Stack, Typography, Button } from '@mui/material';
import banner from "../assets/banner.jpg";

const HeroBanner = () => {
  return (
    <Box sx={{
        // Responsiveness
        mt: { ig: "212px", xs: "70px"},
        m1: { sm: "50px"}
    }} position="relative" p="20px">
        <Typography color="#FF2625"
        fontWeight="600" fontSize="26px">
            Fitness Club
        </Typography>
        <Typography fontWeight={700}
        // Responsiveness
        sx={{ fontSze: {ig: "44px", xs: "40px" }}}
        mb="23px" mt="30px">
            Sweat, Smile <br/> and Repeat
        </Typography>
        <Typography fontSize="22px"
        lineHeight="35px" mb={4}>
            Check out most effective Exercises 
        </Typography>
        <Button variant="contained" color="error" href='#exercises'
        sx={{ backgroundColor:"#ff2625", padding:"10px"}}>Explore Exercises</Button>
        <Typography 
        fontWeight={600}
        color="#ff2625"
        sx={{opacity:0.1,
        display: {ig: "block", xs:"none"}
        }}
        fontSize="200px">
            Exercises
        </Typography>
        <img src={banner} alt="Banner"
        className='hero-banner-img'/>

    </Box>
  )
}

export default HeroBanner;
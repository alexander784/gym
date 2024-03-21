import React from 'react';
import { Box,Stack, Typography, Button } from '@mui/material';
import banner from "../assets/banner.png";

const HeroBanner = () => {
  return (
    <Box sx={{
        // Responsiveness
        mt: { ig: "212px", xs: "70px"},
        m1: { sm: "50px"}
    }} position="relative" p="20px">
        <Typography color="#FF2625"
        fontweight="600" fontsize="26px">
            Fitness Club
        </Typography>
        <Typography fontWeight={700}
        // Responsiveness
        sx={{ fontSize: {ig: "44px", xs: "40px" }}}>
            Sweat, Smile <br/> and Repeat
        </Typography>
        <Typography fontSize="22px"
        lineHeight="35px" mb={3}>
            Check out most effective Exercises 
        </Typography>
        <Button variant="contained" color="error" href='#exercises'>Explore Exercises</Button>
        <img src={banner} alt="Banner"
        className='hero-banner-img'/>

    </Box>
  )
}

export default HeroBanner;
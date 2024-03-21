import React from 'react';
import { Box,Stack, Typography } from '@mui/material';


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

    </Box>
  )
}

export default HeroBanner;
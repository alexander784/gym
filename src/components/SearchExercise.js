import React from 'react';
import { Box, Stack, TextField, Typography } from '@mui/material';

const SearchExercise = () => {
  return (
    // Wrap the section with a Stack component
    <Stack alignItems="center" mt="37px"
    justifyContent="center" p="20px">
      <Typography fontWeight={700}

      // Responsiveness
      sx={{fontSize:{ lg: "44px", xs:"30px"}}}
      mb="50px" textAlign="center">
        Awesome Exercise you <br />
        Should Know

      </Typography>
      <Box position="relative" mb ="72px">
        <TextField 
        height="76px"
        sx={{
          input:{ fontWeight:"700",
          border:"none",
          borderRadius:"4px"
    },
    width: { lg: "1170px",
     xs: "350px"},
    backgroundColor: "#fff",
    borderRadius: "40px"
        }}
        value=""
        onchange={ () => {}}
        placeholder='Search Exercises'
        type="text"/>

      </Box>

    </Stack>
  )
}

export default SearchExercise;
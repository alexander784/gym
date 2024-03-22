import React from 'react';
import { Box, Stack, TextField, Typography } from '@mui/material';

const SearchExercise = () => {
  return (
    // Wrap the section with a Stack component
    <Stack alignItems="center" mt="37px"
    justifyContent="center" p="20px">
      <Typography fontWeight={700}

      // Responsiveness
      sx={{fontSize:{ ig: "44px", xs:"30px"}}}
      mb="50px" textAlign="center">
        Awesome Exercise you <br />
        Should Know

      </Typography>
      <Box position="relative" mb ="720px">
        <TextField 
        height="76px"
        value=""
        onchange={ () => {}}
        placeholder='Search Exercises'
        type="text"/>

      </Box>

    </Stack>
  )
}

export default SearchExercise;
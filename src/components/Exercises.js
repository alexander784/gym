import React from 'react';
import { Pagination, Typography } from '@mui/material';
import {Stack, Box } from '@mui/material';

const Exercises = ({exercises,setExercises, bodyPart }) => 
{console.log(exercises);
  return (
    <Box id="exercises"
    sx={{mt: { lg: "110px" }}}
    mt="50px"
    p="20px"
    >
      <Typography variant='h4' mb="46px">
        Showing Results

      </Typography>
      <Stack direction="row" sx={{ gap: { lg: "110px", xs: "50px"}}}
      flexWrap="wrap" justifyContent="center">
        {/* Map over exercises */}
        {exercises.map((exercise, index) => {
          <p>{exercise.name}</p>
        })}

      </Stack>

    </Box>
  )
}

export default Exercises;
 
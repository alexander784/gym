import React from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { fetchData, exerciseOptions } from '../utils/FetchData';
import { wait } from '@testing-library/user-event/dist/utils';

const SearchExercise = () => {

  const [ search, setSearch] = useState("");

  const handleSearch = async () => {
    if(search) {
      const exerciseData = await fetchData 
      ("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);
console.log(exerciseData)
    }
  }



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
        value={search}
        onChange={ (e) => setSearch(e.target.value.toLowerCase())}
        placeholder="Search Exercises"
        type="text"
        />
        
        <Button className='search-btn'
        sx= {{
          bgcolor:"#ff2625",
          color:"#fff",
          textTransform:"none",
          width: {lg: "175px", xs: "80px"},
          fontsize: {lg: "20px", xs: "14px"},
          height:"56px",
          position:"absolute",
          right:"0"
        }} 
        onClick={handleSearch}>
          Search

        </Button>

      </Box>

    </Stack>
  )
      }

export default SearchExercise;
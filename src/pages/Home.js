import React from 'react';
import { Box } from '@mui/material';
import Exercises from "../components/Exercises";
import HeroBanner from '../components/HeroBanner';
import SearchExercise from '../components/SearchExercise';
import { useState } from 'react';


const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setbodyPart] = useState("all");
  return (
    <Box>
        
        <HeroBanner />
        <SearchExercise setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setbodyPart}
         />
        <Exercises setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setbodyPart} />
    </Box>
  )
}

export default Home
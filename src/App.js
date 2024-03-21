import React from 'react';
import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom';
import { Box } from "@mui/material";
import "./App.css";
import ExerciseDetail from "./pages/ExerciseDetails";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';



const App = () => {
  return (
    <Box width="400px" sx={{ width: {x1: '1488px'}}} m="auto">
        <NavBar />
        <Router>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/exercise/:id" element={<ExerciseDetail />}/>


        </Routes>
        </Router>
        <Footer />
    </Box>
  )
}

export default App;
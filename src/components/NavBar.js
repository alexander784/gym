import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from "../assets/Logo.png";



const NavBar = () => {
  return (
    <Stack direction="row"
    justifyContent="space-around"
    sx={{ gap: { sm:"122px", xs:"40px"},mt:{sm: "32px", xs:"20px"}, justifyContent: "none"}} px="20px"
    >
        
        <Link to="/">
            <img src= {Logo}
             alt="logo" 
             style={{width:'48px', height:'48px', margin:
             '0 20px'}}/>
                 {/* Text links */}
                 <Stack 
                 direction="row"
                 gap="40px"
                 fontSize="24px"
                 alignItems="flex-end">
                    <Link to="/">Home</Link>
                    <a href='#exercises' style={{ textDecoration:'none', color:'#3A1212'}}>Exercise</a>
                 </Stack>
        </Link>
    </Stack>
  )
}

export default NavBar
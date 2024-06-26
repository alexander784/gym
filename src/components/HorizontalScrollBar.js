import React from 'react';
import { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import BodyParts from './BodyPart';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import RightArrowIcon from "../assets/icons/right-arrow.png";

// Function to set the leftArrow on click
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};
// Function to set the RightArrow on click
const RightArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};
const HorizontalScrollBar = ( { data, bodyPart, setBodyPart } ) => {
  return (
    // Display the data Horizontally
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item) => 
         <Box 
         key={item.id || item }
         itemID={item.id || item }
         title={item.id || item }
         m="0 40px"
         >
          <BodyParts item={item} bodyPart= 
          {bodyPart} setBodyPart=
          {setBodyPart}/>

         </Box>
         )}
    </ScrollMenu>
  );
}

export default HorizontalScrollBar;
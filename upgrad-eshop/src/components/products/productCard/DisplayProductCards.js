import { ImageListItem, ImageListItemBar, ImageList, CardMedia, Card, CardContent, Typography, Button } from '@mui/material';
import React from 'react';
import { Box } from '@mui/material';


function DisplayProductCards(props)  {
 
  
    const selectiveButton=()=>{
      return(<Button sx={{marginLeft:'1.5em',paddingBottom:'1%'}} variant='contained'>Buy</Button>)
      }
    


    const cards =props.pictures.map((pic) => {
      return (
        <Card sx={{width:'26%',paddingBottom:'2%'}}>
        <img width="100%" height='200px' src={pic.imageURL} alt={pic.name} />
          <CardContent>
            <Typography sx={{width:'280px'}} variant="body2" color="textSecondary" component="p">
              {pic.description}
            </Typography>
          </CardContent>

<Button sx={{marginLeft:'1.5em',paddingBottom:'1%'}} variant='contained'>Buy</Button>
        </Card>
      );
    });

return (
      <>
      
       <Box sx={{margin:'5px'}} display="flex" flexDirection="row" justifyContent="space-evenly" alignItems="flex-start" padding={1} flexWrap="wrap">
    {cards}
  </Box>

      </>
    )
  }


export default DisplayProductCards;
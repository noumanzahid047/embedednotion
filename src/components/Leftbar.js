import { Container, TextField, Button, Typography, Card } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Leftbar = () => {
  return (
      <div style={{
         // position: 'absolute'
      }}>
    <Container sx={{
        width: 3/4,
        pt: '2rem', 
        backgroundColor: 'white',
        borderRadius: '15px',
        pb: '2rem',
        mb: '10px',
    }}>
        {/* <Box sx={{
            minWidth: 240,
            backgroundColor: 'black',
        }}>
            <Card variant='outlined'> */}
                <Typography
                        variant="overline"
                        display= 'block' 
                    >
                        Your Notion Link:
                </Typography>
                    
                <form noValidate autoComplete="off" >
                    <TextField className='en_input'
                        /*onChange={(e) => setTitle(e.target.value)}*/
                        placeholder='Paste Your Link' 
                        fullWidth
                        required
                        sx={{
                            mt: 1,
                            mb: 2,
                            backgroundColor: 'white',
                            borderRadius: '10px',
                            border: 'none'
                        }}
                    />
                    <Button
                        type="submit"  
                        variant="contained"
                        sx={{
                            width: 4/4,
                            height: '50px'
                        }}
                    >
                        Create Embed
                    </Button>
                </form>
                <Typography
                        variant="overline"
                        display= 'block'
                        sx={{
                            mt:'20px'
                        }} 
                    >
                        YOUR CODE SNIPPET:
                </Typography>
                <Box sx={{ Width: '90%'
                        }}>
                    <Card
                    sx={{
                        height: '200px',
                        backgroundColor: '#E3E3E3',
                        border: 'none',
                        borderRadius: '10px'
                    }}></Card>
                </Box>
            {/* </Card>
      </Box> */}
    </Container>
    </div>
  )
}

export default Leftbar
import React from 'react'
import { Container, Button, Typography} from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SaveIcon from '@mui/icons-material/Save';
import RepeatIcon from '@mui/icons-material/Repeat';
import Popup from './Popup';
import { useState } from 'react';
import Login from './Login';

const Gopro = () => {
    const [openPop, setOpenPop] = useState(false);
  return (
      <div>
    <Container sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: 3/4,
        pt: '2rem', 
        backgroundColor: 'white',
        borderRadius: '15px',
        pb: '10px',
        alignItems: 'center',
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
                        OPTIONAL: GO PRO!
                </Typography>
                    
                <Container sx={{ Width: 3/4,
                                height: '300px',
                                backgroundColor: '#E3E3E3',
                                border: 'none',
                                borderRadius: '10px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-around'
                                
                            }}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                    
                                    
                                }}> 
                                    <CheckCircleOutlineIcon/>
                                    <Typography>Remove watermark</Typography>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                    <SaveIcon/>
                                    <Typography> Save & manage embeds</Typography>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                    <RepeatIcon/>
                                    <Typography> Auto update embeds</Typography>
                                </div>
                                <Button
                                    type="submit"  
                                    variant="contained"
                                    sx={{
                                        width: '95%',
                                        height: '50px',
                                    }}
                                >Upgrade</Button>
                </Container>
                <Button 
                    onClick={ () => setOpenPop(true)}
                    variant='contained'
                    sx={{
                        width: 2/3,
                        mt: '20px',
                        mb: '20px',
                    }}
                >PRO LOGIN</Button>
         </Container>
            <Popup
                openPop={openPop}
                setOpenPop={setOpenPop}
            >
                <Login/>
            </Popup>
    </div>
  )
}

export default Gopro
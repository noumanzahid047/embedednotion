import { Typography } from '@mui/material'
import React from 'react'
import { Container, Button, TextField } from '@mui/material'
import CancelIcon from '@mui/icons-material/Cancel';

const Login = ({setOpenPop}) => {
  return (
    
    <Container sx={{
            width: '500px',
            height: '500px',
            pt: '1rem', 
            // backgroundColor: 'white',
            borderRadius: '15px',
            pb: '2rem',
            mb: '10px',
            border: 'none'
        }}>
            <div
                style={{
                display: 'flex',
                justifyContent: 'space-between'}}
            >
            <Typography variant='h3'>
                Login
            </Typography>
            <Button
                onClick={() => setOpenPop(false)}
            >
                <CancelIcon/>
            </Button>
            </div>
            <Typography
                variant='h4'
                sx={{
                    mt: '10px'
                }}
            >
            Already signed up? Enter your email below to get a login link.
            </Typography>
       
               <Typography
                       variant="overline"
                       display= 'block' 
                       sx={{
                           mt: '30px'
                       }}
                   >
                       Your Email:
               </Typography>
                   
               <form noValidate autoComplete="off" >
                   <TextField className='en_input'
                       /*onChange={(e) => setTitle(e.target.value)}*/
                       placeholder='Enter Your EMAIL'
                       type='email' 
                       fullWidth
                       required
                       sx={{
                           mt: 1,
                           mb: 2,
                           backgroundColor: 'white',
                           borderRadius: '20px',
                           border: 'none'
                       }}
                   />
                   <Button
                       type="submit"  
                       variant="contained"
                       sx={{
                           width: 4/4,
                           height: '50px',
                       }}
                   >
                       SEND LOGIN LINK
                   </Button>
               </form>
               <Typography variant='caption' sx={{
                   mt: '10px'
               }}>EmbedNotion uses passwordless login</Typography>
    </Container>
  )
}

export default Login
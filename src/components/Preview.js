import { Typography } from '@mui/material'
import React from 'react'
import { Container } from '@mui/material'

const Preview = () => {
  return (
    <Container sx={{
        position: 'sticky',
        top: '2rem',
        pt: '2rem', 
        pb: '10px',
        marginLeft: '60px',
    }}>
        <Typography variant='caption'>PREVIEW</Typography>
        <div>
            <iframe
                title='preview'
                src="https://embednotion.com/"
                allowFullScreen
                style={{
                    
                    width: '700px',
                    height: '500px',
                    borderRadius: '10px'
                  }}
                > 
            </iframe>
        </div>
    </Container>
  )
}

export default Preview
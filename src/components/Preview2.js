import { Typography } from '@mui/material'
import React from 'react'
import { Container } from '@mui/material'

const Preview2 = () => {
  return (
    <Container sx={{
        pt: '1rem', 
        pb: '1rem',
        width: 3/4
    }}>
        <Typography variant='caption'>PREVIEW</Typography>
        <div>
            <iframe
                title='preview'
                src="https://embednotion.com/"
                allowFullScreen
                style={{
                    
                    borderRadius: '10px'
                  }}
                > 
            </iframe>
        </div>
    </Container>
  )
}

export default Preview2
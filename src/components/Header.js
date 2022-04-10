import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <AppBar position='fixed'>
        <Toolbar sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
            <Typography variant='h5'> Embed Notion </Typography>
            <div className='en_extras'>
                <Button
                    sx={{
                        color: 'white',
                    }}
                >Guides</Button>
                <Button
                    sx={{
                        color: 'white'
                    }}
                >Support</Button>
            </div>
        </Toolbar>
    </AppBar>
  )
}

export default Header
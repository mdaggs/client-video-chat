import React from 'react'
import { Button, Toolbar, Typography, AppBar, Link } from '@mui/material'
import { CssBaseline } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import VideoCamIcon from '@mui/icons-material/Videocam';

export default function TopBar() {

  return (
    <React.Fragment>
    <CssBaseline />
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
      <Toolbar sx={{ flexWrap: 'wrap' }}>
      <VideoCamIcon fontSize="large" />
      <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Video-Chat
      </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Stats
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Support
            </Link>
            
          </nav>

          <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Login
          </Button>

          <Link 
                href="https://github.com/mdlumen/Video-Chat.git"
                target="_blank"
            >
                    <Button 
                        variant="contained" 
                        color="primary" 
                        fullWidth 
                        startIcon={<GitHubIcon fontSize="small" />}
                    >
                        View Source Code
                    </Button>
            </Link>


      </Toolbar>
    </AppBar>
    </React.Fragment>
  )
}

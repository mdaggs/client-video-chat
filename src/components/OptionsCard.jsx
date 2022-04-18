import { Container, Grid, Paper, TextField, Typography, Button } from '@mui/material'
import { Assignment, Phone, PhoneDisabled} from '@mui/icons-material';
import React, { useContext, useState } from 'react'
import { SocketContext } from '../SocketContext'

const OptionsCard = ({ children }) => {
  const {me, callAccepted, name, setName, callEnded, leaveCall, callUser} = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');
  return (
      <Container>
              <form noValidate autoComplete="off">
                  <Grid container spacing={4} justify="space-around">
                      <Grid item xl={4} lg={4} md={6} sm={6} xs={6}>
                      <Paper elevation={1} >
                          <Typography variant="h6" gutterBottom>Account Info</Typography>
                          <TextField 
                              label="name" 
                              variant="outlined" 
                              value={name} 
                              fullWidth
                              onChange={(e)=> setName(e.target.value)}
                          />
                              <Button 
                                  variant="contained" 
                                  color="primary" 
                                  fullWidth 
                                  startIcon={<Assignment fontSize="large" />}
                              >
                                  Copy Your ID
                              </Button>
                          </Paper>
                      </Grid>

                      <Grid item xl={4} lg={4} md={6} sm={6} xs={6}>
                      <Paper elevation={1}>
                          <Typography variant="h6" gutterBottom>Make a Call</Typography>
                          <Typography variant="body2" gutterBottom>
                              Click on "COPY YOUR ID" button and paste (CTL+V) bellow.
                          </Typography>
                          <TextField 
                              label="ID to Call" 
                              variant="outlined" 
                              value={idToCall} 
                              onChange={(e)=> setIdToCall(e.target.value)} 
                              fullWidth
                          />
                          {
                              callAccepted && !callEnded ? (
                                  <Button 
                                      variant="contained"  
                                      color="secondary" 
                                      startIcon={<PhoneDisabled fontSize="large" />}
                                      fullWidth
                                      onClick={leaveCall}
                                      >
                                      Hang Up
                                  </Button>
                              ): (
                                  <Button 
                                      variant="contained" 
                                      color="primary" 
                                      startIcon={<Phone fontSize="large" />}
                                      fullWidth
                                      onClick={()=> callUser(idToCall)}
                                  >
                                      Call
                                  </Button>
                              )
                          }

                              {children}
                          </Paper>
                      </Grid>
                  </Grid>
              </form>
      </Container>
  )
}

export default OptionsCard
import { Avatar, Card, CardHeader, CardMedia, Grid } from '@mui/material';
import React, { useContext } from 'react'
import { SocketContext } from '../SocketContext';

export default function VideoCard() {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call} = useContext(SocketContext);

  console.log(name)
  console.log(callAccepted)
  console.log(myVideo)
  console.log(userVideo)
  console.log(callEnded)
  console.log(stream)
  console.log(call)
  
  return (
    <Grid container spacing={4} justify="center" >
      {/* something something soemthing */}
      {
        stream && (
          <Grid item>
            <Card>
              <CardHeader 
                avatar={ <Avatar aria-label="recipe" /> }
                title={call.name || "User Name"}/>
              <CardMedia>
                <video playsInline muted ref={myVideo} autoPlay > </video>
              </CardMedia>
            </Card>
          </Grid>
        )
      }

      {/*Something Something SOmething */}
      {
        callAccepted && !callEnded &&(
          <Grid item>
            <Card>
              <CardHeader 
                avatar={ <Avatar aria-label="recipe" /> }
                title={call.name || "User Name"}
              />
              <CardMedia>
                <video playsInline ref={userVideo} autoplay />
              </CardMedia>
            </Card>
          </Grid>
        )
      }
      
    </Grid>
  )
}

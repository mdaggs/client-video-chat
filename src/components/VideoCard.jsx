import { Avatar, Card, CardHeader, CardMedia, Grid } from '@mui/material';
import React, { useContext } from 'react'
import { SocketContext } from '../SocketContext';

export default function VideoCard() {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call} = useContext(SocketContext);
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
                <video playsInline muted red={myVideo} autoplay />
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

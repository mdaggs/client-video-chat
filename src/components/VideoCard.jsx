import { Grid, Card, CardHeader, Avatar, CardMedia } from '@mui/material';
import React, { useContext } from 'react'
import { SocketContext } from '../SocketContext';

export default function VideoCard() {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call} = useContext(SocketContext);

  console.log("=================================")
  console.log(`Name is: ${name}`)
  console.log(`Call Accepted: ${callAccepted}`)
  console.log(myVideo)
  console.log(userVideo)
  console.log(`Call Ended: ${callEnded}`)
  console.log(stream)
  console.log(call)
  
  return (
    <Grid>
      { myVideo &&
        <Card>
          <CardHeader
              avatar={ <Avatar aria-label="recipe" /> }
              title={name || "Your Name"}
          />
          <CardMedia>
            <video playsInline muted ref={myVideo} autoPlay />
          </CardMedia>
        </Card>
      }
      { userVideo &&
        <Card>
          <CardHeader 
            avatar={ <Avatar aria-label="recipe" />}
            title={"Connected User"}
          />
          <CardMedia>
            <video playsInline muted red={myVideo} autoPlay />
          </CardMedia>
        </Card>

      }
    </Grid>
  )  
}

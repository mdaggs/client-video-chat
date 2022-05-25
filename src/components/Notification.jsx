import React, {useContext} from 'react';
import { Button } from '@mui/material';

import { SocketContext } from '../SocketContext';

const Notification = () => {

    const { answerCall, call, callAccepted } = useContext(SocketContext);
    // console.log(answerCall)
    // console.log(call)
    // console.log(callAccepted)
    return (
        <>
            {
                call.isReceivingCall && !callAccepted && (
                    <div styles={{display:'flex', justifyContent: 'space-around'}}>
                        <h5>{ call.name ? call.name : "UnKnow"} is calling: </h5>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            onClick={answerCall}
                            fullWidth
                        >
                            Answer
                        </Button>
                    </div>
                )
            }
        </>
    )
}

export default Notification;
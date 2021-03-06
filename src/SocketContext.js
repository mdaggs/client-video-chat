import React, { createContext, useState, useRef, useEffect } from 'react';
import { io } from 'socket.io-client';
import Peer from 'simple-peer';

const SocketContext = createContext();

// const socket = io("https://localhost:4000");
const socket = io("https://md-server-video-chat.herokuapp.com");

const ContextProvider = ({ children }) => {

    const [callAccepted, setCallAccepted] = useState(false);
    const [callEnded, setCallEnded] = useState(false);
    const [stream, setStream] = useState();
    const [name, setName] = useState("");
    const [call, setCall]= useState({});
    const [me, setMe] = useState("");
    

    const myVideo = useRef();
    const userVideo = useRef();
    const connectionRef = useRef();


    useEffect(() =>{
        const constraints = { audio: true,
            video: {
               width: 400,
               height: 300
              } };

        navigator.mediaDevices.getUserMedia(constraints)
        .then((currentStream) => {
            setStream(currentStream);
            myVideo.current.srcObject = currentStream;
        });
        // const getUserMedia = async () => {
        //     try {
        //       const stream = await navigator.mediaDevices.getUserMedia({video: true});
        //       videoRef.current.srcObject = stream;
        //     } catch (err) {
        //       console.log(err);
        //     }
        //   };
        //   getUserMedia();
            

        socket.on("me", (id) =>{
            setMe(id);
        });

        socket.on("callUser", ({from, name: callerName, signal})=>{
            setCall({ isReceivingCall: true, from, name: callerName, signal});
        });

    },[]);

    const answerCall = () => {

        setCallAccepted(true);

        const peer = new Peer({ initiator: false, trickle: false, stream });

        peer.on('signal', (data) => {
            socket.emit('answerCall', { signal: data, to: call.from });
        });

        peer.on('stream', (currentStream) =>{
            userVideo.current.srcObject = currentStream;
        });

        peer.signal(call.signal);

        connectionRef.current = peer;
    };

    const callUser = (id) => {

        
        const peer = new Peer({ initiator: true, trickle: false, stream });

        peer.on('signal', (data) => {
            socket.emit('callUser', { userToCall: id, signalData: data, from: me, name});
        });

        peer.on('stream', (currentStream) =>{
            userVideo.current.srcObject = currentStream;
        });

        socket.on('callAccepted', (signal) => {
            setCallAccepted(true);
            peer.signal(signal);
        });

        connectionRef.current = peer;

    };

    const leaveCall = () => {
        setCallEnded(true);
        connectionRef.current.destroy();
        
        window.location.reload();
    };

    return(
        <SocketContext.Provider value={{ call, callAccepted, myVideo,userVideo,stream,name,setName,callEnded,me,callUser,leaveCall,answerCall }}>
            {children}
        </SocketContext.Provider>
    );
};

export { ContextProvider, SocketContext };
import React from 'react'

export default function AudioVideo() {

  function handleSubmit() {
    // Prefer camera resolution nearest to 1280x720.
    const constraints = { audio: true,
                          video: {
                             width: 400,
                             height: 300
                            } };

    navigator.mediaDevices.getUserMedia(constraints)
      .then(function(mediaStream) {
        const video = document.querySelector('video');
        video.srcObject = mediaStream;
    video.onloadedmetadata = function(e) {
        video.play();
    };
    })
    .catch(function(err) { console.log(err.name + ": " + err.message); }); // always check for errors at the end.
  }

  return <div className="audio-video">
            <video id="video" autoPlay />
            <button onClick={handleSubmit}>Audio/Video</button>
        </div>;
}

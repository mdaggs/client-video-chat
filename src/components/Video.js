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

  return <div>
            {/* <video id="video">Video not Available</video> */}
            <video id="video" allow="camera;microphone" class="silhouetteVideo" autoplay playsinline controls="false"></video>
            <button onClick={handleSubmit}>Audio/Video</button>
        </div>;
}

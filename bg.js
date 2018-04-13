const video = document.querySelector('video');
const selfie = document.querySelector('#selfie');
const button = document.querySelector('#trigger');
const canvas = document.createElement('canvas');

const constraints = {video: true};



function startup(){
    navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true
    }).then(stream => {
        video.srcObject = stream;
    }).catch(console.error)
}

button.onclick = function() {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);
    selfie.src = canvas.toDataURL('image/webp');
    track.stop();
};

window.addEventListener('load', startup, false);


//     const button = document.querySelector('#screenshot-button');
//     const video = document.querySelector('video');

//     button.onclick = function() {
//         canvas.width = video.videoWidth;
//         canvas.height = video.videoHeight;
//         canvas.getContext('2d').drawImage(video, 0, 0);
//         // img.src = canvas.toDataURL('image/webp');
//         img.src = canvas.toDataURL('image/webp');
//     };

//     function handleSuccess(stream) {
//       video.srcObject = stream;
//     }

//     function handleError(error) {
//       console.error('Reeeejected!', error);
//     }

//     navigator.mediaDevices.getUserMedia(constraints).
//       then(handleSuccess).catch(handleError);

<template>
    <div class="home">
        <p style="color:white;">You have taken {{count}} pictues</p>
        <div v-if="count<8" class="container3">
            
            <video></video>
            <button disabled v-on:click="count++">
                <img src="../assets/baseline_camera_alt_white_18dp.png">
            </button>
        </div>
        <router-link v-if="count>=8" to="/main">
            <div class="registerFinal">
                <p>GO!</p>
            </div>
        </router-link>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            count: 0
        }
    },

    mounted(){
        const vid = document.querySelector('video');
navigator.mediaDevices.getUserMedia({video: true}) // request cam
.then(stream => {
  vid.srcObject = stream; // don't use createObjectURL(MediaStream)
  return vid.play(); // returns a Promise
})
.then(()=>{ // enable the button
  const btn = document.querySelector('button');
  btn.disabled = false;
  btn.onclick = e => {
    takeASnap()
    .then(download);
  };
});

function takeASnap(){
  const canvas = document.createElement('canvas'); // create a canvas
  const ctx = canvas.getContext('2d'); // get its context
  canvas.width = vid.videoWidth; // set its size to the one of the video
  canvas.height = vid.videoHeight;
  ctx.drawImage(vid, 0,0); // the video
  return new Promise((res, rej)=>{
    canvas.toBlob(res, 'image/jpeg'); // request a Blob from the canvas
  });
}
function download(blob){
  // uses the <a download> to download a Blob
    let a = document.createElement('a'); 
    a.href = URL.createObjectURL(blob);
   var reader = new FileReader();
    reader.readAsDataURL(blob); 
    reader.onloadend = function() {
    var base64data = reader.result;                
    axios.post('http://34.66.144.105/register2',{image: base64data});
    }
}
    }
}
</script>

<style scoped>
video{
    height: 70%;
    width: 80%; 
}
button{
    background: transparent;
    border:transparent;
    padding: 10vh;
    bottom:0;
    height:5vh;

}
.container3{
    margin-top: 22.5vh;
}
.registerFinal{
    width: 45%;
    height: 7vh;
    border-radius: 25px;
    border-style: solid;
    border-width: 2px;
    border-color: white;
    color: white;
    margin-top: 40vh;
    margin-left:25%;
}
</style>
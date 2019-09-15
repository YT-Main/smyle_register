<template>
  <div class="" style="margin:-8px">
    <div class="float-profile">
      <img src="../assets/logo.png" class="profile-pic">
      <p class="undertext">Hey Fred ></p>
    </div>
    <purchaseHistory />
    <navbar />
    <div class="navbar">
        <router-link to="">
            <img src="../assets/logo.png" style="height:80%; width:auto; margin-top:1%">
        </router-link>

        <router-link to="">
            <img src="../assets/logo.png" style="height:80%; width:auto; margin-top:1%; padding-left:5%; float: left;">
        </router-link>

        <router-link to="">
            <img src="../assets/logo.png" style="height:80%; width:auto; margin-top:1%; padding-right:5%; float: right;">
        </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import purchaseHistory from '../components/purchaseHistory';
import navbar from '../components/navbar';
export default {
  name: 'home',
  components: { purchaseHistory,},

  }
</script>
<style scoped>
.float-profile{
  background:rgb(56, 187, 145); 
  text-align: center;
  height: 30vh;
  width: 100%;
  position:fixed;
}
.profile-pic{
  width: auto;
  height: 50%;
  border-radius: 50%;
  margin-top: 10%;
}
.undertext{
  color: rgb(255, 255, 255);
  font-size: 1.25em;
  margin: -3px;
}
.navbar{
    bottom: 0;
    position: fixed;
    width: 100%;
    height: 7.5vh;
    background-color: #38BB91;
    text-align: center;
}
</style>
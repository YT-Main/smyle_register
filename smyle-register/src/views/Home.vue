<template>
  <div class="home">
    <div class="container">
      <router-link to="/register1">
        <div class="register">
          <p style="color:#38bb91;">Register Now!</p>
        </div>
      </router-link>
      <div class="register" style="background:#38bb91;">
        <p style="color:white;">Log In</p>
      </div>

    </div>
  </div>
</template>

<script>


export default {
  name: 'home',
  components: {

  }
}
</script>

<style >
.home{
  height: 100vh;
  width: 100vw;
  margin: -8px;
  background: #38bb91;
  overflow-x: hidden;
  overflow-y: hidden;
  text-align: center
}
.container{
  position: relative;
  top: 50%;
  margin-top: -12em;
  display: inline-block;
  height: auto;
  text-align: center;
}
.register{
  position: relative;
  width: 12em;
  height: 3em;
  border-radius: 25px;
  background: white;
  border-style: solid;
  border-width: 2px;
  border-color: white;
  margin-top: 2em;
}
</style>
<template>
    <div class="home">
        <div class="container">
            <input type="text" id="info" placeholder="Name" v-model="name">
            <input type="text" id="info" placeholder="Pin" v-model="pin" >

            <router-link to="/register2">
                <div class="register" v-on:click="postUp">
                <p style="color:#38bb91;">Final Step!</p>
                </div>
            </router-link>
        </div>
    </div> 
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return {
            name: '',
            pin: ''
        }
    },
    methods: {
        postUp() {
            axios.post('http://34.66.144.105/register1',{ name: this.name, pin: this.pin})
        }
    }
}
</script>

<style scoped>
#info{
    background: transparent;
    border-top: transparent;
    border-left: transparent;
    border-right: transparent;
    border-bottom-width: 2px;
    border-bottom-color: white;
    padding-top: 2em;
    width: 15em;
    font-size: 20px;
    color:white;
}
.register{
  display: inline-block;    
  position: relative;
  width: 12em;
  height: 3em;
  border-radius: 25px;
  background: white;
  border-style: solid;
  border-width: 2px;
  border-color: white;
  margin-top: .5em;
}
</style>
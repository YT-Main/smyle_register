<template>
    <div class="purchaseHistory">
        <div>
            <p class="grid" style="font-size:.75em; margin: -.5">Date</p>
            <p class="grid" style="font-size:.75em; margin: -.5">Card</p>
            <p class="grid" style="font-size:.75em; margin: -.5">Location</p>
            <p class="grid" style="float: right;font-size:.75em; margin: -.5">Amount </p>
        </div>
        <div >
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data:{
        function () {
            return{
                history
            }
        }
    },
    mounted(){
        this.history = axios.get('http://34.66.144.105/history?name=Taylor')
    }
}
</script>

<style scoped>
.grid{
    display: inline-block;
    padding-right: 10px;
    padding-left: 10px;
}
.purchaseHistory{
    background: white;
    color: black;
    padding-top: 30vh; 
}
</style>
<template>
<div class="counters">
         <!-- Links for Routing -->
    <router-link to="/Counter">
      <div class="counters">Counters</div>
    </router-link>
    <router-link to="/twoWay">
      <div class="counters">TwoWay Binding</div>
    </router-link>
    <h1>Input a string for displaying props</h1>
    <input v-model="state.message" />
    <parentChild :msg="state.message" @finished="receiveMsg" />
  </div>
  <div :class="{active:state.isActive}">Dynamic class</div>
     <ul> <li v-for="links in state.linkArray"  v-bind:key="links">{{links.lang}}</li></ul>

  <parentChild>
      <p>I'm injected content from the parent!</p>
      <p>I can still bind to data in the parent's scope, like this!</p>
    </parentChild>

     <parentChild></parentChild>

</template>

<script>
// import {toRef } from "vue";
import { reactive } from "vue";
import parentChild from "../components/parentChild";
export default {
  name: "Home",
  components: {
    parentChild,
  },
  setup() {
    const state = reactive({
      toChild: "To child!",
      message: "Welcome",
      isActive:true,
      linkArray:[{lang : 'Html'},
      {lang : 'Vue'}]
    });

    // const data = {
    //   message: "Welcome message from arul",
    // };
    // function sendMessage() {
    //   state.message='Msg from chi'
    // }
    function receiveMsg() {
      state.message = "SuccessReceivedFromChild";
      // console.log(state.message);
    }
    // console.log(isActive)
    return {
      state,
      receiveMsg,
      // Favourite,
      // ...toRef(data),
    };
  },
};
</script>
<style>

.active{
    background-color: deeppink;
    

}</style>

<template>
  <div>{{ msg }}</div>
  <button v-if="msg" @click="sendMessage">Ok</button>
  <slot><p>This is child</p></slot>
</template>

<script>
export default {
  name: "parentChild",
  props: {
    msg: String,
  },
  setup(props, ctx) {
    console.log(props);
    function sendMessage() {
      ctx.emit("finished");
    }
    return {
      props,
      sendMessage,
    };
  },
};
</script>
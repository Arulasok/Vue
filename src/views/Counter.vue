<template>
  <div class="counters" id="counter">Counter: {{ state.counter }}</div>
</template>

<script>
import { reactive } from "vue";
import { onMounted } from "vue";

export default {
  name: "Count",
  setup() {
    const state = reactive({
      counter: 0,
    });

    onMounted(() => {
      setInterval(() => {
        state.counter++;
      }, 1000);
    });

    return {
      state,
    };
  },
};
</script>
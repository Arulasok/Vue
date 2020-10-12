<template>
  <div id="two-way-binding">
    <p>{{ state.message }}</p>
    <input v-model="state.message" />
  </div>

  <div class="counters" id="conditional-rendering">
    <span v-if="state.seen">Now you see me</span>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "Count",
  setup() {
    const state = reactive({
      message: "Hello Vue!",
      seen: "true",
    });
    return {
      state,
    };
  },
};
</script>
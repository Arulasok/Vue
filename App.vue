<template>
  <router-link to="/"> <div class="navigation_home">Home</div> </router-link>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: -10px;
}

.navigation_home {
  display: flex;
  align-items: left;
  justify-content: space-between;
  padding: 10px 5%;
  background-color: deeppink;
  color: white;
  font-weight: bold;
  font-size: 24px;
}
.counters {
  padding: 20px;
  transition: all 0.25s ease;
}
.counters:hover {
  transform: scale(1.1, 1.1);
}
</style>

<template>
  <div class="bg-red-700" id="app">
    <router-view/>
  </div>
</template>

<script>
export default { }
</script>

<style>
#app {
  font-family: 'Nunito', sans-serif;
}

/* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #ffffff;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(0, 0, 0);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(126, 10, 10);
}
</style>

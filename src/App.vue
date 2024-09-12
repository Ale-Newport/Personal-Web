<template>
  <div id="app" class="min-h-screen flex flex-col">
    <NavBar class="z-10"/>
    <main class="flex-grow">
      <router-view />
    </main>
    <FooterBar />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    FooterBar
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>

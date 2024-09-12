<template>
    <nav class="bg-gray-100 shadow-md dark:bg-[#262626]">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button @click="toggleMenu" class="inline-flex items-center justify-center p-2 transition text-gray-900 dark:text-white">
              <span class="sr-only">Open menu</span>
              <i :class="['fas', isMenuOpen ? 'fa-times' : 'fa-bars', 'h-6', 'w-6', 'transition', 'duration-300', 'transform', {'rotate-90': isMenuOpen}]"></i>
            </button>
          </div>
          <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <router-link to="/" class="flex-shrink-0" aria-current="page">
              <img class="h-8 w-auto dark:invert" src="../components/icons/Logo.svg" alt="Logo">
            </router-link>
            <div class="hidden sm:block sm:ml-6">
              <ul class="flex space-x-4">
                <li><router-link to="/search" class="text-black dark:text-white px-3 py-2 rounded-md text-sm font-medium">Search</router-link></li>
                <li><router-link to="/games" class="text-black dark:text-white px-3 py-2 rounded-md text-sm font-medium">Games</router-link></li>
                <li><router-link to="/info" class="text-black dark:text-white px-3 py-2 rounded-md text-sm font-medium">Info</router-link></li>
              </ul>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div class="ml-4">
              <label for="darkModeToggle" class="inline-flex relative items-center cursor-pointer">
                <input type="checkbox" id="darkModeToggle" class="sr-only" @change="toggleDarkMode" :checked="isDarkMode">
                <div class="w-14 h-8 bg-gray-200 rounded-full dark:bg-gray-700 relative transition duration-500">
                  <div class="absolute top-1 left-1 w-6 h-6 bg-yellow-200 rounded-full dark:bg-gray-500 transition-all duration-500 transform flex items-center justify-center" :class="{'translate-x-6': isDarkMode}">
                    <i v-if="isDarkMode" class="fas fa-moon text-blue-500"></i>
                    <i v-else class="fas fa-sun text-yellow-500"></i>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
  
      <div class="sm:hidden" id="mobile-menu" v-if="isMenuOpen">
        <ul class="px-2 pt-2 pb-3 space-y-1">
          <li><router-link to="/search" class="text-black dark:text-white block px-3 py-2 rounded-md text-base font-medium">Search</router-link></li>
          <li><router-link to="/games" class="text-black dark:text-white block px-3 py-2 rounded-md text-base font-medium">Games</router-link></li>
          <li><router-link to="/info" class="text-black dark:text-white block px-3 py-2 rounded-md text-base font-medium">Info</router-link></li>
        </ul>
      </div>
    </nav>
</template>
  
<script setup>
  import { ref, onMounted } from 'vue';
  
  const isMenuOpen = ref(false);
  const isDarkMode = ref(false);
  
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
  
  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    document.documentElement.classList.toggle('dark', isDarkMode.value);
    localStorage.setItem('darkMode', isDarkMode.value ? 'enabled' : 'disabled');
  };
  
  onMounted(() => {
    if (localStorage.getItem('darkMode') === 'enabled') {
      isDarkMode.value = true;
      document.documentElement.classList.add('dark');
    } else {
      isDarkMode.value = false;
      document.documentElement.classList.remove('dark');
    }
  });
</script>
  
<style scoped>
  /* Puedes agregar estilos específicos para este componente aquí si lo deseas */
</style>
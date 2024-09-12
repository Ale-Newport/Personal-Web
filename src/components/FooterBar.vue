<template>
    <footer class="bg-gray-100 dark:bg-[#262626] shadow-md py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <!-- Sección de creador -->
          <div class="mb-4 md:mb-0">
            <p class="text-gray-900 dark:text-gray-200 text-center md:text-left">
              Developed by
              <router-link
                to="/info"
                class="no-underline hover:underline text-gray-900 dark:text-gray-200 transition duration-300"
              >
                Alejandro Newport
              </router-link>
            </p>
          </div>
  
          <!-- Sección de enlaces a redes sociales -->
          <div class="flex space-x-6">
            <a
              href="https://www.instagram.com"
              target="_blank"
              class="text-gray-900 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/alejandro-newport-diaz-67087a225"
              target="_blank"
              class="text-gray-900 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/Ale-Newport"
              target="_blank"
              class="text-gray-900 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition"
              aria-label="GitHub"
            >
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
</template> 

<style scoped>
  /* Puedes agregar estilos específicos para este componente aquí si lo deseas */
</style>
<template>
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <!-- Título -->
      <div class="flex items-center justify-center py-16 px-8">
        <h1 class="text-5xl font-bold text-blue-600 dark:text-blue-400">Contact & Information</h1>
      </div>
  
      <!-- Introducción -->
      <div class="max-w-4xl mx-auto mt-10 px-6">
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Welcome to my first web project! I'm Alejandro Newport and I'm excited to share with you this interactive platform that combines art, technology, and entertainment. Here you can explore amazing images through the Pexels API, enjoy 3D animations, and have fun with mini games designed for all ages.
        </p>
      </div>
  
      <!-- Preguntas Frecuentes -->
      <div class="max-w-4xl mx-auto mt-10 px-4">
        <h2 class="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Frequently Asked Questions</h2>
        <div class="space-y-4">
          <!-- Pregunta 1: ¿Quién es Alejandro Newport? -->
          <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <div class="flex justify-between items-center cursor-pointer" @click="toggleAnswer(1)">
              <h3 class="font-bold text-gray-900 dark:text-gray-100">Who is Alejandro Newport?</h3>
              <i :class="isOpen[1] ? 'fas fa-chevron-up' : 'fas fa-chevron-down'" class="text-gray-600 dark:text-gray-300"></i>
            </div>
            <div v-if="isOpen[1]" class="mt-2">
              <p class="text-gray-600 dark:text-gray-300">
                Alejandro Newport, the developer of this website, is an MSci Computer Science student at King’s College London. He specializes in software development, artificial intelligence and robotics. He has participated in hackathons, developed autonomous robots and drones, and worked as a systems technician and software developer at Grupo Newport.
              </p>
            </div>
          </div>
  
          <!-- Pregunta 2: ¿Para qué creé esta web? -->
          <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <div class="flex justify-between items-center cursor-pointer" @click="toggleAnswer(2)">
              <h3 class="font-bold text-gray-900 dark:text-gray-100">What is the purpose of this website?</h3>
              <i :class="isOpen[2] ? 'fas fa-chevron-up' : 'fas fa-chevron-down'" class="text-gray-600 dark:text-gray-300"></i>
            </div>
            <div v-if="isOpen[2]" class="mt-2">
              <p class="text-gray-600 dark:text-gray-300">
                This website was created as an interactive space to showcase my programming and animation skills, and for users to experiment with 3D images, games, and visuals. My goal is to offer an entertaining and visually appealing experience.
              </p>
            </div>
          </div>
  
          <!-- Pregunta 3: ¿Qué tecnologías se usan en la web? -->
          <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <div class="flex justify-between items-center cursor-pointer" @click="toggleAnswer(3)">
              <h3 class="font-bold text-gray-900 dark:text-gray-100">What technologies are used on the web?</h3>
              <i :class="isOpen[3] ? 'fas fa-chevron-up' : 'fas fa-chevron-down'" class="text-gray-600 dark:text-gray-300"></i>
            </div>
            <div v-if="isOpen[3]" class="mt-2">
              <p class="text-gray-600 dark:text-gray-300">
                This website is built using modern technologies like HTML, CSS, JavaScript, and Vue.js. For images, I use the Pexels API, while 3D animations are created using specialized tools. Mini games are developed using lightweight JavaScript frameworks.
              </p>
            </div>
          </div>
  
          <!-- Pregunta 4: ¿Cómo puedo interactuar con las funciones de la web? -->
          <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <div class="flex justify-between items-center cursor-pointer" @click="toggleAnswer(4)">
              <h3 class="font-bold text-gray-900 dark:text-gray-100">How can I interact with the website features?</h3>
              <i :class="isOpen[4] ? 'fas fa-chevron-up' : 'fas fa-chevron-down'" class="text-gray-600 dark:text-gray-300"></i>
            </div>
            <div v-if="isOpen[4]" class="mt-2">
              <p class="text-gray-600 dark:text-gray-300">
                It's very simple. You can search and explore images via the Pexels API, play 3D animations in the viewer, and try out the available mini games by simply clicking through the interactive menu. Each section is designed to be user-friendly and intuitive.
              </p>
            </div>
          </div>
  
          <!-- Pregunta 5: ¿Qué planes tienes para esta web en el futuro? -->
          <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <div class="flex justify-between items-center cursor-pointer" @click="toggleAnswer(5)">
              <h3 class="font-bold text-gray-900 dark:text-gray-100">What plans do you have for this website in the future?</h3>
              <i :class="isOpen[5] ? 'fas fa-chevron-up' : 'fas fa-chevron-down'" class="text-gray-600 dark:text-gray-300"></i>
            </div>
            <div v-if="isOpen[5]" class="mt-2">
              <p class="text-gray-600 dark:text-gray-300">
                My goal is to continue improving the platform with new features, more games, and better 3D animations. I also plan to integrate more APIs that allow for even more interactive experiences, offering a creative space that is constantly evolving.
              </p>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Contacto -->
      <div class="flex flex-col lg:flex-row lg:space-x-8 justify-center pt-20 pb-40 px-4 sm:px-14 md:px-20">
        <div class="flex flex-col text-center lg:text-left space-y-8 mb-8 lg:mb-0 lg:mr-12 xl:mr-32 mt-0 lg:mt-20">
          <div class="flex items-center">
            <div class="flex-shrink-0 mr-4">
              <a href="mailto:rizar.croquetas0r@icloud.com">
                <i class="fas fa-envelope text-blue-600 dark:text-blue-400 text-2xl"></i>
              </a>
            </div>
            <div class="text-lg font-bold text-gray-800 dark:text-gray-100">
              <a href="mailto:rizar.croquetas0r@icloud.com" class="hover:underline">rizar.croquetas0r@icloud.com</a>
            </div>
          </div>
          <div class="flex items-center">
            <div class="flex-shrink-0 mr-4">
              <a href="https://www.linkedin.com/in/alejandro-newport-diaz-67087a225" target="_blank" aria-label="LinkedIn">
                <i class="fab fa-linkedin-in text-blue-600 dark:text-blue-400 text-2xl"></i>
              </a>
            </div>
            <div class="flex-shrink-0 mr-4">
              <a href="https://github.com/Ale-Newport" target="_blank" aria-label="GitHub">
                <i class="fab fa-github text-blue-600 dark:text-blue-400 text-2xl"></i>
              </a>
            </div>
            <div class="flex-shrink-0 mr-4">
              <a href="https://www.instagram.com" target="_blank" aria-label="Instagram">
                <i class="fab fa-instagram text-blue-600 dark:text-blue-400 text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
  
        <!-- Formulario -->
        <div class="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg w-full max-w-4xl">
          <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4 text-center">How can we help you?</h2>
          <form @submit.prevent="submitForm">
            <div class="grid grid-cols-1 md:gap-4 md:grid-cols-2">
              <div class="mb-4">
                <input v-model="formData.nombre" type="text" placeholder="Frist Name *" aria-label="nombre" class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500" required>
              </div>
              <div class="mb-4">
                <input v-model="formData.apellidos" type="text" placeholder="Surname" aria-label="apellidos" class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-100 dark:bg-gray-700">
              </div>
            </div>
            <div class="grid grid-cols-1 md:gap-4 md:grid-cols-2">
              <div class="mb-4">
                <input v-model="formData.telefono" type="text" placeholder="Phone" aria-label="telefono" class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-100 dark:bg-gray-700">
              </div>
              <div class="mb-4">
                <input v-model="formData.email" type="email" placeholder="E-mail *" aria-label="email" class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-100 dark:bg-gray-700" required>
              </div>
            </div>
            <div class="mb-4">
              <textarea v-model="formData.consulta" placeholder="Query *" aria-label="consulta" class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-xl h-32 bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500" required></textarea>
            </div>
            <div class="mb-4">
              <label class="inline-flex items-center">
                <input v-model="formData.privacyConsent" type="checkbox" class="form-checkbox h-5 w-5 text-blue-600 dark:text-blue-500 flex-shrink-0" required>
                <span class="ml-2 text-gray-400 dark:text-gray-300">I agree to the use of the personal data provided in this form.</span>
              </label>
            </div>
            <div class="text-center">
              <button type="submit" class="px-8 py-2 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 rounded-full hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition duration-300">
                SEND
              </button>
            </div>
          </form>
          <!-- Mostrar mensajes de éxito o error -->
          <div v-if="responseMessage" class="text-center mt-4">
            <p :class="responseError ? 'text-red-600' : 'text-green-600'">{{ responseMessage }}</p>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script setup>
  import { ref } from 'vue';
  
  // Estado de preguntas frecuentes
  const isOpen = ref({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });
  
  // Función para alternar respuestas
  const toggleAnswer = (index) => {
    isOpen.value[index] = !isOpen.value[index];
  };
  
  // Formulario de contacto
  const formData = ref({
    nombre: '',
    apellidos: '',
    telefono: '',
    email: '',
    consulta: '',
    privacyConsent: false
  });
  
  const responseMessage = ref('');
  const responseError = ref(false);
  
  const submitForm = async () => {
    try {
      // https://formspree.io/forms/xrbzdwln/overview para ver las consultas realizadas a travez del formulario
      const response = await fetch('https://formspree.io/f/xrbzdwln', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: formData.value.nombre,
          apellidos: formData.value.apellidos,
          telefono: formData.value.telefono,
          email: formData.value.email,
          consulta: formData.value.consulta
        })
      });
  
      if (response.ok) {
        responseMessage.value = 'Inquiry sent successfully!';
        responseError.value = false;
        // Limpiar el formulario
        formData.value = { nombre: '', apellidos: '', telefono: '', email: '', consulta: '', privacyConsent: false };
      } else {
        throw new Error('Error sending query.');
      }
    } catch (error) {
      responseMessage.value = 'There was an error sending the query. Please try again.';
      responseError.value = true;
    }
  };
</script>
  
<style scoped>
  /* Puedes agregar estilos específicos para este componente aquí si lo deseas */
</style>

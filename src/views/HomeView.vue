<template>

  <!-- Contenedor principal con el fondo aplicado -->
  <div class="bg-gradient-to-b from-gray-100 to-gray-200 dark:bg-gradient-to-b dark:from-[#1e1e1e] dark:to-[#111111] transition-colors duration-500 relative w-full">
    
    <!-- Sección Hero con el contenido principal -->
    <div class="min-h-screen flex flex-col items-center justify-start relative w-full">
      
      <!-- Texto centrado en la página -->
      <div class="mt-20 text-center space-y-6">
        <h1 class="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 transition-colors duration-500">
          Welcome to Ale.Newport web page
        </h1>
        <p class="text-lg mt-4 text-gray-600 dark:text-gray-300 transition-colors duration-500">
          Explore our interactive content with dynamic animations, games and image search
        </p>
        <button class="px-6 py-2 text-indigo-600 border-[3px] lg:border-2 border-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white transition duration-300 shadow-2xl lg:shadow-none"
        @click="this.$router.push('/info');">
            <span class="text-xl font-bold lg:font-normal">Discover More</span>
        </button>
      </div>

      <!-- Contenedor de la animación 3D (centrado y fijo durante el scroll) -->
      <div ref="threeDContainer" class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-96"></div>
    </div>

    <!-- Espacio para permitir el scroll -->
    <div class="min-h-[200vh]"></div> <!-- Altura de 200vh para permitir el scroll -->
  </div>
</template>

<script>
  import * as THREE from 'three';
  import { ref, onMounted, onBeforeUnmount } from 'vue';

  export default {
    name: "HomeView",
    setup() {
      // Referencia al contenedor donde se renderizará la animación 3D
      const threeDContainer = ref(null);

      // Variables para la escena y el cubo
      let scene, camera, renderer, cube;

      // Inicialización de la escena y el cubo 3D
      const initThreeJS = () => {
        const container = threeDContainer.value;
        const width = container.clientWidth;
        const height = container.clientHeight;

        // Crear la escena, cámara y renderer
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(window.devicePixelRatio); // Mejora la calidad en pantallas de alta resolución
        container.appendChild(renderer.domElement);

        // Crear el cubo y su wireframe
        const geometry = new THREE.BoxGeometry(4, 4, 4); // Aumentar el tamaño del cubo
        const wireframe = new THREE.WireframeGeometry(geometry);
        const material = new THREE.LineBasicMaterial({ color: 0x0083ff }); // Color azul neón
        cube = new THREE.LineSegments(wireframe, material);
        scene.add(cube);

        // Posicionar la cámara
        camera.position.z = 5;

        // Añadir luz ambiental
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        // Iniciar la animación
        animate();
      };

      // Función para manejar la animación continua del cubo
      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };

      // Función para manejar el scroll y actualizar la rotación del cubo
      const onScroll = () => {
        const scrollY = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        
        // Rotación completa de 360 grados cuando se llega al final del scroll
        const rotation = (scrollY / documentHeight) * (2 * Math.PI);

        // Aplicar la rotación al cubo
        if (cube) {
          cube.rotation.x = rotation;
          cube.rotation.y = rotation;
        }
      };

      // Cuando el componente se monta, inicializamos la animación y agregamos el listener de scroll
      onMounted(() => {
        initThreeJS();
        window.addEventListener('scroll', onScroll); // Escuchar el scroll
        window.addEventListener('resize', onWindowResize); // Escuchar el redimensionado de la ventana
      });

      // Ajustar la escena cuando se cambia el tamaño de la ventana
      const onWindowResize = () => {
        const container = threeDContainer.value;
        const width = container.clientWidth;
        const height = container.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };

      // Limpiar los eventos cuando se desmonta el componente
      onBeforeUnmount(() => {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onWindowResize);
      });

      return {
        threeDContainer,
      };
    },
  };
</script>

<style scoped>
  /* Puedes agregar estilos específicos para este componente aquí si lo deseas */
</style>

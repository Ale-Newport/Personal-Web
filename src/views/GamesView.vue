<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <!-- Título -->
      <h1 class="text-5xl font-bold mb-8 text-gray-800 dark:text-white">Games</h1>
  
      <!-- Grid de los minijuegos -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        
        <!-- Tarjeta de Tres en Raya -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-md p-6 hover:shadow-2xl dark:hover:shadow-lg cursor-pointer transition-transform duration-300 transform hover:scale-105" @click="openGame('tictactoe')">
          <img src="@/components/icons/tictactoe_preview.png" alt="Previsualización de Tres en Raya" class="rounded-md mb-4 w-full object-contain">
          <h3 class="text-xl font-semibold text-gray-800 dark:text-white">Tic Tac Toe</h3>
        </div>
  
        <!-- Tarjeta de Snake Game -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-md p-6 hover:shadow-2xl dark:hover:shadow-lg cursor-pointer transition-transform duration-300 transform hover:scale-105" @click="openGame('snake')">
          <img src="@/components/icons/snake_preview.png" alt="Previsualización de Snake" class="rounded-md mb-4 w-full object-contain">
          <h3 class="text-xl font-semibold text-gray-800 dark:text-white">Snake Game</h3>
        </div>
  
        <!-- Tarjeta de Buscaminas -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-md p-6 hover:shadow-2xl dark:hover:shadow-lg cursor-pointer transition-transform duration-300 transform hover:scale-105" @click="openGame('minesweeper')">
          <img src="@/components/icons/minesweeper_preview.png" alt="Previsualización de Buscaminas" class="rounded-md mb-4 w-full object-contain">
          <h3 class="text-xl font-semibold text-gray-800 dark:text-white">Minesweeper</h3>
        </div>
  
      </div>
  
      <!-- Modal para los juegos -->
      <div v-if="dialog" class="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 flex justify-center items-center" @click="closeDialog">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-3xl relative" @click.stop>
          <button @click="closeDialog" class="absolute top-2 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">
            &times;
          </button>
          <!-- Muestra el juego seleccionado dinámicamente -->
          <component :is="currentGameComponent" />
        </div>
      </div>
    </div>
</template>
  
<script>
  // Importa los componentes de tus juegos
  import TicTacToe from './games/TicTacToe.vue';
  import SnakeGame from './games/SnakeGame.vue';
  import Minesweeper from './games/MinesWeeper.vue';
  
  export default {
    data() {
      return {
        dialog: false,
        currentGame: null,
      };
    },
    computed: {
      currentGameComponent() {
        // Devuelve el componente correcto en función de la selección del juego
        if (this.currentGame === 'tictactoe') return TicTacToe;
        if (this.currentGame === 'snake') return SnakeGame;
        if (this.currentGame === 'minesweeper') return Minesweeper;
        return null;
      }
    },
    methods: {
      openGame(game) {
        this.currentGame = game;
        this.dialog = true;
      },
      closeDialog() {
        this.dialog = false;
        this.currentGame = null;
      }
    }
  };
</script>
  
<style scoped>
  /* Puedes agregar estilos específicos para este componente aquí si lo deseas */
</style>

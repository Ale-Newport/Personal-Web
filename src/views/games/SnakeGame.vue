<template>
    <div class="flex flex-col items-center justify-center bg-gray-100 p-6">
      <!-- Título del juego -->
      <h1 class="text-4xl font-bold mb-6 text-gray-800">Snake Game</h1>
  
      <!-- Canvas del juego -->
      <canvas ref="gameCanvas" width="400" height="400" class="bg-white border-4 border-gray-300 rounded-lg mb-6"></canvas>
  
      <!-- Botón para empezar el juego -->
      <button @click="startGame" class="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300 mb-4">
        Start Game
      </button>
  
      <!-- Mensaje del estado del juego -->
      <div class="text-2xl font-semibold text-red-600 mb-4" v-if="message">
        {{ message }}
      </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        snake: [{ x: 10, y: 10 }],
        direction: { x: 1, y: 0 },
        food: { x: 15, y: 15 },
        gridSize: 20,
        message: '',
        interval: null
      };
    },
    methods: {
      startGame() {
        this.snake = [{ x: 10, y: 10 }];
        this.direction = { x: 1, y: 0 };
        this.food = { x: Math.floor(Math.random() * this.gridSize), y: Math.floor(Math.random() * this.gridSize) };
        this.message = '';
        if (this.interval) clearInterval(this.interval);
        this.interval = setInterval(this.gameLoop, 100);
        window.addEventListener('keydown', this.changeDirection);
      },
      gameLoop() {
        const head = { ...this.snake[0] };
        head.x += this.direction.x;
        head.y += this.direction.y;
  
        // Verificar colisión con paredes o consigo mismo
        if (head.x < 0 || head.x >= this.gridSize || head.y < 0 || head.y >= this.gridSize || this.snake.some(segment => segment.x === head.x && segment.y === head.y)) {
          clearInterval(this.interval);
          this.message = 'You lost!';
          return;
        }
  
        this.snake.unshift(head);
        if (head.x === this.food.x && head.y === this.food.y) {
          this.food = { x: Math.floor(Math.random() * this.gridSize), y: Math.floor(Math.random() * this.gridSize) };
        } else {
          this.snake.pop();
        }
  
        this.drawGame();
      },
      drawGame() {
        const canvas = this.$refs.gameCanvas;
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
  
        context.fillStyle = 'green';
        this.snake.forEach(segment => context.fillRect(segment.x * 20, segment.y * 20, 20, 20));
  
        context.fillStyle = 'red';
        context.fillRect(this.food.x * 20, this.food.y * 20, 20, 20);
      },
      changeDirection(event) {
        if ((event.key === 'ArrowUp' || event.key === 'w') && this.direction.y === 0) this.direction = { x: 0, y: -1 };
        if ((event.key === 'ArrowDown' || event.key === 's') && this.direction.y === 0) this.direction = { x: 0, y: 1 };
        if ((event.key === 'ArrowLeft' || event.key === 'a') && this.direction.x === 0) this.direction = { x: -1, y: 0 };
        if ((event.key === 'ArrowRight' || event.key === 'd') && this.direction.x === 0) this.direction = { x: 1, y: 0 };
      }
    },
    beforeUnmount() {
      window.removeEventListener('keydown', this.changeDirection);
      if (this.interval) clearInterval(this.interval);
    }
  };
</script>
  
<style scoped>
  /* Puedes agregar estilos específicos para este componente aquí si lo deseas */
</style>
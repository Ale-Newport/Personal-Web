<template>
    <div class="flex flex-col items-center justify-center bg-gray-100 p-6">
      <!-- Título del juego -->
      <h1 class="text-4xl font-bold mb-6 text-gray-800">Tic Tac Toe</h1>
  
      <!-- Tablero de juego -->
      <div class="grid grid-cols-3 gap-4 mb-6">
        <div
          v-for="(cell, index) in board"
          :key="index"
          class="w-24 h-24 bg-white border-4 border-gray-300 rounded-lg flex justify-center items-center text-4xl font-bold text-gray-700 cursor-pointer transition duration-300"
          @click="makeMove(index)"
        >
          <!-- Renderiza la "X" o "O" según el valor del estado `board` -->
          <span v-if="cell" :class="{'text-blue-500': cell === 'X', 'text-red-500': cell === 'O'}">
            {{ cell }}
          </span>
        </div>
      </div>
  
      <!-- Mensaje del ganador -->
      <div v-if="winner" class="text-2xl font-semibold text-green-600 mb-4">
        {{ winnerMessage }}
      </div>
  
      <!-- Botón de reinicio -->
      <button @click="resetGame" class="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
        Restart Game
      </button>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        board: Array(9).fill(null),
        currentPlayer: 'X',
        winner: null
      };
    },
    methods: {
        makeMove(index) {
            if (!this.board[index] && !this.winner) {
                this.board[index] = this.currentPlayer;

                if (this.checkWinner()) {
                this.winner = this.currentPlayer;
                } else {
                this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
                }
            }
        },
      checkWinner() {
        const winningCombos = [
          [0, 1, 2], [3, 4, 5], [6, 7, 8],
          [0, 3, 6], [1, 4, 7], [2, 5, 8],
          [0, 4, 8], [2, 4, 6]
        ];
  
        return winningCombos.some(combo =>
          combo.every(index => this.board[index] === this.currentPlayer)
        );
      },
      resetGame() {
        console.log('Restarting game...');
        this.board = Array(9).fill(null);
        this.currentPlayer = 'X';
        this.winner = null;
      }
    },
    computed: {
      winnerMessage() {
        return `The winner is ${this.winner}`;
      }
    }
  };
</script>
  
<style scoped>
  /* Puedes agregar estilos específicos para este componente aquí si lo deseas */
</style>

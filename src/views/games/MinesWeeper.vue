<template>
  <div class="minesweeper-container flex flex-col items-center justify-center bg-gray-100 p-6">
    <!-- Título del juego -->
    <h1 class="text-4xl font-bold mb-6 text-gray-800">Minesweeper</h1>

    <!-- Tablero del Buscaminas (estructura de filas y celdas como estaba antes) -->
    <div v-for="(row, rowIndex) in board" :key="rowIndex" class="row flex">
      <div 
        v-for="(cell, colIndex) in row" 
        :key="colIndex" 
        class="cell w-12 h-12 border border-gray-500 rounded-md flex justify-center items-center text-lg cursor-pointer" 
        :class="{
          'bg-gray-300 cursor-default': cell.revealed, 
          'bg-yellow-200': cell.flagged,
          'bg-white': !cell.revealed && !cell.flagged
        }" 
        @click="revealCell(rowIndex, colIndex)" 
        @contextmenu.prevent="toggleFlag(rowIndex, colIndex)"
      >
        <!-- Si la celda está revelada, muestra el número de minas vecinas o una bomba -->
        {{ cell.revealed ? (cell.mine ? '💣' : (cell.neighborMines > 0 ? cell.neighborMines : '')) : '' }}
        <!-- Si la celda tiene una bandera -->
        <span v-if="cell.flagged && !cell.revealed">🚩</span>
      </div>
    </div>

    <!-- Mensaje del estado del juego -->
    <div v-if="message" class="text-3xl font-semibold text-red-600 mt-6">
      {{ message }}
    </div>

    <!-- Botón de reinicio del juego -->
    <button 
      @click="resetGame" 
      class="bg-blue-500 text-white my-6 px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
      Restart Game
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      board: [],
      rows: 10,
      cols: 10,
      mines: 10,
      gameOver: false,
      message: '',
    };
  },
  mounted() {
    this.resetGame();
  },
  methods: {
    resetGame() {
      this.board = this.generateBoard();
      this.placeMines();
      this.calculateNeighborMines();
      this.gameOver = false;
      this.message = '';
    },
    generateBoard() {
      return Array.from({ length: this.rows }, () =>
        Array.from({ length: this.cols }, () => ({
          revealed: false,
          mine: false,
          neighborMines: 0,
          flagged: false,
        }))
      );
    },
    placeMines() {
      let mineCount = 0;
      while (mineCount < this.mines) {
        const row = Math.floor(Math.random() * this.rows);
        const col = Math.floor(Math.random() * this.cols);
        if (!this.board[row][col].mine) {
          this.board[row][col].mine = true;
          mineCount++;
        }
      }
    },
    calculateNeighborMines() {
      const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1], [0, 1],
        [1, -1], [1, 0], [1, 1],
      ];

      for (let row = 0; row < this.rows; row++) {
        for (let col = 0; col < this.cols; col++) {
          if (!this.board[row][col].mine) {
            let neighborMines = 0;
            directions.forEach(([dx, dy]) => {
              const newRow = row + dx;
              const newCol = col + dy;
              if (this.isInBounds(newRow, newCol) && this.board[newRow][newCol].mine) {
                neighborMines++;
              }
            });
            this.board[row][col].neighborMines = neighborMines;
          }
        }
      }
    },
    isInBounds(row, col) {
      return row >= 0 && row < this.rows && col >= 0 && col < this.cols;
    },
    revealCell(rowIndex, colIndex) {
      const cell = this.board[rowIndex][colIndex];
      if (cell.revealed || this.gameOver || cell.flagged) return;

      cell.revealed = true;

      if (cell.mine) {
        this.message = "You lost! 💣";
        this.gameOver = true;
      } else if (cell.neighborMines === 0) {
        this.revealAdjacentCells(rowIndex, colIndex);
      }

      this.checkWin();
    },
    revealAdjacentCells(row, col) {
      const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1], [0, 1],
        [1, -1], [1, 0], [1, 1],
      ];

      directions.forEach(([dx, dy]) => {
        const newRow = row + dx;
        const newCol = col + dy;
        if (this.isInBounds(newRow, newCol) && !this.board[newRow][newCol].revealed && !this.board[newRow][newCol].flagged) {
          this.revealCell(newRow, newCol);
        }
      });
    },
    toggleFlag(rowIndex, colIndex) {
      const cell = this.board[rowIndex][colIndex];
      if (cell.revealed || this.gameOver) return;

      cell.flagged = !cell.flagged;
    },
    checkWin() {
      const allCellsRevealed = this.board.every(row =>
        row.every(cell => (cell.mine && !cell.revealed) || cell.revealed)
      );

      if (allCellsRevealed && !this.gameOver) {
        this.message = "You won! 🎉";
        this.gameOver = true;
      }
    }
  }
};
</script>

<style scoped>
  /* Puedes agregar estilos específicos para este componente aquí si lo deseas */
</style>

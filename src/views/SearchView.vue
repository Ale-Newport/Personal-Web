<template>
    <div class="min-h-screen p-6 bg-white dark:bg-[#1e1e1e] transition-colors duration-500">
      <!-- Search Bar -->
      <div class="flex flex-col sm:flex-row justify-between items-center mb-4">
        <input 
          v-model="searchQuery"
          @input="fetchData"
          type="text" 
          placeholder="Search for images or videos..."
          class="w-full sm:w-1/2 px-4 py-2 mb-4 sm:mb-0 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-colors duration-500"
        />

        <!-- Filters -->
        <div class="flex space-x-2 sm:space-x-4">
          <button 
            v-for="filter in filters"
            :key="filter"
            @click="applyFilter(filter)"
            :class="selectedFilter === filter ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-600 dark:text-white'"
            class="px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white focus:outline-none text-sm sm:text-base transition-colors duration-500"
          >
            {{ filter }}
          </button>
        </div>
      </div>
  
      <!-- Results Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        <div 
          v-for="item in filteredItems" 
          :key="item.id" 
          @click="openModal(item)"
          class="border rounded-lg overflow-hidden shadow-lg dark:bg-gray-800 dark:border-gray-700 transition-colors duration-500 cursor-pointer">
          <!-- Image or video -->
          <img v-if="item.src" :src="item.src.medium" alt="Image" class="w-full h-48 sm:h-40 object-cover">
          <video v-if="item.video_files" controls :src="item.video_files[0].link" class="w-full h-48 sm:h-40 object-cover"></video>
  
          <!-- Description below image or video -->
          <div class="p-4">
            <h2 class="text-sm sm:text-base font-bold dark:text-white">{{ item.alt || 'No description available' }}</h2>
          </div>
        </div>
      </div>
  
      <!-- No Results Message -->
      <div v-if="filteredItems.length === 0" class="text-center mt-6 text-gray-500 dark:text-gray-400">
        No results found.
      </div>
  
      <!-- Image Modal -->
      <div v-if="isModalOpen" @click.self="closeModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg relative">
          <!-- Close Modal Button -->
          <button @click="closeModal" class="absolute top-2 right-2 text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <i class="fas fa-times"></i>
          </button>
  
          <!-- Enlarged Image -->
          <img :src="selectedItem.src.large" alt="Enlarged image" class="w-full h-auto mb-4 rounded-lg">
  
          <!-- Additional Information -->
          <h2 class="text-xl font-bold mb-2 dark:text-white">{{ selectedItem.alt || 'No description available' }}</h2>
          <p class="text-gray-700 dark:text-gray-300">Photographer: {{ selectedItem.photographer }}</p>
        </div>
      </div>
    </div>
</template>
  
<script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        searchQuery: "",
        filters: ["All", "Photos", "Videos"],
        selectedFilter: "All",
        items: [],
        isModalOpen: false,
        selectedItem: null,
      };
    },
    computed: {
      filteredItems() {
        let filtered = this.items;
  
        // Filter based on content type
        if (this.selectedFilter === "Photos") {
          filtered = filtered.filter(item => item.src); // Only photos
        } else if (this.selectedFilter === "Videos") {
          filtered = filtered.filter(item => item.video_files); // Only videos
        }
  
        // Filter based on search query
        if (this.searchQuery) {
          filtered = filtered.filter(item =>
            (item.alt && item.alt.toLowerCase().includes(this.searchQuery.toLowerCase()))
          );
        }
  
        return filtered;
      }
    },
    methods: {
      fetchData() {
        const API_KEY = 'qTQcQUmPyzuRhvplfbmZsYavTTyWUsA7JR3Rzx99XpreUSKMcPYtBQ3h';
        
        let url = '';
        if (this.selectedFilter === "Videos") {
          url = `https://api.pexels.com/videos/search?query=${encodeURIComponent(this.searchQuery)}&per_page=20`;
        } else {
          url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(this.searchQuery)}&per_page=20`;
        }
  
        axios
          .get(url, {
            headers: {
              Authorization: API_KEY
            }
          })
          .then(response => {
            this.items = this.selectedFilter === "Videos" ? response.data.videos : response.data.photos;
          })
          .catch(error => {
            console.error("Error fetching data:", error);
          });
      },
      applyFilter(filter) {
        this.selectedFilter = filter;
        this.fetchData(); // Fetch data after applying filter
      },
      openModal(item) {
        this.selectedItem = item;
        this.isModalOpen = true;
      },
      closeModal() {
        this.isModalOpen = false;
        this.selectedItem = null;
      }
    },
    mounted() {
      // Fetch initial data when the component is mounted
      this.fetchData();
    }
  };
</script>
  
<style scoped>
  /* Puedes agregar estilos específicos para este componente aquí si lo deseas */
</style>

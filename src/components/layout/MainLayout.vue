<template>
  <!-- <Header /> -->
  <div class="flex overflow-auto h-screen">
    <Sidebar
      :is-sidebar-open="isSidebarOpen"
      @update:isSidebarOpen="toggleSidebar"
    />

    <main class="flex-1 flex flex-col">
      <Navbar @toggle-sidebar="toggleSidebar" />
      <div
        class="h-screen dark:bg-emerald-950 dark:text-white text-slate-700 bg-emerald-200 p-2 sm:p-4 transition-all duration-300 ease-in-out py-16 sm:py-16"
      >
        <!-- <slot /> -->
        <router-view />
      </div>
      <Footer />
    </main>
  </div>
</template>
<script setup lang="ts">
import Footer from "./Footer.vue";
// import Header from "./Header.vue";
import Sidebar from "./Sidebar.vue";
import Navbar from "./Navbar.vue";
import { ref } from "vue";
const isSidebarOpen = ref(false);
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
</script>

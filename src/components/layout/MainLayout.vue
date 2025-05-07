<template>
  <!-- <Header /> -->
  <div class="flex h-screen">
    <Sidebar :is-sidebar-open="isSidebarOpen" />

    <main class="flex-1 flex flex-col">
      <Navbar @toggle-sidebar="toggleSidebar" />
      <div
        class="overflow-auto dark:bg-emerald-950 dark:text-white text-slate-700 bg-emerald-200 p-4 h-screen transition-all duration-300 ease-in-out"
      >
        <slot />
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

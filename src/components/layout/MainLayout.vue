<template>
  <!-- <Header /> -->
  <div class="flex h-screen">
    <Sidebar :is-sidebar-open="isSidebarOpen" />

    <main class="flex-1 flex flex-col">
      <Navbar @toggle-sidebar="toggleSidebar" />
      <div class="overflow-auto bg-gray-100 p-4 h-screen">
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

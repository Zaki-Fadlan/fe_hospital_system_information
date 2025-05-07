<template>
  <footer
    class="fixed bottom-0 w-full bg-green-700 text-white px-6 py-3 flex flex-col sm:flex-row justify-between items-center text-sm shadow-inner"
  >
    <div class="text-center sm:text-left">
      &copy; {{ currentYear }} RSU Sehat Selalu. Hospital Information System.
    </div>
    <div class="flex gap-4">
      <a href="#" class="hover:underline">Privacy Policy</a>
      <a href="#" class="hover:underline">Contact</a>
      <a href="#" class="hover:underline">About</a>
    </div>
  </footer>
</template>
<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

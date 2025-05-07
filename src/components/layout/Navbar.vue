<template>
  <nav
    class="bg-green-700 z-50 w-full flex justify-between p-1.5 py-2 px-3 shadow-xl top-0"
  >
    <div class="flex gap-4 items-center">
      <button
        class="bg-green-500 hover:cursor-pointer rounded-2xl w-9 h-9 items-center justify-center flex text-white font-semibold border-white border-1"
        @click="toggleSidebar"
      >
        =
      </button>
      <div class="text-white">Logo</div>
    </div>
    <div class="flex gap-x-2 items-center">
      <button
        @click="toggleDarkMode"
        class="bg-green-500 rounded-full w-9 h-9 items-center justify-center flex text-white font-semibold border-white border-1"
      >
        <span v-if="isDarkMode">D</span>
        <span v-else>L</span>
      </button>
      <!-- <div
        class="bg-green-500 rounded-full w-9 h-9 items-center justify-center flex text-white font-semibold border-white border-1"
      >
        N
      </div> -->
      <!-- <div
        class="bg-green-500 rounded-full w-9 h-9 items-center justify-center flex text-white font-semibold border-white border-1"
      >
        ZF
      </div> -->
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useDarkMode } from "@/composables/useDarkMode";

const emit = defineEmits(["toggle-sidebar"]);

const toggleSidebar = () => {
  emit("toggle-sidebar");
};

const { isDarkMode, toggleDarkMode } = useDarkMode();
</script>

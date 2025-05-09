<template>
  <nav
    class="bg-green-700 z-50 w-full flex justify-between p-1.5 py-2 px-3 shadow-xl top-0 fixed"
  >
    <div class="flex gap-4 items-center text-white font-bold">
      <button
        class="bg-green-500 hover:cursor-pointer rounded-2xl w-9 h-9 items-center justify-center flex font-semibold border-white border-1"
        @click="toggleSidebar"
      >
        <ListBulletIcon class="h-5 w-5" />
      </button>
      <div class="font-bold text-xl">RSU Sehat Selalu</div>
    </div>
    <div class="flex gap-x-2 items-center dark:text-emerald-950 text-green-200">
      <button
        @click="handleToggleDarkMode"
        class="bg-green-500 rounded-full hover:cursor-pointer w-9 h-9 items-center transition-all justify-center flex font-semibold border-white border-1 hover:scale-105 duration-300"
      >
        <span v-if="isDarkMode">
          <MoonIcon
            class="h-5 w-5 transition-transform"
            :class="{ 'animate-spin': spinning }"
          />
        </span>
        <span v-else>
          <SunIcon
            class="h-5 w-5 transition-transform"
            :class="{ 'animate-spin': spinning }"
          />
        </span>
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useDarkMode } from "@/composables/useDarkMode";
import { SunIcon, MoonIcon, ListBulletIcon } from "@heroicons/vue/16/solid";

const emit = defineEmits(["toggle-sidebar"]);

const toggleSidebar = () => {
  emit("toggle-sidebar");
};

const { isDarkMode, toggleDarkMode } = useDarkMode();
const spinning = ref(false);

const handleToggleDarkMode = () => {
  spinning.value = true;
  toggleDarkMode();
  setTimeout(() => {
    spinning.value = false;
  }, 1000);
};
</script>

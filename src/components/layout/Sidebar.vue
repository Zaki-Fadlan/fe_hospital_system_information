<template>
  <aside
    :class="[
      'fixed top-0 left-0 h-full bg-green-700 transition-all duration-500 ease-in-out overflow-hidden flex flex-col justify-between px-3 py-2 shadow-xl z-50',
      isVisible
        ? 'sm:w-80 w-full opacity-100 translate-x-0'
        : 'w-0 opacity-0 -translate-x-full',
    ]"
  >
    <div
      v-if="isVisible"
      class="flex gap-y-4 flex-col text-white font-semibold py-2 transition-opacity duration-300 delay-200 mt-12"
    >
      <ul class="gap-y-2 flex flex-col">
        <li>
          <router-link to="/dashboard" @click="closeSidebar"
            >Dashboard</router-link
          >
        </li>
        <hr />
        <li>
          <router-link to="/auth/login" @click="closeSidebar"
            >Login</router-link
          >
        </li>
        <hr />
        <li>
          <router-link to="/datamaster" @click="closeSidebar"
            >Datamaster</router-link
          >
        </li>
        <hr />
        <li>
          <router-link to="/auth/register" @click="closeSidebar"
            >Profile</router-link
          >
        </li>
        <hr />
      </ul>
    </div>
    <div
      v-if="isVisible"
      class="flex flex-col p-2 w-full transition-opacity duration-300 delay-200"
    >
      <hr class="w-full h-px bg-white border-0 my-2" />
      <div class="flex justify-between items-center">
        <div class="flex gap-x-3 items-center">
          <div
            class="h-8 w-8 bg-white rounded-full items-center justify-center flex"
          >
            <UserIcon class="h-5 w-5" />
          </div>
          <div class="text-white flex flex-col">
            <span class="text-sm font-semibold">Zaki Fadlan</span>
            <p class="text-xs">Doctor</p>
          </div>
        </div>
        <router-link
          to="/auth/logout"
          class="bg-red-400 outline-1 outline-red-500 shadow-xl text-white p-1 px-2 rounded-full items-center justify-center flex text-sm"
        >
          Logout
        </router-link>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { defineProps, ref, watch, defineEmits } from "vue";
import { UserIcon } from "@heroicons/vue/16/solid";

const props = defineProps({
  isSidebarOpen: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(); // Emit event

const isVisible = ref(props.isSidebarOpen); // toggle visual state only

// Watch for changes in the prop
watch(
  () => props.isSidebarOpen,
  (val) => {
    isVisible.value = val;
  },
  { immediate: true }
);

// Function to close the sidebar
const closeSidebar = () => {
  if (props.isSidebarOpen) {
    emit("update:isSidebarOpen", false); // Emit the event to close the sidebar
  }
};
</script>

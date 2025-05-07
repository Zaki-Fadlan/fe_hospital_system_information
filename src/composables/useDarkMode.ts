import { ref, watch, onMounted } from "vue";

export function useDarkMode() {
  const isDarkMode = ref(false);
  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    updateTheme();
  };
  const updateTheme = () => {
    if (isDarkMode.value) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };
  onMounted(() => {
    const savedTheme = localStorage.getItem("theme");
    const userPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    isDarkMode.value =
      savedTheme === "dark" || (!savedTheme && userPrefersDark);

    updateTheme();
  });
  return {
    isDarkMode,
    toggleDarkMode,
  };
}

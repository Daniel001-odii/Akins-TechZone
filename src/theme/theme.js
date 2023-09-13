import { reactive } from 'vue';

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const isDarkMode = localStorage.getItem("darkMode");

const themeStore = reactive({
  darkMode: isDarkMode !== null ? JSON.parse(isDarkMode) : prefersDark, // Check if mode is stored, otherwise use system preference

  toggleTheme() {
    this.darkMode = !this.darkMode;
    localStorage.setItem('darkMode', JSON.stringify(this.darkMode)); // Store the mode as a string
    console.log("App is in dark mode? ", this.darkMode);
  },
});

export default themeStore;

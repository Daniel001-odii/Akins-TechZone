import { reactive } from 'vue';

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const isDarkMode = localStorage.getItem("darkMode");




const themeStore = reactive({
  // darkMode: prefersDark, // Initialize based on user's system preference
  darkMode: isDarkMode,

  toggleTheme() {
    this.darkMode = !this.darkMode;
    localStorage.setItem('darkMode', this.darkMode);
    console.log("app is darkmode? ", isDarkMode);
  },
});

export default themeStore;

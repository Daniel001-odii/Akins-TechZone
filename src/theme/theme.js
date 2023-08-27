import { reactive } from 'vue';

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

const themeStore = reactive({
  darkMode: prefersDark, // Initialize based on user's system preference

  toggleTheme() {
    this.darkMode = !this.darkMode;
    localStorage.setItem('darkMode', this.darkMode);
  },
});

export default themeStore;

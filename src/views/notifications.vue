
<template>
    <div class="page-grid-container" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
      <div class="Navigation">
        <NavBar/>
      </div>
      <div class="Left-Nav">
            <LeftNav/>
      </div>
      <div class="Page-header" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
            <div class="page-title">Notifications</div>
            <div class="page-filters"></div>
            <div class="insights-content" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
               
            </div>
      </div>
      <div class="Page-contents" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
            <!----this is an insight page and needs no job lisitng content-->
             <!---notifications modal-->
             <div class="notification" >
                                <div class="notify">
                                    <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 21 20" fill="none">
                                        <path d="M10.5 20C4.977 20 0.5 15.523 0.5 10C0.5 4.477 4.977 0 10.5 0C16.023 0 20.5 4.477 20.5 10C20.5 15.523 16.023 20 10.5 20ZM9.503 14L16.573 6.929L15.159 5.515L9.503 11.172L6.674 8.343L5.26 9.757L9.503 14Z" fill="#00632B"/>
                                    </svg>
                                    <slot> New login detected</slot>
                                    </div>
                                    <span class="notify-time">Just now</span>
                                </div>

                                <div class="notify">
                                    <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 21 20" fill="none">
                                        <path d="M10.5 20C4.977 20 0.5 15.523 0.5 10C0.5 4.477 4.977 0 10.5 0C16.023 0 20.5 4.477 20.5 10C20.5 15.523 16.023 20 10.5 20ZM9.503 14L16.573 6.929L15.159 5.515L9.503 11.172L6.674 8.343L5.26 9.757L9.503 14Z" fill="#00632B"/>
                                    </svg>
                                    <slot> New login detected</slot>
                                    </div>
                                    <span class="notify-time">Just now</span>
                                </div>

                                <div class="notify">
                                    <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 21 20" fill="none">
                                        <path d="M10.5 20C4.977 20 0.5 15.523 0.5 10C0.5 4.477 4.977 0 10.5 0C16.023 0 20.5 4.477 20.5 10C20.5 15.523 16.023 20 10.5 20ZM9.503 14L16.573 6.929L15.159 5.515L9.503 11.172L6.674 8.343L5.26 9.757L9.503 14Z" fill="#00632B"/>
                                    </svg>
                                    <slot> New login detected</slot>
                                    </div>
                                    <span class="notify-time">Just now</span>
                                </div>
                            </div>
      </div>
      <div class="footer">
        <Footer/>
      </div>
    </div>
    
    </template>
    
    <script>
    import { RouterLink } from 'vue-router';
    import Footer from '../components/Footer.vue';
    import PostCard from '../components/JobCard.vue';
    import NavBar from '../components/NavBar.vue';
    import ProfileNavBar from '../components/ProfileNavBar.vue';
    import { reactive } from 'vue';
    import LeftNav from '../components/LeftNav.vue';
    import themeStore from '@/theme/theme';
    
    
        export default {
            components:{ PostCard, NavBar, ProfileNavBar, Footer, RouterLink, LeftNav },
            setup(){
          const toggleTheme = themeStore.toggleTheme;
                return{
                    themeStore,
                    toggleTheme,
                }
              },
        }
    </script>       
    
    
    <style scoped>
    .notification{
      width: 90%;
      font-size: 0.6em;
    }
    .insights-content, .Page-contents{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        width: 100%;
        font-size: 1.8em !important;
        text-align: center;
    }
    .notify{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px;
    width: 100%;
}

.notify:hover{
    background: var(--app-hover);
}
    @media only screen and (max-width: 600px) {
      .notification{
      width: 100%;
    }
    }
    </style>
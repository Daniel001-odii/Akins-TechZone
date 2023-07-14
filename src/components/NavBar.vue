<template>    
    <div v-if="!userIsLoggedIn">
        <nav class="Tz-navbar container-fluid">
            <div class="Tz-brand-area">
                    
                    <RouterLink to="/"  class="navbar-brand">
                        <img class="nav-img" src="../components/Logos_icons/techzone.png">
                    </RouterLink>
            

                    <div class="nav-contents"> 
                        <div class="Tz-nav-links">
                            <span><slot name="action-1"><RouterLink to="/jobs">Find Work</RouterLink></slot></span>
                            <span><slot name="action-2"><RouterLink to="/client/dashboard">Hire Talent</RouterLink></slot></span>
                        </div>
                    </div>
            </div>

            <div class="search"><Search/></div>
        
                <div class="nav-auth-buttons">
                    <button  @click="toggleDropdown" class="cust-btn login">
                        <span>Sign in</span>
                    <div class="login-options" v-show="isDropdownOpen">
                        <RouterLink to="/employer/login"><div class="options">As Employer</div></RouterLink>
                        <RouterLink to="/login"><div class="options">As Talent</div></RouterLink>
                    </div>
                    </button>
                    <button @click="toggleDropdown" class="cust-btn signUp">
                    <span>Sign Up</span>
                    <div class="signup-options" v-show="isDropdownOpen">
                        <RouterLink to="/employer/signup"><div class="options">As Employer</div></RouterLink>
                        <RouterLink to="/talent-signUp"><div class="options">As Talent</div></RouterLink>
                    </div>
                    </button>
                </div>

                    <div class="nav-toggler">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 33 20" fill="none" class="menu-toggle" @click="showMenu = !showMenu">
                            <path d="M1.94727 1.75464H31.6308" stroke="#292D32" stroke-width="1.9789" stroke-linecap="round"/>
                            <path d="M1.94727 10.0001H31.6308" stroke="#292D32" stroke-width="1.9789" stroke-linecap="round"/>
                            <path d="M1.94727 18.2455H31.6308" stroke="#292D32" stroke-width="1.9789" stroke-linecap="round"/>
                        </svg>
                    </div>
                
                
           
    </nav>

    <transition name="slide">
            <div class="menu-from-nav" :class="{ 'navActive': showMenu }" v-if="showMenu">
            <div class="menu-header">
                <RouterLink to="/"  class="navbar-brand">
                    <img class="nav-img" src="../components/Logos_icons/techzone.png">
                </RouterLink>
                    <span class="closeBtn" @click="showMenu=false">&times;</span>
            </div>

            <RouterLink to="/jobs" class="menu-item"><div><span class="menu-item-label">Find Job</span></div></RouterLink>
            <RouterLink to="/client" class="menu-item"><div><span class="menu-item-label">Hire Talent</span></div></RouterLink>
                <div class="menu-item">
                    <div class="menu-item-label" @click="signup_options =!signup_options; signin_options=false"><span>Sign Up</span> 
                        <span>
                        <i v-if="!signup_options" class="bi bi-caret-down-fill"></i>
                        <i v-if="signup_options" class="bi bi-caret-up-fill"></i>
                        </span>
                    </div>
                </div>
                    <div class="sub-signUp menu-item" v-if="signup_options">
                        <RouterLink to="/employer/login" class="options"><div>As Employer</div></RouterLink>
                        <RouterLink to="/login" class="options"><div>As Talent</div></RouterLink>
                    </div>
                <div class="menu-item">
                    <div class="menu-item-label" @click="signin_options =!signin_options; signup_options=false"><span>Sign In</span> 
                        <span>
                        <i v-if="!signin_options" class="bi bi-caret-down-fill"></i>
                        <i v-if="signin_options" class="bi bi-caret-up-fill"></i>
                        </span>
                    </div>
                </div>
                    <div class="sub-signUp menu-item" v-if="signin_options">
                        <RouterLink to="/employer/login" class="options"><div>As Employer</div></RouterLink>
                        <RouterLink to="/login" class="options"><div>As Talent</div></RouterLink>
                    </div>

            </div>
        </transition>
</div>

<div v-if="userIsLoggedIn">
<nav class="Tz-navbar">
        <div class="Tz-brand-area">
                
                <span v-if="!userIsLoggedIn">
                    <RouterLink to="/jobs"  class="navbar-brand"><img class="nav-img" src="../components/Logos_icons/techzone.png"></RouterLink>
                </span>
                <span v-if="userIsLoggedIn">
                    <RouterLink to="/"  class="navbar-brand"><img class="nav-img" src="../components/Logos_icons/techzone.png"></RouterLink>
                </span>
                <div class="nav-contents">
                    <div class="Tz-nav-links">
                            <span><slot name="action-1"><RouterLink to="/jobs">Find Work</RouterLink></slot></span>
                            <!-- <span><slot name="action-2"><RouterLink to="/client/dashboard">Hire Talent</RouterLink></slot></span> -->
                    </div>
                </div>
        </div>


        <div class="search"><Search/></div>

    
                    <div class="Tz-nav-actions">
                            <span class="notifications">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 40 40" fill="none">
                                    <circle cx="20.0459" cy="20" r="17.5375" stroke="#4E79BC" stroke-width="3.05"/>
                                    <path d="M27.7264 24.3451H29.5765V26.1953H11.0747V24.3451H12.9249V17.8695C12.9249 15.9067 13.7046 14.0243 15.0925 12.6364C16.4804 11.2485 18.3628 10.4688 20.3256 10.4688C22.2884 10.4688 24.1708 11.2485 25.5587 12.6364C26.9466 14.0243 27.7264 15.9067 27.7264 17.8695V24.3451ZM25.8762 24.3451V17.8695C25.8762 16.3974 25.2914 14.9856 24.2505 13.9447C23.2095 12.9037 21.7977 12.3189 20.3256 12.3189C18.8535 12.3189 17.4417 12.9037 16.4008 13.9447C15.3599 14.9856 14.7751 16.3974 14.7751 17.8695V24.3451H25.8762ZM17.5504 28.0455H23.1009V29.8957H17.5504V28.0455Z" fill="#4E79BC"/>
                                </svg>
                            
                                <!---notifications modal-->
                                <div class="notification-modal">
                                    <div class="notifications-header">Notifications</div>
                                    <div class="notify">
                                        <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 21 20" fill="none">
                                            <path d="M10.5 20C4.977 20 0.5 15.523 0.5 10C0.5 4.477 4.977 0 10.5 0C16.023 0 20.5 4.477 20.5 10C20.5 15.523 16.023 20 10.5 20ZM9.503 14L16.573 6.929L15.159 5.515L9.503 11.172L6.674 8.343L5.26 9.757L9.503 14Z" fill="#00632B"/>
                                        </svg>
                                        <slot name="notification-item"> New login detected</slot>
                                        </div>
                                        <span class="notify-time">Just now</span>
                                    </div>
                                    
                                    <div class="notifications-footer"><RouterLink to="/notifications"> See all Notifications</RouterLink></div>
                                </div>
                            </span>
                           
                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="20" viewBox="0 0 5 28" fill="none">
                            <path d="M4.80859 25.4375C4.80859 26.6956 3.77922 27.725 2.52109 27.725C1.26297 27.725 0.233594 26.6956 0.233594 25.4375C0.233594 24.1794 1.26297 23.15 2.52109 23.15C3.77922 23.15 4.80859 24.1794 4.80859 25.4375ZM4.80859 2.56247C4.80859 3.8206 3.77922 4.84997 2.52109 4.84997C1.26297 4.84997 0.233594 3.8206 0.233594 2.56247C0.233594 1.30435 1.26297 0.274974 2.52109 0.274974C3.77922 0.274974 4.80859 1.30435 4.80859 2.56247ZM4.80859 14C4.80859 15.2581 3.77922 16.2875 2.52109 16.2875C1.26297 16.2875 0.233594 15.2581 0.233594 14C0.233594 12.7418 1.26297 11.7125 2.52109 11.7125C3.77922 11.7125 4.80859 12.7418 4.80859 14Z" fill="#45494F"/>
                        </svg>
                        
                        <!--Logged in user credential display-->
                        <div class="user-menu-toggle" style="width: 150px; display:flex; flex-direction: row; justify-content: center; align-items: center; gap: 8px; margin-right: 10px;">
                            <div @click="userMenuIsShown=!userMenuIsShown" class="tz-user-thumbnail"></div>
                            <span  style="font-size: 12px;">Youre signed in! <br/><button class="logout">user@email.com</button> <br/></span>
                        
                            <div class="tz-user-menu">
                                <RouterLink to="/user/profile"><div class="tz-menu-conent">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M12.3337 13V11.6667C12.3337 10.9594 12.0527 10.2811 11.5526 9.78105C11.0525 9.28095 10.3742 9 9.66699 9H4.33366C3.62641 9 2.94814 9.28095 2.44804 9.78105C1.94794 10.2811 1.66699 10.9594 1.66699 11.6667V13M9.66699 3.66667C9.66699 5.13943 8.47308 6.33333 7.00033 6.33333C5.52757 6.33333 4.33366 5.13943 4.33366 3.66667C4.33366 2.19391 5.52757 1 7.00033 1C8.47308 1 9.66699 2.19391 9.66699 3.66667Z" stroke="#344054" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    View profile</div>
                                </RouterLink>
                                <div class="tz-menu-conent">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <g clip-path="url(#clip0_834_6624)">
                                    <path d="M8.00033 9.99996C9.10489 9.99996 10.0003 9.10453 10.0003 7.99996C10.0003 6.89539 9.10489 5.99996 8.00033 5.99996C6.89576 5.99996 6.00033 6.89539 6.00033 7.99996C6.00033 9.10453 6.89576 9.99996 8.00033 9.99996Z" stroke="#344054" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M12.9337 9.99996C12.8449 10.201 12.8184 10.4241 12.8577 10.6404C12.8969 10.8566 13 11.0562 13.1537 11.2133L13.1937 11.2533C13.3176 11.3771 13.416 11.5242 13.4831 11.686C13.5502 11.8479 13.5847 12.0214 13.5847 12.1966C13.5847 12.3718 13.5502 12.5453 13.4831 12.7072C13.416 12.8691 13.3176 13.0161 13.1937 13.14C13.0698 13.2639 12.9228 13.3623 12.7609 13.4294C12.599 13.4965 12.4255 13.531 12.2503 13.531C12.0751 13.531 11.9016 13.4965 11.7397 13.4294C11.5779 13.3623 11.4308 13.2639 11.307 13.14L11.267 13.1C11.1099 12.9463 10.9103 12.8432 10.6941 12.804C10.4778 12.7647 10.2547 12.7912 10.0537 12.88C9.85648 12.9645 9.68831 13.1048 9.56986 13.2836C9.45141 13.4625 9.38785 13.6721 9.38699 13.8866V14C9.38699 14.3536 9.24652 14.6927 8.99647 14.9428C8.74642 15.1928 8.40728 15.3333 8.05366 15.3333C7.70004 15.3333 7.3609 15.1928 7.11085 14.9428C6.8608 14.6927 6.72033 14.3536 6.72033 14V13.94C6.71516 13.7193 6.64374 13.5053 6.51533 13.3258C6.38693 13.1462 6.20748 13.0095 6.00033 12.9333C5.79925 12.8445 5.5762 12.8181 5.35993 12.8573C5.14367 12.8965 4.94411 12.9996 4.78699 13.1533L4.74699 13.1933C4.62316 13.3173 4.47611 13.4156 4.31425 13.4827C4.15238 13.5498 3.97888 13.5843 3.80366 13.5843C3.62844 13.5843 3.45494 13.5498 3.29307 13.4827C3.13121 13.4156 2.98416 13.3173 2.86033 13.1933C2.73636 13.0695 2.63801 12.9224 2.57091 12.7605C2.50381 12.5987 2.46928 12.4252 2.46928 12.25C2.46928 12.0747 2.50381 11.9012 2.57091 11.7394C2.63801 11.5775 2.73636 11.4305 2.86033 11.3066L2.90033 11.2666C3.05402 11.1095 3.15712 10.9099 3.19633 10.6937C3.23554 10.4774 3.20907 10.2544 3.12033 10.0533C3.03582 9.85611 2.8955 9.68795 2.71664 9.5695C2.53778 9.45105 2.32818 9.38748 2.11366 9.38663H2.00033C1.6467 9.38663 1.30756 9.24615 1.05752 8.9961C0.807468 8.74605 0.666992 8.40691 0.666992 8.05329C0.666992 7.69967 0.807468 7.36053 1.05752 7.11048C1.30756 6.86043 1.6467 6.71996 2.00033 6.71996H2.06033C2.28099 6.7148 2.495 6.64337 2.67452 6.51497C2.85405 6.38656 2.9908 6.20712 3.06699 5.99996C3.15574 5.79888 3.18221 5.57583 3.143 5.35957C3.10378 5.1433 3.00068 4.94375 2.84699 4.78663L2.80699 4.74663C2.68302 4.62279 2.58468 4.47574 2.51758 4.31388C2.45048 4.15202 2.41594 3.97851 2.41594 3.80329C2.41594 3.62807 2.45048 3.45457 2.51758 3.29271C2.58468 3.13084 2.68302 2.98379 2.80699 2.85996C2.93082 2.73599 3.07787 2.63765 3.23974 2.57055C3.4016 2.50345 3.5751 2.46891 3.75033 2.46891C3.92555 2.46891 4.09905 2.50345 4.26091 2.57055C4.42278 2.63765 4.56983 2.73599 4.69366 2.85996L4.73366 2.89996C4.89078 3.05365 5.09034 3.15675 5.3066 3.19596C5.52286 3.23517 5.74591 3.2087 5.94699 3.11996H6.00033C6.1975 3.03545 6.36567 2.89513 6.48412 2.71627C6.60257 2.53741 6.66614 2.32782 6.66699 2.11329V1.99996C6.66699 1.64634 6.80747 1.3072 7.05752 1.05715C7.30756 0.807102 7.6467 0.666626 8.00033 0.666626C8.35395 0.666626 8.69309 0.807102 8.94313 1.05715C9.19318 1.3072 9.33366 1.64634 9.33366 1.99996V2.05996C9.33451 2.27448 9.39808 2.48408 9.51653 2.66294C9.63498 2.8418 9.80315 2.98212 10.0003 3.06663C10.2014 3.15537 10.4245 3.18184 10.6407 3.14263C10.857 3.10342 11.0565 3.00032 11.2137 2.84663L11.2537 2.80663C11.3775 2.68266 11.5245 2.58431 11.6864 2.51721C11.8483 2.45011 12.0218 2.41558 12.197 2.41558C12.3722 2.41558 12.5457 2.45011 12.7076 2.51721C12.8694 2.58431 13.0165 2.68266 13.1403 2.80663C13.2643 2.93046 13.3626 3.07751 13.4297 3.23937C13.4968 3.40124 13.5314 3.57474 13.5314 3.74996C13.5314 3.92518 13.4968 4.09868 13.4297 4.26055C13.3626 4.42241 13.2643 4.56946 13.1403 4.69329L13.1003 4.73329C12.9466 4.89041 12.8435 5.08997 12.8043 5.30623C12.7651 5.5225 12.7916 5.74555 12.8803 5.94663V5.99996C12.9648 6.19714 13.1052 6.3653 13.284 6.48375C13.4629 6.6022 13.6725 6.66577 13.887 6.66663H14.0003C14.3539 6.66663 14.6931 6.8071 14.9431 7.05715C15.1932 7.3072 15.3337 7.64634 15.3337 7.99996C15.3337 8.35358 15.1932 8.69272 14.9431 8.94277C14.6931 9.19282 14.3539 9.33329 14.0003 9.33329H13.9403C13.7258 9.33415 13.5162 9.39771 13.3373 9.51616C13.1585 9.63461 13.0182 9.80278 12.9337 9.99996Z" stroke="#344054" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                    <defs><clipPath id="clip0_834_6624"><rect width="16" height="16" fill="white"/></clipPath></defs>
                                    </svg>
                                    Settings</div>
                                <RouterLink to="/support">
                                    <div class="tz-menu-conent">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M6.05967 6.00004C6.21641 5.55449 6.52578 5.17878 6.93298 4.93946C7.34018 4.70015 7.81894 4.61267 8.28446 4.69252C8.74998 4.77236 9.17222 5.01439 9.47639 5.37573C9.78057 5.73706 9.94705 6.19439 9.94634 6.66671C9.94634 8.00004 7.94634 8.66671 7.94634 8.66671M7.99967 11.3334H8.00634M14.6663 8.00004C14.6663 11.6819 11.6816 14.6667 7.99967 14.6667C4.31778 14.6667 1.33301 11.6819 1.33301 8.00004C1.33301 4.31814 4.31778 1.33337 7.99967 1.33337C11.6816 1.33337 14.6663 4.31814 14.6663 8.00004Z" stroke="#344054" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    Support</div>
                                </RouterLink>
                                <div @click="logout" class="tz-menu-conent">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M5 13H2.33333C1.97971 13 1.64057 12.8595 1.39052 12.6095C1.14048 12.3594 1 12.0203 1 11.6667V2.33333C1 1.97971 1.14048 1.64057 1.39052 1.39052C1.64057 1.14048 1.97971 1 2.33333 1H5M9.66667 10.3333L13 7M13 7L9.66667 3.66667M13 7H5" stroke="#344054" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    Log out</div>
                            </div>
                        </div>
                    </div>
        <!-- </div> -->
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 33 20" fill="none"  class="menu-toggle"  @click="showMenu = !showMenu">
                    <path d="M1.94727 1.75464H31.6308" stroke="#292D32" stroke-width="1.9789" stroke-linecap="round"/>
                    <path d="M1.94727 10.0001H31.6308" stroke="#292D32" stroke-width="1.9789" stroke-linecap="round"/>
                    <path d="M1.94727 18.2455H31.6308" stroke="#292D32" stroke-width="1.9789" stroke-linecap="round"/>
                </svg>
    </nav>

<transition name="slide">
    <div class="menu-from-nav" :class="{ 'navActive': showMenu }" v-if="showMenu">
       <div class="menu-header">
        <!-- <RouterLink to="/"  class="navbar-brand">
            <img class="nav-img" src="../components/Logos_icons/techzone.png">
        </RouterLink> -->
        <!--now you have to decide which item is preffered to appear at the top of the menu-->
        <Search/>
            <span class="closeBtn" @click="showMenu=false">&times;</span>
       </div>

       <RouterLink to="/jobs" class="menu-item">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 25 26" fill="none">
            <path d="M6.25 5.5V1.75C6.25 1.41848 6.3817 1.10054 6.61612 0.866116C6.85054 0.631696 7.16848 0.5 7.5 0.5H17.5C17.8315 0.5 18.1495 0.631696 18.3839 0.866116C18.6183 1.10054 18.75 1.41848 18.75 1.75V5.5H23.75C24.0815 5.5 24.3995 5.6317 24.6339 5.86612C24.8683 6.10054 25 6.41848 25 6.75V24.25C25 24.5815 24.8683 24.8995 24.6339 25.1339C24.3995 25.3683 24.0815 25.5 23.75 25.5H1.25C0.918479 25.5 0.600537 25.3683 0.366116 25.1339C0.131696 24.8995 0 24.5815 0 24.25V6.75C0 6.41848 0.131696 6.10054 0.366116 5.86612C0.600537 5.6317 0.918479 5.5 1.25 5.5H6.25ZM2.5 19.25V23H22.5V19.25H2.5ZM2.5 16.75H22.5V8H2.5V16.75ZM8.75 3V5.5H16.25V3H8.75ZM11.25 13H13.75V15.5H11.25V13Z" fill="#4E79BC"/>
            </svg>
            <span class="menu-item-label">Work Explorer</span>
            </div>
        </RouterLink>

        <RouterLink to="/savedJobs" class="menu-item">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 21 22" fill="none">
            <path d="M0.767317 8.00682C0.257317 7.80182 0.263317 7.49682 0.801317 7.31782L19.8873 0.95582C20.4163 0.77982 20.7193 1.07582 20.5713 1.59382L15.1173 20.6798C14.9673 21.2088 14.6423 21.2328 14.4003 20.7498L9.84432 11.6368L0.767317 8.00682ZM5.65732 7.80682L11.2933 10.0618L14.3333 16.1438L17.8793 3.73382L5.65632 7.80682H5.65732Z" fill="#45494F"/>
            </svg>
            <span class="menu-item-label">Saved Jobs</span>
        </div>
        </RouterLink>
       
        <RouterLink to="/notifications" class="menu-item">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 40 40" fill="none">
                            <circle cx="20.0459" cy="20" r="17.5375" stroke="#4E79BC" stroke-width="3.05"/>
                            <path d="M27.7264 24.3451H29.5765V26.1953H11.0747V24.3451H12.9249V17.8695C12.9249 15.9067 13.7046 14.0243 15.0925 12.6364C16.4804 11.2485 18.3628 10.4688 20.3256 10.4688C22.2884 10.4688 24.1708 11.2485 25.5587 12.6364C26.9466 14.0243 27.7264 15.9067 27.7264 17.8695V24.3451ZM25.8762 24.3451V17.8695C25.8762 16.3974 25.2914 14.9856 24.2505 13.9447C23.2095 12.9037 21.7977 12.3189 20.3256 12.3189C18.8535 12.3189 17.4417 12.9037 16.4008 13.9447C15.3599 14.9856 14.7751 16.3974 14.7751 17.8695V24.3451H25.8762ZM17.5504 28.0455H23.1009V29.8957H17.5504V28.0455Z" fill="#4E79BC"/>
                        </svg>
            <span class="menu-item-label">Notifications</span>
        </div>
        </RouterLink>

        <RouterLink to="/support" class="menu-item">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 39 40" fill="none">
                            <path d="M19.1709 39.0625C8.64268 39.0625 0.108398 30.5282 0.108398 20C0.108398 9.47178 8.64268 0.9375 19.1709 0.9375C29.6991 0.9375 38.2334 9.47178 38.2334 20C38.2334 30.5282 29.6991 39.0625 19.1709 39.0625ZM19.1709 35.25C23.2155 35.25 27.0943 33.6433 29.9543 30.7834C32.8142 27.9234 34.4209 24.0446 34.4209 20C34.4209 15.9554 32.8142 12.0766 29.9543 9.21662C27.0943 6.35669 23.2155 4.75 19.1709 4.75C15.1263 4.75 11.2474 6.35669 8.38752 9.21662C5.52759 12.0766 3.9209 15.9554 3.9209 20C3.9209 24.0446 5.52759 27.9234 8.38752 30.7834C11.2474 33.6433 15.1263 35.25 19.1709 35.25V35.25ZM17.2646 25.7188H21.0771V29.5312H17.2646V25.7188ZM21.0771 22.583V23.8125H17.2646V20.9531C17.2646 20.4476 17.4655 19.9627 17.823 19.6052C18.1805 19.2477 18.6653 19.0469 19.1709 19.0469C19.7124 19.0468 20.2428 18.893 20.7003 18.6033C21.1579 18.3137 21.5237 17.9 21.7553 17.4105C21.987 16.921 22.0748 16.3758 22.0087 15.8384C21.9426 15.3009 21.7252 14.7932 21.3818 14.3745C21.0385 13.9557 20.5833 13.6431 20.0692 13.4729C19.5551 13.3028 19.0032 13.2821 18.4778 13.4133C17.9524 13.5446 17.4751 13.8223 17.1014 14.2142C16.7277 14.6061 16.4729 15.096 16.3668 15.6271L12.6267 14.8779C12.8586 13.7191 13.394 12.6426 14.1783 11.7585C14.9625 10.8744 15.9675 10.2144 17.0904 9.84602C18.2133 9.47761 19.4139 9.414 20.5695 9.66167C21.725 9.90935 22.7941 10.4594 23.6674 11.2557C24.5407 12.052 25.1869 13.0658 25.5399 14.1937C25.8929 15.3215 25.9401 16.5229 25.6767 17.675C25.4132 18.827 24.8486 19.8885 24.0405 20.7508C23.2323 21.6131 22.2097 22.2454 21.0771 22.583V22.583Z" fill="#45494F"/>
                        </svg>
            <span class="menu-item-label">Help & Support</span>
        </div>
        </RouterLink>

        <RouterLink to="/user/profile" class="menu-item">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 51 50" fill="none">
                            <circle cx="25.8086" cy="25" r="25" fill="#4E79BC"/>
                            <path d="M18.0367 34L24.4173 16.3588H26.9671L33.3477 34H31.0419L29.3095 29.1688H22.0993L20.3303 34H18.0367ZM22.6727 27.0948H28.7117L25.7105 18.5914L22.6727 27.0948Z" fill="white"/>
                        </svg>
            <span class="menu-item-label">Profile Settings</span>
        </div>
        </RouterLink>

        <span class="menu-item">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 51 50" fill="none">
                            <circle cx="25.8086" cy="25" r="25" fill="#4E79BC"/>
                            <path d="M18.0367 34L24.4173 16.3588H26.9671L33.3477 34H31.0419L29.3095 29.1688H22.0993L20.3303 34H18.0367ZM22.6727 27.0948H28.7117L25.7105 18.5914L22.6727 27.0948Z" fill="white"/>
                        </svg>
            <span class="menu-item-label" @click="logout">Logout</span>
        </div>
        </span>
       

    </div>
</transition>
</div> 

    
    
</template>

<script>
import 'bootstrap/dist/js/bootstrap.js';
import Search from './Search.vue';
import { inject } from 'vue';
import { reactive } from 'vue';
import LeftNav from './LeftNav.vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';
import { ref } from 'vue';

const api_url = "https://techzoneapp.herokuapp.com/api/logout";

const token = localStorage.getItem('token');
const isDropdownOpen = ref(false);

export default {
    setup() {
    const isDropdownOpen = ref(false);

    const toggleDropdown = () => {
      isDropdownOpen.value = !isDropdownOpen.value;
    };

    return {
      isDropdownOpen,
      toggleDropdown,
    };
  },
    components:{ Search, LeftNav, RouterLink },
    data(){
        return{
            userMenuIsShown: false,
            showMenu:false,
            userIsLoggedIn: false,
            signup_options:false,
            login_options:false,
            userIsOffline: false,
            stateText: "You are offline",
        };
    },

    methods: {
        
        logout(){
        // axios.post(`${api_url}`)
        // .then(response => {this.$router.push('/')})
        // .catch(error =>{console.error(error)})
        localStorage.removeItem(localStorage.getItem('token'));
        this.$router.push('/');
        },


        checkLoginStatus(){
            const token = localStorage.getItem('token');
            this.userIsLoggedIn = !!token; 
            console.log("user is logged in? " + this.userIsLoggedIn);
            },
        },
        mounted() {
            this.checkLoginStatus();
        },
  }

</script>


<style scoped>
.logout{
    color: blue;
    cursor: pointer;
    border: none;
    background: none;

}
.user-menu-toggle:hover .tz-user-menu{
    display: block;
}
.notification-modal{
    display: none;
    position: absolute;
    width: 300px;
    background: #fff;
    box-shadow: 0px 12px 12px #F1F4F4;
    top: 45px;
    right: 60px;
    font-size: 0.8em;
    z-index: 999999;
}

.notifications:hover .notification-modal{
    display: block;
}

.notifications-header{
    text-align: center;
    padding: 12px;
    border-bottom: 1px solid var(--app-hover);
    margin-bottom: 3px;
}
.notify{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px;
    width: 100% !important;
}
.notify:hover{
    background: var(--app-hover);
}
.notifications-footer{
    padding: 12px;
    border-top: 1px solid var(--app-hover);
    margin-top: 5px;
}
.notifications-footer > *{
    color: var(--app-blue) !important;
}
.notifications:hover{
    cursor: pointer !important;
}



.nav-links{
    display: flex;
    z-index: 9999999999;
    flex-direction: row;
}
.closeBtn{
    color: var(--app-blue);
    font-size: 40px;
    position: absolute; 
    right: 20px;
    top:2px;
    cursor: pointer;
}
.navActive{
    display: block;
}

.menu-from-nav{
    position: fixed;
    top: 0;
    background-color: #fff;
    height: 0px;
    width: 100%;
    z-index: 99999;
    display: none;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    /* gap: 10px; */
}
.menu-header{
    /* background: red; */
    height: 100px;
    width: 100%;
    display: flex;
    padding: 30px;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
}
.menu-header > h2{
    margin: 0;
    padding: 0;
}
.menu-item{
    height: 50px;
    border-bottom: 2px solid var(--app-hover);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 30px;
}
.menu-item > div{
    display: flex;
    gap: 30px;
}
.menu-item:hover{
    background: var(--app-blue);
    /* color: #fff !important; */
}
.menu-from-nav.navActive{
    display: flex;
    height: 100vh;
}


.Tz-navbar{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    width: 100%;
    margin: 0 auto;
    padding: 10px;
    background: #fff;
    border-bottom: 0.5px solid #C8C6C6;
    z-index: 99999;
}

.Tz-nav-actions{
    gap: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: center;
}

.menu-toggle{
    margin: 0px 10px 0px 10px;
    cursor: pointer;
    display: none;
    
}

.cust-actions{
    display: flex;
    flex-direction: row;
}

.menu-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  
  .menu-toggle.active span:nth-child(2) {
    opacity: 0;
  }
  
  .menu-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }
  

  
.nav-toggler{
    display: none;
}
.Tz-brand-area{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.nav-contents{
    /* border: 1px solid red; */
    /* width: 100%; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-left: 20px;
    font-size: 0.9rem;
}

.Tz-nav-links{
    gap: 20px;
    display: flex;
    justify-content: space-between;
    /* width: 180px; */
    font-weight: 50px;
}
.nav-auth-buttons{
    /* width: 300px; */
    /* border: 1px solid goldenrod; */
    justify-content: space-between;
    display: flex;
    gap: 10px;
}

.signUp{
    background: var(--app-blue) !important;
    border-radius: 5px;
}
.signUp:hover .signup-options{
    display: block;
}
.login{
    color: #000;
    border-radius: 5px;
    background: none !important;
}
.login:hover{
    background: var(--app-hover) !important;
}
.login:hover .login-options{
    display: flex;
}

.signup-options{
    display: none;
    position: absolute;
    right: 10px;
    top: 45px;
    background: #fff;
    width: 100px;
    box-shadow: 0px 12px 12px #e2e2e2;
    text-align: right;
}

.tz-user-menu{
    display: none;
    flex-direction: column;
    background: #fff;
    box-shadow: 0px 5px 10px #efefef;
    position: absolute;
    top: 45px;
    right: 70px;
    z-index: 999;
    font-size: 0.9rem;
    overflow-x: hidden;
}

.tz-user-thumbnail{
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background: url("./Logos_icons/dummy_user.png");
}
.tz-user-thumbnail:hover .tz-user-menu{
    background: red;
    display: flex;
}
.tz-menu-conent{
    cursor: pointer;
    padding: 8px;
    padding-right: 30px;
}
.tz-menu-conent > svg{
    margin-right: 8px;
}
.tz-menu-conent:hover{
    background: var(--app-hover);
}

.login-options{
    display: none;
    position: absolute;
    right: 120px;
    top: 45px;
    background: #fff;
    box-shadow: 0px 12px 12px #e2e2e2;
    text-align: right;
}
.options{
    padding: 5px 10px;
    width: 100%;
}
.options:hover{
     background: var(--app-blue);
     color: #fff;
}
.options > div:hover{
    color: #fff;
}
.menu-item-label{
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.sub-signUp{
    flex-direction: column;
    align-items: flex-start;
    padding-left: 50px;
    height: 80px;
    justify-content: center;
    width: 100%;
}
.sub-signUp > div{
    width: 100%;
}
.sub-signUp:hover{
    background: none;
}

/*-----------animation for menu---------------*/
.slide-enter-active,
.slide-leave-active {
  transition: margin 0.3s;
  margin-top: 0;
}

.slide-enter-from,
.slide-leave-to {
  /* opacity: 0; */
  margin-top: -100vh;
}

 /*--meida queries-------*/
 @media only screen and (max-width: 720px) {
    .Tz-navbar{
        justify-content: space-between;
        /* border: 1px solid red; */
    }
    .nav-contents{
        display: none;
    }
    .nav-toggler{
        display: block;
    }
    .search{
        display: none !important;
    }
    .help{
        display: none;
    }
    .Tz-nav-actions{
        width: auto;
        display: none;
        /* flex-direction: column; */
    }
    .Tz-nav-actions > svg{
        margin: 0px 5px 0px 5px;
    }
    .menu-toggle{
        display: inline-block;
    }
    .nav-auth-buttons{
        display: none;
    }
    }
    
</style>

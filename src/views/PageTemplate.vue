
<template>
      <div class="page-grid-container" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
        <div class="Navigation">
            <NavBar :class="['theme-transition', { 'dark': themeStore.darkMode }]"/>
        </div>
      <div class="Left-Nav">
           <LeftNav/>
      </div>
      <div class="Page-header" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
            <div class="page-title"><slot name="page-title">Work Explorer</slot></div>
            <div class="page-filters">
               <PageFilter :class="['theme-transition', { 'dark': themeStore.darkMode }]"/>
            </div>
            <div class="page-tabs">
                <slot name="page-tabs" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
                    <RouterLink to=""><div class="job-category job-category-active">Available Jobs</div></RouterLink>
                    <RouterLink to="/jobs/requested-jobs"><div class="job-category">Requested (0)</div></RouterLink>
                    <RouterLink to="/jobs/assigned-jobs"><div class="job-category">Assigned (5)</div></RouterLink>
                    <RouterLink to="/jobs/completed-jobs"><div class="job-category">Completed (15)</div></RouterLink>
                    <RouterLink to="/jobs/declined-jobs"><div class="job-category">Declined (4)</div></RouterLink>
                </slot>
            </div>
            
      </div>
      <div class="Page-contents">
        <!--this container houses two extra individually scrollable containers: The Job cards(by the left) and the Job full detail (by the right)-->
        <div class="page-content-sub">
            <div class="job-cards-area">
                <slot name="job-cards" :class="['theme-transition', { 'dark': themeStore.darkMode }]"><p>You havent imported any Job cards yet...</p></slot>
            </div>


            <!-------the full job description goes below here... and is made scrollable, except the header part which remains static------>
            <div class="job-details-area card">
                <slot name="job-details" :class="['theme-transition', { 'dark': themeStore.darkMode }]">
                        <div class="job-detail">
                            <div class="job-detail-header">
                                <div class="jdh-left">
                                    <span><b><slot name="job-title">Senior Software Developer (Java)</slot></b></span>
                                    <small>microsot Imc. <i>Stars</i></small>
                                    <span class="jdh-detail">Remote | Posted 1 hour ago</span>
                                    <span class="jdh-detail">N400,000 - N450,000 monthly | Full-Time</span>
                                </div>
                                <div class="jdh-right">
                                    <button class="cust-btn" style="border-radius: 5px;">Apply Here</button>
                                    <i class="bi bi-heart"></i>
                                </div>
                            </div>
                            
                            <div class="job-detail-content">
                                <div class="full-job-description">
                                    <span class="jdh-title">Job Title</span>
                                    We are seeking a highly experienced and skilled Senior Software Developer to join our dynamic team. The successful candidate will have a proven track record in designing and developing software solutions, as well as a strong understanding of programming principles and best practices. The role will involve working collaboratively with other developers, project managers, 
                                    and stakeholders to design and implement high-quality software solutions.
                                </div>

                                <span class="jdh-title">Qualification & Skills</span>
                                <ul>
                                    <li>Lead the development of software solutions, ensuring that they are efficient, scalable, and maintainable.</li>
                                    <li>Collaborate with project managers and other developers to ensure that software solutions are delivered on time and within budget.</li>
                                    <li>Develop high-quality, reliable, and maintainable code using best practices and coding standards.</li>
                                    <li>Conduct code reviews and provide feedback to other developers to ensure that code quality is consistent.</li>
                                    <li>Work collaboratively with other developers to troubleshoot and resolve software defects.</li>
                                    <li>Participate in the design and development of software architecture and infrastructure.</li>
                                    <li>Stay up-to-date with the latest technologies and trends in software development.</li>
                                </ul>
                            </div>
                        </div>
                    </slot>
                </div>
            </div>
        </div>
            <!-- <div class="job-cards-area">
                <slot name="job-cards"><p>You havent imported any Job cards yet...</p></slot>
            </div> -->
    
    </div>
    
    <!-- <div class="footer">
        <Footer/>
    </div> -->
    
    
    </template>
    
    <script>
    import { RouterLink } from 'vue-router';
    import Footer from '../components/Footer.vue';
    import PostCard from '../components/JobCard.vue';
    import NavBar from '../components/NavBar.vue';
    import ProfileNavBar from '../components/ProfileNavBar.vue';
    import { reactive } from 'vue';
    
    import LeftNav from '../components/LeftNav.vue'
    import PageFilter from '../components/PageFilter.vue';

    import themeStore from '@/theme/theme';

    // const Api_url = "https://techzoneapp.herokuapp.com";
    const api_url = "https://techzoneapp.herokuapp.com/api";
    
    
        export default {
            setup(){
                // Accessing themeStore properties and methods
                    const toggleTheme = themeStore.toggleTheme;
                    return{
                        themeStore,
                        toggleTheme,
                    };
            },
            components:{ PostCard, NavBar, ProfileNavBar, Footer, RouterLink, LeftNav, PageFilter }
        }
    </script>       
    
    
    <style>
    </style>
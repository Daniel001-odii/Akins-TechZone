
<template>
      <div class="page-grid-container">
        <div class="Navigation">
            <NavBar/>
        </div>
      <div class="Left-Nav">
           <LeftNav/>
      </div>
      <div class="Page-header">
            <div class="page-title"><slot name="page-title">Work Explorer</slot></div>
            <div class="page-filters">
               <PageFilter/>
            </div>
            <div class="page-tabs">
                <slot name="page-tabs">
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
                <slot name="job-cards"><p>You havent imported any Job cards yet...</p></slot>
            </div>


            <!-------the full job description goes below here... and is made scrollable, except the header part which remains static------>
            <div class="job-details-area card">
                <slot name="job-details">
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
    
    
        export default {
            components:{ PostCard, NavBar, ProfileNavBar, Footer, RouterLink, LeftNav, PageFilter }
        }
    </script>       
    
    
    <style>
        .page-grid-container {
        display: grid;
        grid-template-areas:
            'Navigation Navigation      Navigation      Navigation      Navigation      Navigation'
            'Left-Nav   Page-header     Page-header     Page-header     Page-header     Page-header'
            'Left-Nav   Page-contents   Page-contents   Page-contents   Page-contents   Page-contents'
            'footer     footer          footer          footer          footer          footer';
        gap: 0;
        background: #fff;
        padding: 0;
        grid-template-columns: 180px 1fr;
        grid-template-rows: 60px auto auto;
        height: 100vh;
        }
        
        .Navigation { grid-area: Navigation; }
        .Left-Nav {
            background: #fff; 
            grid-area: Left-Nav;
            display: flex;
            flex-direction: column;
            z-index: 999;
        }
        .Left-Nav:hover > .page-grid-container{
            grid-template-rows: 200px auto auto;
        }
    
        .spacer{
            border-bottom: 1px solid #C8C6C6; 
            height: 61px !important;
            width: 100% !important;
        }
    
        .Page-title { grid-area: Page-title; }
        .Page-header { 
            grid-area: Page-header;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            font-size: 0.8em !important;
            border-bottom: 1px solid #C8C6C6;
            border-left: 1px solid #C8C6C6; 
        }
        .page-title{
            padding: 15px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            width: 100%;
            height: 60px;
            font-size: 20px;
        }
        .page-filters{
            max-height: 45px;
            display: inline-flex;
            gap: 10px;
            overflow-x: scroll;
            width: 100%;
            border-top: 0.5px solid #C8C6C6;
            border-bottom: 0.5px solid #C8C6C6;
        }
        /* hide al scroll bars in page................*/
        *::-webkit-scrollbar{
            display: none;
        }
        .page-tabs {
            display: flex;
            align-items: flex-end;
            gap: 20px;
            padding-left: 20px;
            padding-right: 20px;
            height: 30px;
            width: 100%;
            overflow-x: scroll;
        }
        .job-category{
            width: 100px !important;
            text-align: center;
        }
        .job-category-active{
            border-bottom: 3px solid var(--app-blue);
            color: var(--app-blue);
        }
        .Page-contents { 
            grid-area: Page-contents; 
            /* overflow: scroll; */
            height: 70vh;
            /* border: 2px solid red; */
        }
    
        .filter-menu{
            border: 5px;
            border: 1px solid #C8C6C6;
            padding: 5px;
            border-radius: 5px;
            background: #fff;
            margin: 6px 0px;
            min-width: 100px;
            height: 30px;
        }
    
        .footer{
            grid-area: footer;
            background: #fff;
        }
    
        .job-listings{
            display: flex;
            flex-direction: row;
            padding: 10px;
        }

        .page-content-sub{
            display: flex;
            flex-direction: row;
        }

        /* .job-cards-area{
            height: 68vh;
            width: 50%;
            overflow: scroll;
        } */
        /* .job-details-area{
            margin-top: 10px;
            margin-right: 10px;
            height: 68vh;
            width: 50%;
            font-size: 0.8em;
            border: 1px solid grey;
        } */

        .job-detail-header{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            border-bottom: 1px solid #C8C6C6;
        }
        .jdh-left{
            display: flex;
            flex-direction: column;
            padding: 10px;
            /* border: 2px solid green; */
        }
        .jdh-right{
            display: flex;
            flex-direction: row;
            padding: 10px;
            /* border: 2px solid red; */
            align-items: flex-start;
        }
        .jdh-title{
            font-size: 15px;
            display: block;
            font-weight: bold;
            padding-top: 10px;
        }
        .jdh-detail{
            padding: 5px 0px;
        }
        .job-detail-content{
            padding: 10px;
            overflow-y: scroll;
            height: 52vh; 
            /* border: 2px solid red; */
        }
        /*
        class="job-details-area">
                        <div class="job-detail">
                            <div class="job-detail-header">
                                <div class="jdh-left"*/
        
    
      @media screen and (max-width: 500px) {
        .page-grid-container {
            display: grid;
            grid-template-areas:
                'Navigation      Navigation      Navigation      Navigation      Navigation'
                'Page-header     Page-header     Page-header     Page-header     Page-header'
                'Page-contents   Page-contents   Page-contents   Page-contents   Page-contents'
                'footer          footer          footer          footer          footer';
            }
    .Left-Nav{
        display: none;
    }
        .page-tabs {
            font-size: 0.9em;
            /* border: 1px solid red; */
            overflow: scroll;
        }
      }
    
    @media screen and (max-width: 720px) {
    .page-grid-container {
        grid-template-columns: 80px 1fr;
    }
    }
    </style>
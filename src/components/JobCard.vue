<template>
<!-- <div class="card-content"> -->
    <div class="card job-card" style="" @click="showFullDetail=!showFullDetail">
        <div class="plane">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 25 25" fill="none">
                <path d="M0.485051 8.71692C-0.160649 8.50169 -0.166834 8.1541 0.497421 7.93268L24.1075 0.0630534C24.7619 -0.154654 25.1367 0.21149 24.9536 0.852243L18.2072 24.4611C18.0216 25.1155 17.6444 25.1377 17.3673 24.5168L12.9216 14.5121L20.3434 4.61635L10.4476 12.0382L0.485051 8.71692V8.71692Z" fill="#4E79BC"/>
            </svg>
        </div>
       <p class="job-title">Senior Software  Developer</p>
       <small>Microsoft Inc.</small>
       <div class="job-location">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="15" viewBox="0 0 15 20" fill="none">
            <path d="M7.5 19.0533L2.19667 13.75C1.14779 12.7011 0.433489 11.3647 0.144107 9.90984C-0.145275 8.45499 0.0032557 6.94699 0.570915 5.57655C1.13858 4.20611 2.09987 3.03478 3.33323 2.21067C4.5666 1.38657 6.01664 0.946701 7.5 0.946701C8.98336 0.946701 10.4334 1.38657 11.6668 2.21067C12.9001 3.03478 13.8614 4.20611 14.4291 5.57655C14.9967 6.94699 15.1453 8.45499 14.8559 9.90984C14.5665 11.3647 13.8522 12.7011 12.8033 13.75L7.5 19.0533ZM11.625 12.5716C12.4407 11.7558 12.9963 10.7164 13.2213 9.58486C13.4463 8.45332 13.3308 7.28046 12.8892 6.2146C12.4477 5.14873 11.7 4.23772 10.7408 3.59678C9.78149 2.95583 8.6537 2.61372 7.5 2.61372C6.3463 2.61372 5.21851 2.95583 4.25924 3.59678C3.29996 4.23772 2.55229 5.14873 2.11076 6.2146C1.66923 7.28046 1.55368 8.45332 1.77871 9.58486C2.00374 10.7164 2.55926 11.7558 3.375 12.5716L7.5 16.6966L11.625 12.5716V12.5716ZM7.5 10.1133C7.05797 10.1133 6.63405 9.9377 6.32149 9.62514C6.00893 9.31258 5.83333 8.88866 5.83333 8.44663C5.83333 8.00461 6.00893 7.58068 6.32149 7.26812C6.63405 6.95556 7.05797 6.77997 7.5 6.77997C7.94203 6.77997 8.36595 6.95556 8.67851 7.26812C8.99107 7.58068 9.16667 8.00461 9.16667 8.44663C9.16667 8.88866 8.99107 9.31258 8.67851 9.62514C8.36595 9.9377 7.94203 10.1133 7.5 10.1133Z" fill="#2E2F30"/>
            </svg>
            Remote
        </div>
       <div class="jobFeature">
            <div class="job-pay">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 18" fill="none">
                    <path d="M16 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H16V4ZM2 6V16H18V6H2ZM2 2V4H14V2H2ZM13 10H16V12H13V10Z" fill="#45494F"/>
                </svg>  
                N400,000 - N450,000 monthly</div>
            <div class="job-duration">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20" fill="none">
                    <path d="M5 4V1C5 0.734784 5.10536 0.48043 5.29289 0.292893C5.48043 0.105357 5.73478 0 6 0H14C14.2652 0 14.5196 0.105357 14.7071 0.292893C14.8946 0.48043 15 0.734784 15 1V4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H1C0.734784 20 0.48043 19.8946 0.292893 19.7071C0.105357 19.5196 0 19.2652 0 19V5C0 4.73478 0.105357 4.48043 0.292893 4.29289C0.48043 4.10536 0.734784 4 1 4H5ZM2 15V18H18V15H2ZM2 13H18V6H2V13ZM7 2V4H13V2H7ZM9 10H11V12H9V10Z" fill="white"/>
                </svg>
                Full-Time</div>
       </div>
       <div class="mini-job-description">
        Hi, we are looking for someone to help us create and design several landing pages for different book series.
        The first project is about creating a landing page for a islamic book. 
        If the project has been completed satisfactorily there will be more landing page projects.
        We are looking forward to your news Attached you can find a pdf file with the A+ content of the book which should be used as example.
        The same elements should be used for the landingpage, but NO COPY AND PASTE. The task is not about copy the pdf and insert it into the website, but create the website simular to the pdf using the same elements.
        We can provide all the elements you need to create the content.
       </div>
       <div class="time-posted">Posted 1 hour ago</div>
    </div>

<div class="job-detail-container" :class="{'showFullDetail':showFullDetail}">
    <div class="dismissable-area" @click="showFullDetail=!showFullDetail"></div>
    <div class="job-detail-area">
                    <div class="job-detail" style="">
                        <div class="job-detail-head">
                                    <div class="backBtn" @click="showFullDetail=!showFullDetail">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 47" fill="none">
                                        <path d="M11.484 20.334L27.576 4.24197L23.334 -3.05176e-05L0 23.334L23.334 46.668L27.576 42.426L11.484 26.334H48V20.334H11.484Z" fill="#4E79BC"/>
                                        </svg>
                                    </div>
                                <div class="plane">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 25 25" fill="none">
                                        <path d="M0.485051 8.71692C-0.160649 8.50169 -0.166834 8.1541 0.497421 7.93268L24.1075 0.0630534C24.7619 -0.154654 25.1367 0.21149 24.9536 0.852243L18.2072 24.4611C18.0216 25.1155 17.6444 25.1377 17.3673 24.5168L12.9216 14.5121L20.3434 4.61635L10.4476 12.0382L0.485051 8.71692V8.71692Z" fill="#4E79BC"/>
                                    </svg>
                                </div>
                            <p class="job-title">Senior Software  Developer</p>
                            <small>Microsoft Inc.</small>
                            <div class="job-location">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="15" viewBox="0 0 15 20" fill="none">
                                    <path d="M7.5 19.0533L2.19667 13.75C1.14779 12.7011 0.433489 11.3647 0.144107 9.90984C-0.145275 8.45499 0.0032557 6.94699 0.570915 5.57655C1.13858 4.20611 2.09987 3.03478 3.33323 2.21067C4.5666 1.38657 6.01664 0.946701 7.5 0.946701C8.98336 0.946701 10.4334 1.38657 11.6668 2.21067C12.9001 3.03478 13.8614 4.20611 14.4291 5.57655C14.9967 6.94699 15.1453 8.45499 14.8559 9.90984C14.5665 11.3647 13.8522 12.7011 12.8033 13.75L7.5 19.0533ZM11.625 12.5716C12.4407 11.7558 12.9963 10.7164 13.2213 9.58486C13.4463 8.45332 13.3308 7.28046 12.8892 6.2146C12.4477 5.14873 11.7 4.23772 10.7408 3.59678C9.78149 2.95583 8.6537 2.61372 7.5 2.61372C6.3463 2.61372 5.21851 2.95583 4.25924 3.59678C3.29996 4.23772 2.55229 5.14873 2.11076 6.2146C1.66923 7.28046 1.55368 8.45332 1.77871 9.58486C2.00374 10.7164 2.55926 11.7558 3.375 12.5716L7.5 16.6966L11.625 12.5716V12.5716ZM7.5 10.1133C7.05797 10.1133 6.63405 9.9377 6.32149 9.62514C6.00893 9.31258 5.83333 8.88866 5.83333 8.44663C5.83333 8.00461 6.00893 7.58068 6.32149 7.26812C6.63405 6.95556 7.05797 6.77997 7.5 6.77997C7.94203 6.77997 8.36595 6.95556 8.67851 7.26812C8.99107 7.58068 9.16667 8.00461 9.16667 8.44663C9.16667 8.88866 8.99107 9.31258 8.67851 9.62514C8.36595 9.9377 7.94203 10.1133 7.5 10.1133Z" fill="#2E2F30"/>
                                    </svg>
                                    Remote
                                </div>
                            <div class="jobFeature">
                                    <div class="job-pay">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 18" fill="none">
                                            <path d="M16 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H16V4ZM2 6V16H18V6H2ZM2 2V4H14V2H2ZM13 10H16V12H13V10Z" fill="#45494F"/>
                                        </svg>  
                                        N400,000 - N450,000 monthly</div>
                                    <div class="job-duration">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20" fill="none">
                                            <path d="M5 4V1C5 0.734784 5.10536 0.48043 5.29289 0.292893C5.48043 0.105357 5.73478 0 6 0H14C14.2652 0 14.5196 0.105357 14.7071 0.292893C14.8946 0.48043 15 0.734784 15 1V4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H1C0.734784 20 0.48043 19.8946 0.292893 19.7071C0.105357 19.5196 0 19.2652 0 19V5C0 4.73478 0.105357 4.48043 0.292893 4.29289C0.48043 4.10536 0.734784 4 1 4H5ZM2 15V18H18V15H2ZM2 13H18V6H2V13ZM7 2V4H13V2H7ZM9 10H11V12H9V10Z" fill="white"/>
                                        </svg>
                                        Full-Time</div>

                                        <div class="job-duration applyNow">Apply Now</div>
                            </div>

                    </div>

                <div class="job-detail-content">
                    <div class="mini-job-description">
                        We are seeking a highly experienced and skilled Senior Software Developer to join our dynamic team. 
                        The successful candidate will have a proven track... 
                    </div>
                    <p class="job-title">Job Title</p>
                        <div class="full-job-description">
                            We are seeking a highly experienced and skilled Senior Software Developer to join our dynamic team. The successful candidate will have a proven track record in designing and developing software solutions, as well as a strong understanding of programming principles and best practices. The role will involve working collaboratively with other developers, project managers, 
                            and stakeholders to design and implement high-quality software solutions.
                        </div>
                        <p class="job-title">Qualification & Skills</p>
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
    </div>
</div> 

</template>

<script>
import JobTag from './micro_components/JobTag.vue';
import LocationBadge from './micro_components/locationBadge.vue';
import VerificationBadge from './micro_components/verificationBadge.vue';

    export default {
        props:{
            "content": String,
        },
        components:{JobTag,VerificationBadge,LocationBadge},
        data(){
            return{
                showFullDetail:false
            };
        },
    }
</script>

<style>

.card-content{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
}
.plane{
    position: absolute;
    right: 10px;
    top: 15px;
}
.job-card{
    margin-top: 10px !important;
    display: flex;
    padding: 20px;
    font-size: 0.8em;
    position: relative;
    cursor: pointer;
    width: 98%;
    margin: 0 auto;
}
.job-card:hover{
    border: 1px solid var(--app-blue);
}
.job-title{
    font-weight: bolder;
    padding: 0;
    margin: 0;
}
.job-location{
    padding: 5px;
}
.job-pay{
    background: var(--app-hover);
    padding: 5px;
    border-radius: 5px;
    margin: 5px;
}
.job-duration{
    background: var(--app-blue);
    padding: 5px;
    border-radius: 5px;
    color: #fff;
    margin: 5px;
}
.jobFeature{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 80%;
    flex-wrap: wrap;
}
.job-detail-head{
    padding: 20px;
    border-bottom: 0.5px solid #C8C6C6;
    margin-top: 50px;
    /* border: 1px solid red; */
}
.backBtn{
    border-radius: 50px;
    position: absolute;
    padding: 10px;
    top: 5px;
    left: 10px;
    cursor: pointer;
}
.applyNow{
    position: absolute;
    top: 65px;
    right: 50px;
    width: 100px;
    text-align: center;
}
.backBtn:hover{
    background: var(--app-hover);
}
.job-detail-content{
    padding: 20px;
}
/* .jobFeature-detail{
    border-bottom: 0.5px solid #C8C6C6;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid red;
} */
.mini-job-description{
    padding: 5px;
}
.time-posted{
    padding: 5px;
    color: var(--app-blue);
}

.job-detail-container{
    height: 100%;
    display: none;
    position: fixed;
    z-index: 99999999999999;
    background: #0000005b;
    top: 0;
    left: 0;
    width: 100%;
}
.job-detail-area{
    width: 50% !important;
    z-index: 9999999999 !important;
}
.job-detail-container.showFullDetail{
    display: flex;
    justify-content: flex-end;
}

.job-detail-container.showFullDetail body{
    position: static;
}

.job-detail{
        display: flex;
        /* padding: 30px; */
        font-size: 0.8em;
        height: 100%;
        margin: 0 !important;
        overflow-y: scroll;
        background: #fff;
        border-top-left-radius: 10px !important;
        flex-direction: column;
        position: relative;
    }

.dismissable-area{
    height: 100%;
    /* width: 50%; */
}


             /*--meida queries-------*/
@media only screen and (max-width: 600px) {
    .job-detail-area{
        width: 100% !important;
    }
    .dismissable-area{display: none;}
    .job-detail{
        border-radius: 0px !important;
    }
}


@media only screen and (max-width: 365px) {
    .applyNow{
        display: none;
    }
}

@media only screen and (max-width: 1150px) {
    .job-detail-area{
    width: 75%;
    }
}
</style>
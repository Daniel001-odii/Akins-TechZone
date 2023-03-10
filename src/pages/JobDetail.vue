<template>
        <NavBar>
            <ProfileNavBar/>
        </NavBar>
        <div class="container">
            <div class="head-section">
                <div style="display: flex; flex-direction: row; align-items: center;">
                    <RouterLink to="/jobs" style="color:red"><i class="bi bi-arrow-left-circle-fill"></i></RouterLink>
                    <div class="second">
                        <p>DESIGN</p>
                        <h1>Senior Software Designer</h1>
                        <p>Microsoft - Full time</p>
                    </div>
                </div>

                <div class="third"> 
                    <button class="cust-btn apply-btn">Apply Here <i class="bi bi-arrow-up-right-square" style="color: #fff; font-size: 1em;"></i></button>
                    <i class="bi bi-heart" style="font-size: 1.3em;"></i>
                </div>
            </div>
            <p class="h4" style="position: relative; top: -30px; border-bottom: 2px solid blue; width: 155px; left: 38px;">JOB DETAILS</p>

            <div class="body-section">
                <div class="main-content">
                    <div class="tz-companyImage"></div>
                    <h5>Job Title</h5>
                    <p style="background: #F1F4F4; padding: 10px;">Senior Software Designer</p>
                    <br/>
                    <h5>Job Description</h5>
                    <P>We are seeking a highly experienced and skilled Senior Software Developer to join our dynamic team. 
                        The successful candidate will have a proven track record in designing and developing software solutions,
                         as well as a strong understanding of programming principles and best practices. 
                         The role will involve working collaboratively with other developers, 
                        project managers, and stakeholders to design and implement high-quality software solutions.</P>
                    
                    <br/>
                    <h5>Responsibilities</h5>
                    <ul>
                        <li>Lead the development of software solutions, ensuring that they are efficient, scalable, and maintainable.</li>
                        <li>Collaborate with project managers and other developers to ensure that software solutions are delivered on time and within budget.</li>
                        <li>Develop high-quality, reliable, and maintainable code using best practices and coding standards.</li>
                        <li>Conduct code reviews and provide feedback to other developers to ensure that code quality is consistent.</li>
                        <li>Work collaboratively with other developers to troubleshoot and resolve software defects.</li>
                        <li>Participate in the design and development of software architecture and infrastructure.</li>
                        <li>Stay up-to-date with the latest technologies and trends in software development.</li>
                    </ul>

                    <br/>
                    <h5>Qualification & Skills</h5>
                    <ul>
                        <li>Lead the development of software solutions, ensuring that they are efficient, scalable, and maintainable.</li>
                        <li>Collaborate with project managers and other developers to ensure that software solutions are delivered on time and within budget.</li>
                        <li>Develop high-quality, reliable, and maintainable code using best practices and coding standards.</li>
                        <li>Conduct code reviews and provide feedback to other developers to ensure that code quality is consistent.</li>
                        <li>Work collaboratively with other developers to troubleshoot and resolve software defects.</li>
                        <li>Participate in the design and development of software architecture and infrastructure.</li>
                        <li>Stay up-to-date with the latest technologies and trends in software development.</li>
                    </ul>

                    <br/>
                    <P>We are seeking a highly experienced and skilled Senior Software Developer to join our dynamic team. 
                        The successful candidate will have a proven track record in designing and developing software solutions,
                         as well as a strong understanding of programming principles and best practices. 
                    </P>
                </div>
                <div class="left-side">
                    <div class="first-left">
                        <h3>Other Details</h3> 
                        <br/>
                        Job Creation Date <br/>
                        <h6>6th March, 2023</h6>
                    </div>

                    <div class="second-left">
                        <div class="left-sub">
                        <p>Recruitment Period</p>
                        <h6>6th March, 2023 - 20th March 2023</h6>
                        </div>

                        <div class="left-sub">
                        <p>Recruiter</p>
                        <h6><i class="bi bi-person-circle"></i>John Doe</h6>
                        </div>

                        <div class="left-sub">
                        <p>Job Type</p>
                        <h6>Full Time</h6>
                        </div>

                        <div class="left-sub">
                        <p>Experience</p>
                        <h6>3+ Years</h6>
                        </div>

                        <div class="left-sub">
                        <p>Location</p>
                        <h6><i class="bi bi-geo-alt-fill"></i>Remote</h6>
                        </div>
                    </div>

                    <p>Last updated</p>
                    <h6><i class="bi bi-clock"></i>30 minutes ago</h6>


                </div>

                <button class="cust-btn rescue-btn" style="position: sticky;">Apply now <i class="bi bi-arrow-up-right-square" style="color: #fff; font-size: 1em;"></i></button>
            </div>
        </div>

        <Footer/>

</template>

<script>
import NavBar from '../components/NavBar.vue';
import ProfileNavBar from '../components/ProfileNavBar.vue';
import Footer from '../components/Footer.vue';


export default {
    components: {NavBar, ProfileNavBar, Footer },
}

</script>


<style scoped>
i{
    font-size: 2em;
    color: var(--app-blue);
}

p{
    padding: 0px;
    margin: 0px;
}
h6 > i{
    font-size: 1em;
}

h5{
    /* padding-bottom: 10px;
    border-bottom: 1px dotted var(--app-grey); */
}
   .container{
    margin-top: 80px;
   }

   .head-section{
    border-bottom: 0.5px solid #8C8989;
    /* border-top: 0.5px solid #8C8989; */
    padding: 10px;
    padding-bottom: 50px !important;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    /* height: 150px; */
   }

.third{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.third > i{
    padding-left: 10px;
}

   .body-section{
    display: flex;
    flex-direction: row;
    /* border: 1px solid red; */
    justify-content: space-between;
   }

   .tz-companyImage{
    height: 200px;
    width: 100%;
    background: url("https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?cs=srgb&dl=pexels-pixabay-269077.jpg&fm=jpg");
    background-size: cover;
    background-position: center;
    margin-bottom: 20px;
    border-radius: 5px;
   }
   .main-content{
    max-width: 950px;
    padding: 20px;
    border-radius: 10px;
    background: #fff;
    margin-top: 20px;
    /* overflow-y: scroll; */
    /* height: 750px; */
   }
   .left-side{
    padding: 20px;
    border-radius: 10px;
    background: #fff;
    margin-top: 20px;
    max-width: 350px;
    min-width: 300px;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-height: 650px;
   }

   .second-left{
    display: flex;
    flex-direction: column;
    width: 60%;
    justify-content: space-between;
    border-top: 1px dotted var(--app-blue);
    border-bottom: 1px dotted var(--app-blue);
    flex-wrap: wrap;
    margin: 10px 0px;
    padding: 10px 0px;
    /* height: 400px; */
    width: 100%;
   }

   .left-sub{
    /* border: 1px solid var(--app-grey); */
    padding: 10px 0px;
   }

   .rescue-btn{
    margin-top: 10px; display: none;
   }

   @media only screen and (max-width: 1200px) {
    .body-section{
        flex-direction: column;
    }
    .main-content{
        max-width: 100% !important;
        width: 100% !important;
    }
    .left-side{
        width: 100%;
        min-width: 100%;
        margin-left: 0px;
        /* flex-direction: center; */
        align-items: flex-start;
    }
    .second-left{
        flex-direction: row;
        height: auto !important;
    }
   }

   @media only screen and (max-width: 1000px) {
    .second-left{
        flex-direction: column;
    }
   }

   @media only screen and (max-width: 800px) {
        .apply-btn{
            display: none;
        }
        .rescue-btn{
            display: block;
            position: -webkit-sticky;
            position: sticky;
            /* top: 50px; */
            bottom: 10px;
            box-shadow: 1px 5px 6px #b9b9b9;
            /* border: 1px solid red; */
        }
   }
</style>
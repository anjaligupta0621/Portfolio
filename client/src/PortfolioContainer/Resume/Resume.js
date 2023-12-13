import React, { useState } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';

import education from '../../assets/Resume/education.svg';
import interests from '../../assets/Resume/interests.svg';
import programmingskills from '../../assets/Resume/programming-skills.svg';
import projects from '../../assets/Resume/projects.svg';
import workhistory from '../../assets/Resume/work-history.svg';

import './Resume.css';

function Resume(props) {

    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carouselOffsetStyle, setCarouselOffsetStyle] = useState({});

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) {
            return
        }
        Animations.animations.fadeInScreen(props.id);
    };

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const ResumeHeading = (props) => {
        return (
        <div className='resume-heading'>
            <div className='resume-main-heading'>
                <div className='heading-bullet'></div>
                    <span>{props.heading ? props.heading : ''}</span>
                    {props.fromDate && props.toDate ? (
                        <div className='heading-date'>
                            {props.fromDate + '-' + props.toDate}
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className='resume-sub-heading'>
                        <span>{props.subHeading ? props.subHeading : ''}</span>
                </div>
                <div className='resume-heading-description'>
                    <span>{props.description ? props.description : ''}</span>
                </div>
            </div>
        )
    };

    const resumeBullets = [
        {label: "Education", logoSrc: education},
        {label: "Work History", logoSrc: workhistory},
        {label: "Programming Skills", logoSrc: programmingskills},
        {label: "Projects", logoSrc: projects},
        {label: "Interests", logoSrc: interests},
    ];

    const programmingSkills = [
        {skill:"Javascript", rating: 100},
        {skill:"React JS", rating: 100},
        {skill:"Python", rating: 100},
        {skill:"React Native", rating: 95},
        {skill:"MySQL", rating: 95},
        {skill:"Node JS", rating: 95},
        {skill:"MongoDB", rating: 95},
        {skill:"Express JS", rating: 95},
        {skill:"Salesforce", rating: 85},
        {skill:"WordPress", rating: 90},
    ];

    const projectDetails = [
        {
            title: "SpendWise",
            duration: {fromDate: "2023", toDate: "2023"},
            description: "An expense tracking mobile application to manage expenses and budget.",
            subHeading: "Technologies Used: React Native, NodeJS, MongoDB, ExpressJS, Git"
        },
        {
            title: "Cooking Assistant",
            duration: {fromDate: "2023", toDate: "2023"},
            description: "A web application that lets you use your voice to talk to YouTube videos while cooking.",
            subHeading: "Technologies Used: ReactJS, Python, Flask, Git"
        },
        // {
        //     title: "Personal Portfolio Website",
        //     duration: {fromDate: "2022", toDate: "2023"},
        //     description: "A website to showcase my skills and give an overview about me.",
        //     subHeading: "Technologies Used: React JS, Bootstrap"
        // },
        {
            title: "EasyConnect",
            duration: {fromDate: "2022", toDate: "2022"},
            description: "A web application that allows candidates to apply for jobs and recruiters to shortlist candidates based on their skills",
            subHeading: "Technologies Used: React JS, Golang, Git"
        } 
    ];

    const resumeDetails = [
        <div className='resume-screen-container' key="education">
            <ResumeHeading 
                heading = {"University of Florida, United States"}
                subHeading = {"MS (Master of Science) in Computer Science"}
                fromDate = {"2022"}
                toDate = {"2023"}
            />
            <ResumeHeading 
                heading = {"Jaypee Institute of Information Technology, India"}
                subHeading = {"Bachelor of Technology (BTech) in Computer Science and Engineering"}
                fromDate = {"2015"}
                toDate = {"2019"}
            />
        </div>,
        <div className='resume-screen-container' key='work-experience'>
            <ResumeHeading 
                heading = {"UF Innovate, Florida, United States"}
                subHeading = {"Software Developer"}
                fromDate = {"2022"}
                toDate = {"2022"}
            />
            <div className='experience-description'>
                    <span className='resume-description-text'>
                        - Developed and launched a web application that helped city administration manage and review construction designs, achieving a significant increase in efficiency by automating 80% of the manual review process. 
                    </span>
                    <br />
                    <span className='resume-description-text'>
                        - Utilized Material UI to design an intuitive user interface for the application, enhancing user experience and visual appeal.
                    </span>
                    <br />
                    <span className='resume-description-text'>
                        - Spearheaded the implementation of document handling features in React.JS, enabling efficient file uploads, downloads, and management, resulting in a 30% reduction in document processing time and improved collaboration across teams.
                    </span>
                    <br />
                    <span className='resume-description-text'>
                        - Exemplified Agile project management by organizing GitHub Issues, assigning tasks, and tracking progress across Sprints.
                    </span>
            </div>
            <ResumeHeading 
                heading = {"Wipro Limited, India"}
                subHeading = {"Software Engineer (Project Engineer)"}
                fromDate = {"2019"}
                toDate = {"2021"}
            />
            <div className='experience-description'>
                    <span className='resume-description-text'>
                        - Developed Python automation scripts that reduced manual effort by 20%, optimizing workflow and team productivity.
                    </span>
                    <br />
                    <span className='resume-description-text'>
                        - Analyzed marketing campaign trends using DB2 database and harnessed Python libraries (pandas/numPy) to collect, preprocess, and manipulate data which resulted in enhanced insights for marketing initiatives.
                    </span>
                    <br />
                    <span className='resume-description-text'>
                        - Crafted advanced SQL queries to effectively monitor various tools and applications within the FileNet system, ensuring smooth operation and optimal performance.
                    </span>
            </div>
        </div>,
            
            <div
                className='resume-screen-container programming-skills-container' 
                key='programming-skills'
            >
                {programmingSkills.map((skill, index) => (
                    <div className='skill-parent' key={index}>
                        <div className='heading-bullet'></div>
                        <span>{skill.skill}</span>
                        <div className='skill-percentage'>
                            <div style={{width: skill.rating + "%"}}
                            className="active-percentage">

                            </div>
                        </div>
                    </div>
                ))}
            </div>,
            <div className='resume-screen-container' key='projects'>
                {projectDetails.map((projectDetails, index) => (
                    <ResumeHeading
                        key = {index}
                        heading = {projectDetails.title}
                        subHeading = {projectDetails.subHeading}
                        description = {projectDetails.description}
                        fromDate = {projectDetails.duration.fromDate}
                        toDate = {projectDetails.duration.toDate}
                    />
                ))}
            </div>,
            <div className='resume-screen-container' key='interests'>
                <ResumeHeading 
                    heading = "Reading"
                    description = "Apart from writing code, I like to read."
                />
                <ResumeHeading 
                    heading = "Travelling"
                    description = "I love exploring new places."
                />
                <ResumeHeading 
                    heading = "Creating"
                    description = "I have a creative side and love art and hand lettering."
                />
            </div>
    ];

    const handleCarousel = (index) => {
        let offsetHeight = 360;
        let newCarouselOffset = {
            style: {transform: "translateY("+ index * offsetHeight * -1 + "px)"}
        };
        setCarouselOffsetStyle(newCarouselOffset);
        setSelectedBulletIndex(index);
    };

    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
            <div
            onClick = {() => handleCarousel(index)}
            className = {index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
            key = {index}
            >
                <img className='bullet-logo'
                src={bullet.logoSrc}
                alt='B' />
                <span className='bullet-label'>{bullet.label}</span>
            </div>
        ))
    }

    const getResumeScreens = () => {
        return (
            <div
                style={carouselOffsetStyle.style} 
                className='resume-details-carousel'>
                    {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
        );
    };

    return (
        <div className='resume-container screen-container fade-in' id={props.id || ''}>
            <div className='resume-content'>
                <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'} />
                <div className='resume-card'>
                    <div className='resume-bullets'>
                        <div className='bullet-container'>
                            <div className='bullet-icons'></div>
                            <div className='bullets'>{getBullets()}</div>
                        </div>
                    </div>
                    <div className='resume-bullet-details'>{getResumeScreens()}</div>
                </div>
            </div>
            
        </div>
    );
}

export default Resume;
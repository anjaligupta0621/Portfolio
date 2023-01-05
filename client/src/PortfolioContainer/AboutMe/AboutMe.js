import React, {useEffect} from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './AboutMe.css';

function AboutMe(props) {

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) {
            return
        }
        Animations.animations.fadeInScreen(props.id);
    }

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const SCREEN_CONSTANTS = {
        description: "I am a Computer Science Graduate student at the University of Florida. I have a keen interest in Software Development, Web Development, Data Science, Data Analytics, and Data Visualisation. I am actively looking for an internship position with a company that takes data-driven decisions to innovate and develop products so that I can enhance my knowledge and skills and give my best for the growth of the company.",
        highlights: {
            bullets: [
                "Full Stack Web Development",
                "Interactive Frontend as per the design",
                "React.Js",
                "Building REST API",
                "Managing Databases",
                "MERN Stack Development",
            ],
            heading: "Here are a few Highlights:",
        }
    }

    const renderHighlights = () => {
        return (
            SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
                <div className='highlight' key={i}>
                    <div className='highlight-blob'></div>
                    <span>{value}</span>
                </div>
            ))
        )
    }
    return (
        <div className='about-me-container screen-container fade-in' id={props.id || ""}>
            <div className='about-me-parent'>
                <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'} />
                <div className='about-me-card'>
                    <div className='about-me-profile'></div>
                    <div className='about-me-details'>
                        <span className='about-me-description'>{SCREEN_CONSTANTS.description}</span>
                        <div className='about-me-highlights'>
                            <div className='highlight-heading'>
                                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                            </div>
                            {renderHighlights()}
                        </div>
                        <div className='about-me-options'>
                            <button className='btn primary-btn'
                                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                            >
                                {""}
                                Hire Me{" "}
                            </button>
                            <a href="Anjali_Gupta_Resume.pdf" download="Anjali Gupta.pdf">
                                <button className='btn highlighted-btn'>
                                    Get Resume
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
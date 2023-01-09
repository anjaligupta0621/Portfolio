import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import ScrollService from '../../../utilities/ScrollService';
import './Profile.css';

function Profile(props) {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href='https://www.linkedin.com/in/anjaligupta0621'>
                                <i className='fa fa-linkedin-square'></i>
                            </a>
                            <a href='https://www.github.com/anjaligupta0621'>
                                <i className='fa fa-github'></i>
                            </a>
                            <a href='https://www.instagram.com/anjali.gupta31/'>
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href='https://www.facebook.com/anjali.gupta.33449138/'>
                                <i className='fa fa-facebook-square'></i>
                            </a>
                            <a href='https://twitter.com/AnjaliGupta2106'>
                                <i className='fa fa-twitter'></i>
                            </a>
                        </div>
                    </div>

                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'm <span className='highlighted-text'>Anjali Gupta</span>
                        </span>
                    </div>

                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <TypeAnimation 
                                    repeat={Infinity}
                                    sequence={[
                                        'Computer Science Graduate Student 🎓', 
                                        1000, 
                                        'Full Stack Developer 🖥', 
                                        1000,
                                        'MERN Stack Developer 📲',
                                        1000,
                                        'University of Florida 💻',
                                        1000,
                                      ]}
                                />
                            </h1>
                            <span className='project-role-tagline'>
                                Knack of building applications using MERN Stack, have a good hand at Python.
                            </span>
                        </span>
                    </div>

                    <div className='profile-options'>
                        <button className='btn primary-btn'
                            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                        >
                            {""}
                            Hire Me{" "}
                        </button>
                        <a href="Resume_AnjaliGupta.pdf" download="Anjali Gupta.pdf">
                            <button className='btn highlighted-btn'>
                                Get Resume
                            </button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'></div>
                </div>
            </div>  
        </div>
    );
}

export default Profile;
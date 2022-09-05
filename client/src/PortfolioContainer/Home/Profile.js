import React from 'react';

function Profile(props) {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
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
            </div>  
        </div>
    );
}

export default Profile;
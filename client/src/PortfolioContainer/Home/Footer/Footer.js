import React from 'react';
import './Footer.css';
import shapeBg from '../../../assets/Home/shape-bg.png';

function Footer(props) {
    return (
        <div className='footer-container'>
            <div className='footer-parent'>
                <img 
                    src={shapeBg} 
                    alt="no internet connection"
                />
            </div> 
            
        </div>
    );
}

export default Footer;
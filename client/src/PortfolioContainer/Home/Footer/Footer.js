import React from 'react';
import './Footer.css';

function Footer(props) {
    return (
        <div className='footer-container'>
            <div className='footer-parent'>
                <img 
                    src={"/shape-bg.png"} 
                    alt="no internet connection"
                />
            </div> 
            
        </div>
    );
}

export default Footer;
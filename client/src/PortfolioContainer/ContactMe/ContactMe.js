import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import axios from 'axios';
import {toast} from 'react-toastify';

import imgBack from "../../../src/images/mailz.jpeg";
import load1 from "../../../src/images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import './ContactMe.css';

function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) {
      return;
    }
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
        let data = {
            name,
            email,
            message,
        };
        setBool(true);
        const res = await axios.post(`./contact`, data);
        if (name.length === 0 || email.length === 0 || message.length === 0) {
            setBanner(res.data.msg)
            toast.error(res.data.msg)
            setBool(false)
        }else if (res.status === 200) {
            setBanner(res.data.msg)
            toast.success(res.data.msg)
            setBool(false)
            setName("");
            setEmail("");
            setMessage("");
        }
    } catch (error) {
        console.log(error);
    }

  }


  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading title={"Contact Me"} subHeading={"Let's Get In Touch"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            {" "}
            <TypeAnimation
              repeat={Infinity}
              sequence={["Get In Touch 📧", 1000]}
            />
          </h2>
          <a href="https://www.linkedin.com/in/anjaligupta0621">
            <i className="fa fa-linkedin-square"></i>
          </a>
          <a href="https://www.github.com/anjaligupta0621">
            <i className="fa fa-github"></i>
          </a>
          <a href="https://www.instagram.com/anjali.gupta31/">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/anjali.gupta.33449138/">
            <i className="fa fa-facebook-square"></i>
          </a>
          <a href="https://twitter.com/AnjaliGupta2106">
            <i className="fa fa-twitter"></i>
          </a>
        </div>
        <div className="back-form">
            <div className="img-back">
                <h4>Send Your Email Here!</h4>
                <img src={imgBack} alt="Image not found" />
            </div>
            <form onSubmit={submitForm}>
                <p>{banner}</p>
                <label htmlFor="name">Name</label>
                <input 
                    type='text'
                    onChange={handleName}
                    value={name}
                 />

                <label htmlFor="email">Email</label>
                <input 
                    type='email'
                    onChange={handleEmail}
                    value={email}
                 />

                <label htmlFor="message">Message</label>
                <textarea 
                    type='text'
                    onChange={handleMessage}
                    value={message}
                 />

                <div className="send-btn">
                    <button type="submit">
                        Send <i className="fa fa-paper-plane" />
                        {bool ? (<b className="load">
                            <img src={load1} alt="Image not responding" />
                        </b>) : ("")}
                    </button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;

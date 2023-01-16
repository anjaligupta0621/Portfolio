import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

import Easyconnect from '../../assets/Testimonial/Easyconnect-logo.png';
import burger from '../../assets/Testimonial/burger-logo.png';
import picaboo from '../../assets/Testimonial/picaboo-logo.png';
import salary from '../../assets/Testimonial/salary-logo.png';

import "./Testimonial.css";

function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) {
      return;
    }
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"Projects"}
        subHeading={"Snippets of what I've built"}
      />
      <section className="testimonial-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Designed a web application that allows candidates to apply for jobs and recruiters to shortlist candidates. 
                      The candidates can apply to a job with a single click, once they are logged in. Also, 
                      Implemented features such as User Session Management, Candidate Shortlisting for recruiters, 
                      Viewing Jobs, and Applying to multiple jobs for the candidates. Lastly, Created APIs and 
                      storage in the backend using Golang and SQLite along with Routing, Error Handling, and 
                      Testing (using Cypress).
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img
                      src={Easyconnect}
                      alt="no internet connection"
                    />
                    <h5>EasyConnect</h5>
                    <p>University of Florida</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Designed a web application that allows its users to create their own burgers by adding various ingredients. Implemented features like 
                      Login/Authentication using Firebase as backend.

                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img
                      src={burger}
                      alt="no internet connection"
                    />
                    <h5>Burger Builder</h5>
                    <p>Personal Project</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Analyzed a dataset to predict salary based on years of experience a person has, using the Simple Linear Regression model.Visualized the predicted results against original results to evaluate the model and it showed 98% accuracy.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img
                      src={salary}
                      alt="no internet connection"
                    />
                    <h5>Salary Prediction</h5>
                    <p>Personal Project</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Developed an application having features that implement Neural Style Transfer and Live Filters with basic photo editing capabilities. Modeled convolution neural networks for applying the style of one image on the content of another image by calculating losses and reducing them thus optimizing the result. Used the VGG-16 network for the same.Implemented Viola-Jones algorithm for face detection which showed 100% accuracy and live filters were applied on the detected face, along with a Face-swap feature.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img
                      src={picaboo}
                      alt="no internet connection"
                    />
                    <h5>Picaboo: An Image Processing Application</h5>
                    <p>Jaypee Institute of Information Technology</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src="img/Testimonial/shape-bg.png" />
      </div>
    </div>
  );
}

export default Testimonial;

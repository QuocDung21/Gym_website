import React from "react";
import "../../Style/start.css";
import startImg from "../../assets/img/trainer.png";
function Start() {
  return (
    <section id="classes">
      <div className="container">
        <div className="start__wrapper">
          <div className="start__img">
            <img
              src={startImg}
              alt=""
              srcset=""
              data-aos="fade-left"
              data-aos-duration="1500"
            />
          </div>
          <div
            className="start__content"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h2 className="section__title">
              Ready to make a <span className="highlights">change ?</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              cum aliquid, consectetur quis et itaque.
            </p>
            <button className="register__btn">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Start;

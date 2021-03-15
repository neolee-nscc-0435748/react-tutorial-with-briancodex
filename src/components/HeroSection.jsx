import React from "react";
import { Button } from "./Button";
import "../App.css";
import "./HeroSection.css";
import heroVideo from "../assets/videos/video-1.mp4";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src={heroVideo} autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
          GET STARTED
        </Button>
        <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
        {/* <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
          GET STARTED
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;

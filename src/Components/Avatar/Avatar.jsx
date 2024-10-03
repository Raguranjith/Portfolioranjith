import React from 'react';
import "./Avatar.css";
import avatar from "../../assets/Avatar.jpg";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import resume from "../../assets/Resume/Ranjith-R.pdf"

function Avatar() {
  return (
    <div id='home' className='avatar'>
        <img src={avatar} alt="avatar-img"/>
        <h1> <span>I'm Ranjith R, </span> Software Engineer
         </h1>
        <p>I'm a Software Tester from Tamil Nadu, with hands-on experience in both frontend and backend technologies.</p>
        <div className="avatar-action">
            <div className="avatar-connect"> 
                <AnchorLink className='anchor-link' offset={50} href='#contact'> Connect with me</AnchorLink>
            </div>
            <div className="avatar-resume">
                <a href={resume} download="Ranjith-Resume.pdf">My resume</a>
            </div>
        </div>
    </div>
  );
}

export default Avatar;

import React from "react";
import githubIcon from '../../assets/icons/GitHub-Mark-Light-120px-plus.png';
import youtubeIcon from '../../assets/icons/youtube-logo-png-2069.png';
import linkedInIcon from '../../assets/icons/LI-In-Bug.png'


export default function Footer() {
    return (
        <footer className="d-flex justify-content-around p-1 mt-5">    
            <h6 className=" mt-5">Website made by Anthony Manzione</h6>
            <div className=" m-2">
                <a target='__blank' href="https://github.com/AJManzione">
                    <img width='40px' src={githubIcon} alt=''></img>
                </a>
                <a target='__blank' href="https://www.youtube.com/@anthonymanzione3137/videos">
                    <img width='130px'src={youtubeIcon} alt=''></img>
                </a>
                <a target='__blank' href="https://www.linkedin.com/in/dev-anthony-manzione/">
                    <img width='50px'src={linkedInIcon} alt=''></img>
                </a>
            </div>
        </footer>
    );
};

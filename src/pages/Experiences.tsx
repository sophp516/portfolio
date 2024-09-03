import React, { useEffect } from 'react';
import Navbar from "../components/Navbar";
import "./Experiences.css";

const Experiences = () => {

    
    return (
        <div className="experiences">
            <Navbar />
            <div className="experiences-container">
                <div className="experiences-div">
                    <p className="experiences-name">WISP (Women <span className="margin1"></span> In <span className="margin1"></span> Stem <span className="margin1"></span> Project) <span className="margin1"></span> Internship</p>
                    <p className="experiences-position">Full Stack Developer</p>
                    <p className="experiences-description">
                        I was selected as one of four students to participate in the Dartmouth Computer Science Department's WISP (Women in STEM Project) internship under the mentorship of Professor Lorie Loeb. As a Full Stack Developer during this internship, I collaborated with three fellow interns to develop a web platform aimed at streamlining course planning and sharing for Dartmouth students. Our team presented the finished prototype at the Karen E. Wetterhahn Science Symposium.
                    </p>
                </div>
                <div className="experiences-div">
                    <p className="experiences-name">DALI<span className="margin1"></span>Lab</p>
                    <p className="experiences-position">Full Stack Developer & Animator</p>
                    <p className="experiences-description"></p>
                </div>
                <div className="experiences-div">
                    <p className="experiences-name">SEEDS Internship</p>
                    <p className="experiences-position">Mobile App Development Intern</p>
                    <p className="experiences-description"></p>
                </div>
                <div className="experiences-div">
                    <p className="experiences-name">DTCG <span className="margin1"></span>(Dartmouth <span className="margin1"></span>Tech <span className="margin1"></span>Consulting <span className="margin1"></span>Group)</p>
                    <p className="experiences-position">Project Lead & Education Chair</p>
                    <p className="experiences-description"></p>
                </div>
            </div>
        </div>
    )
}

export default Experiences;

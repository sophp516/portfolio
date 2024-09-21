import Navbar from "../components/Navbar";
import "./Background.css"

const Background = () => {

    return (
        <div className="background">
            <Navbar />
            <div className="background-container">
                <div className="intro">
                    <div className="intro-bar">
                        <div className="intro-icon-container">
                            <div className="intro-icon">x</div>
                            <div className="intro-icon">-</div>
                        </div>
                    </div>
                    <p className="intro-paragraph"><span className="greeting">Hi! </span>Hi! My name is Sophie Park, and I am a Korean American full stack developer studying Computer Science and Human-Centered Design at Dartmouth College. I have a strong passion for the intersection of technology and design, which drives my commitment to creating engaging user experiences. I thrive in collaborative, multidisciplinary environments. I believe in the power of technology to enhance human interactions, and I’m excited to explore new challenges and opportunities that allow me to blend my technical expertise with my creative interests.</p>
                    <div className="link-div">
                        <div className="link-container">
                            <a href="https://www.linkedin.com/in/sophie-m-park/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </div>
                        <div className="link-container">
                            <a href="https://www.instagram.com/sophp04/">Instagram</a>
                        </div>
                        <div className="link-container">
                            <a href="https://github.com/sophp516">Github</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="background-container2">
                <div className="skills-container">
                    <div className="skills-header">skills</div>
                    <div className="skills-subcontainer">
                        <div className="skills-box">React</div>
                        <div className="skills-box">React Native</div>
                        <div className="skills-box">JavaScript</div>
                        <div className="skills-box">TypeScript</div>
                        <div className="skills-box">Express</div>
                        <div className="skills-box">PostreSQL</div>
                        <div className="skills-box">Node.js</div>
                        <div className="skills-box">Firebase</div>
                        <div className="skills-box">MongoDB</div>
                        <div className="skills-box">Python</div>
                        <div className="skills-box">Java</div>
                        <div className="skills-box">Git</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Background;

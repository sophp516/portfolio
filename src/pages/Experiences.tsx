import Navbar from "../components/Navbar";
import "./Experiences.css";

const Experiences = () => {

    
    return (
        <div className="experiences">
            <Navbar />
            <div className="experiences-container">
                <div className="experiences-div">
                    <div className="experiences-first">
                        <p className="experiences-name">WISP (Women <span className="margin1"></span> In <span className="margin1"></span> Stem <span className="margin1"></span> Project) <span className="margin1"></span> Internship</p>
                        <p className="experiences-date">(Jan 2024 - May 2024)</p>
                    </div>
                    <p className="experiences-position">Full Stack Developer</p>
                    <p className="experiences-description">
                        I was selected as one of four students to participate in the Dartmouth Computer Science Department's WISP (Women in STEM Project) internship under the mentorship of Professor Lorie Loeb. As a Full Stack Developer during this internship, I collaborated with three fellow interns to develop a web platform aimed at streamlining course planning and sharing for Dartmouth students. Our team presented the finished prototype at the Karen E. Wetterhahn Science Symposium.
                    </p>
                </div>
                <div className="experiences-div">
                    <div className="experiences-first">
                        <p className="experiences-name">DALI<span className="margin1"></span>Lab</p>
                        <p className="experiences-date">(Sep 2024 - present)</p>
                    </div>
                    <p className="experiences-position">Full Stack Developer & Animator</p>
                    <p className="experiences-description">
                        As a Full-Stack Developer at the Digital Applied Learning and Innovation Lab (DALI) at Dartmouth College since August 2023, I have collaborated with multidisciplinary teams to design and build a variety of digital solutions, including mobile apps, websites, and VR/AR experiences for lab partners and clients. I develop full-stack applications in fast-paced, 10-week sprints using diverse technologies and frameworks. Currently, I am working on the Smart Microscope project, where I am integrating a machine learning algorithm hosted on a cloud service into a user-friendly web application.
                    </p>
                </div>
                <div className="experiences-div">
                    <div className="experiences-first">
                        <p className="experiences-name">Dandilyonn</p>
                        <p className="experiences-date">(May 2024 - Aug 2024)</p>
                    </div>
                    <p className="experiences-position">Mobile App Development Intern</p>
                    <p className="experiences-description">
                        As a Mobile Application Developer Intern for the Summer Environmental Education Development Program at Dandilyonn from June to August 2024, I collaborated with a team to design and develop Dineable, a React Native app aimed at enhancing campus dining experiences by allowing students to review and share dining hall information. I implemented full-stack features using React Native, Expo, XCode, and Firestore, successfully delivering a functional app based on Figma mockups within a 10-week timeframe. Additionally, I participated in peer review sessions, providing and receiving constructive feedback across multiple teams to improve our collective work.    
                    </p>
                </div>
                <div className="experiences-div">
                    <div className="experiences-first">
                    <p className="experiences-name">DTCG <span className="margin1"></span>(Dartmouth <span className="margin1"></span>Tech <span className="margin1"></span>Consulting <span className="margin1"></span>Group)</p>
                        <p className="experiences-date">(Sep 2023 - present)</p>
                    </div>
                    <p className="experiences-position">Project Lead & Education Chair</p>
                    <p className="experiences-description">
                    As the Project Lead and Education Chair for the Dartmouth Tech Consulting Group (DTCG) at Dartmouth College since March 2024, I have led a team of seven developers on client-pitched full-stack projects. In this role, I coordinate with clients and executive board members to schedule events, manage project timelines, and ensure we meet client needs effectively. Additionally, I conduct workshops on React.js, Firestore, and Git to enhance team members’ technical skills and improve project efficiency.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Experiences;

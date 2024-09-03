import React, { useRef, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import diskImage from "../assets/cd.png";
import projectData from "../assets/Projects.json";
import "./Projects.css";

interface Project {
    id: number,
    name: string,
    techStack: string[],
    description: string,
    image: string,
}

const Projects = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const rotationRef = useRef(0);
    const [projects, setProjects] = useState<Project[]>([]);
    const [selectedProject, setSelectedProject] = useState<number | null>(null);
    const projectAnglesRef = useRef<{ [key: string]: number }>({});

    useEffect(() => {
        setProjects(projectData);
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            const items = container.children;
            const angle = 360 / items.length;
            const radius = container.offsetWidth / 2 - 65; // Adjusted for item size

            Array.from(items).forEach((item, index) => {
                const itemElement = item as HTMLElement;
                const itemAngle = angle * index;
                const itemRadians = (itemAngle * Math.PI) / 180;
                const x = Math.cos(itemRadians) * radius;
                const y = Math.sin(itemRadians) * radius;

                itemElement.style.position = 'absolute';
                itemElement.style.left = `${50 + (x / radius) * 50}%`;
                itemElement.style.top = `${50 + (y / radius) * 50}%`;
                // Set initial rotation to face the center
                itemElement.style.transform = `translate(-50%, -50%) rotate(${itemAngle + 90}deg)`;

                projectAnglesRef.current[projects[index].id] = itemAngle;
            });
        }
    }, [projects]);

    // Effect to handle continuous rotation and auto-correcting rotation
    useEffect(() => {
        let animationFrameId: number;
        let isLeft = false;
        let isRight = false;
        let currentSpeed = 0;
        const targetSpeed = { left: -1, right: 1, stop: 0 };
        const smoothing = 0.02;

        const handleMouseMove = (e: MouseEvent) => {
            if (selectedProject) return; // Stop rotation on selection
            const { clientX } = e;
            const { innerWidth } = window;
            isLeft = clientX < innerWidth / 3;
            isRight = clientX > innerWidth / 3 * 2;
        };

        const animate = () => {
            if (selectedProject === null) { // Only animate if no project is selected
                let targetRotationSpeed = targetSpeed.stop;
                if (isLeft) targetRotationSpeed = targetSpeed.left;
                else if (isRight) targetRotationSpeed = targetSpeed.right;
                currentSpeed += (targetRotationSpeed - currentSpeed) * smoothing;
                rotationRef.current = (rotationRef.current + currentSpeed) % 360;

                if (containerRef.current) {
                    containerRef.current.style.transform = `rotate(${rotationRef.current}deg)`;
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove);
        animationFrameId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [selectedProject]);

    // Effect to handle stopping the rotation when a project is selected
    useEffect(() => {
        let animationFrameId: number;

        const stopRotation = () => {
            if (selectedProject !== null) {
                // Calculate the target angle for the selected project
                const targetAngle = (360 - projectAnglesRef.current[selectedProject] - 90) % 360;
                const diff = targetAngle - rotationRef.current;
                const shortestRotation = (diff + 540) % 360 - 180;
                rotationRef.current += shortestRotation * 0.1;
        
                // If the rotation is close enough to the target, stop the rotation
                if (Math.abs(shortestRotation) < 0.5) {
                    rotationRef.current = targetAngle;
        
                    if (containerRef.current) {
                        containerRef.current.style.transform = `rotate(${rotationRef.current}deg)`;
                    }
                    return; // Stop further animation when the target is reached
                }
        
                if (containerRef.current) {
                    containerRef.current.style.transform = `rotate(${rotationRef.current}deg)`;

                }
            }
        
            animationFrameId = requestAnimationFrame(stopRotation);
        };

        if (selectedProject !== null) {
            animationFrameId = requestAnimationFrame(stopRotation);
        }

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [selectedProject, projects]);

    const handleSelection = (projectNumber: number) => {
        setSelectedProject(selectedProject === projectNumber ? null : projectNumber);
    };

    return (
        <div className="projects">
            <Navbar />
            <div className="project-container">
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                {selectedProject &&
                <div className="selected-container">
                {selectedProject &&
                <div className="description-container">
                    <div className="stack-container">
                        {projects[selectedProject - 1].techStack.map((tech, i) => {
                            return (
                                <div className="stack-bubble" key={i}>
                                    <p>{tech}</p>
                                </div>
                            )
                        })}
                    </div>
                    <p className="project-description">{projects[selectedProject - 1].description}</p>
                </div>}
                </div>}
                <div className="circle-wrapper">
                    <div ref={containerRef} className="circle">
                        {projects.map((projectItem, i) => (
                            <div key={i} className={`project-item ${selectedProject === projectItem.id ? 'selected' : ''}`} onClick={() => handleSelection(projectItem.id)}>
                                <img className="disk-base" src={diskImage} alt="disk" />
                                {projectItem.image && (
                                    <div className="project-image">
                                        <img className={`${selectedProject === projectItem.id ? 'selected' : ''}`} src={projectItem.image} alt={projectItem.name} />
                                    </div>
                                )}
                                <div className="disk-cover">
                                    <p>{projectItem.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;

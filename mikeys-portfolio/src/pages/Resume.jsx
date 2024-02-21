import React from 'react';
import Resume from '../../public/resume.png'


const ResumeSection = () => {
    const developerProficiencies = ['HTML','CSS', 'JavaScript', 'React', 'Bootstrap', 'Node.js', 'Express', 'MySQL', 'MongoDB', 'GraphQL'];

    return (
        <section id="resume" className='resume-section'>
            <h2>Resume</h2>
            <div className="resume-content">
                <a href= {Resume} download>Download My Resume</a>
                <h3>Proficiencies:</h3>
                <ul>
                    {developerProficiencies.map((proficiency, index) => (
                        <li key={index}>{proficiency}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default ResumeSection;
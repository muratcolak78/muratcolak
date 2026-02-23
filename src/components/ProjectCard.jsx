import { FaGithub, FaLinkedin } from 'react-icons/fa'

function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <div className="project-image">
                <img src={project.image || "/placeholder.jpg"} alt={project.title} />
            </div>
            <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                    {project.technologies.map(tech => (
                        <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                </div>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                        <FaGithub /> GitHub
                    </a> <br />
                    <a href={project.linkedin} target="_blank" rel="noopener noreferrer" className="github-link">
                        <FaLinkedin /> Linkedin
                    </a>
                </div>

            </div>
        </div>
    )
}

export default ProjectCard
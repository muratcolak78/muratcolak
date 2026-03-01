import { FaGithub, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';

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

                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                    {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="github-link">
                            <FaExternalLinkAlt /> Live
                        </a>
                    )}

                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                            <FaGithub /> GitHub
                        </a>
                    )}

                    {project.linkedin && (
                        <a href={project.linkedin} target="_blank" rel="noopener noreferrer" className="github-link">
                            <FaLinkedin /> LinkedIn
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
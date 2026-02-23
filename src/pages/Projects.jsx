import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

function Projects() {
    return (
        <div className="projects-page">
            <h1>Meine Projekte</h1>
            <div className="projects-grid">
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    )
}

export default Projects
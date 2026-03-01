import { FaJava, FaPython, FaReact } from 'react-icons/fa';
import { SiSpringboot, SiApachekafka, SiDocker } from 'react-icons/si';
import { Link } from 'react-router-dom';
import Profile from '../components/Profil';
import { projects } from '../data/projects';

function Home() {
    const featured = projects.find(p => p.id === 1) || projects[0];

    return (
        <div className="home">

            {/* HERO */}
            <div className="hero">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Hallo, ich bin Murat Colak</h1>
                        <p className="hero-subtitle">Java Backend Developer (Spring Boot) | SaaS Builder</p>

                        <div className="hero-actions" style={{ display: 'flex', gap: '12px', marginTop: '16px', flexWrap: 'wrap' }}>
                            <Link className="download-btn" to="/projekte">Projekte ansehen</Link>
                            <Link className="download-btn" to="/lebenslauf">Lebenslauf</Link>
                            <Link className="download-btn" to="/kontakt">Kontakt</Link>
                        </div>
                    </div>
                </div>
            </div>

            <Profile />

            {/* FEATURED PRODUCT */}
            <div className="featured">
                <h2>Aktuelles Produkt</h2>
                <div className="featured-card">
                    <div className="featured-left">
                        <h3>{featured.title}</h3>
                        <p>{featured.description}</p>

                        <div className="project-tech" style={{ marginTop: '10px' }}>
                            {featured.technologies.slice(0, 8).map(t => (
                                <span key={t} className="tech-tag">{t}</span>
                            ))}
                        </div>

                        <div style={{ display: 'flex', gap: '12px', marginTop: '16px', flexWrap: 'wrap' }}>
                            {featured.live && (
                                <a className="download-btn" href={featured.live} target="_blank" rel="noopener noreferrer">
                                    Live ausprobieren
                                </a>
                            )}
                            <Link className="download-btn" to="/projekte">Alle Projekte</Link>
                        </div>
                    </div>

                    <div className="featured-right">

                        {featured.video ? (
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="auto"
                                className="featured-video"
                            >
                                <source src={featured.video} type="video/mp4" />
                            </video>
                        ) : (
                            <img
                                src={featured.image || "/placeholder.jpg"}
                                alt={featured.title}
                            />
                        )}

                    </div>
                </div>
            </div>

            {/* TECH STACK */}
            <div className="tech-stack">
                <h2>Technologien</h2>
                <div className="tech-icons">
                    <FaJava className="tech-icon" title="Java" />
                    <SiSpringboot className="tech-icon" title="Spring Boot" />
                    <SiApachekafka className="tech-icon" title="Apache Kafka" />
                    <FaPython className="tech-icon" title="Python" />
                    <FaReact className="tech-icon" title="React" />
                    <SiDocker className="tech-icon" title="Docker" />
                </div>
            </div>

        </div>
    );
}

export default Home;
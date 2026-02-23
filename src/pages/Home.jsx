import { FaJava, FaPython, FaReact } from 'react-icons/fa'
import { SiSpringboot, SiApachekafka, SiDocker } from 'react-icons/si'
import Profile from '../components/Profil'

function Home() {
    return (
        <div className="home">
            <div className="hero">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Hallo, ich bin Murat Colak</h1>
                        <p className="hero-subtitle">Java Backend Developer (Spring Boot)</p>
                    </div>
                    <div className="hero-image">
                        <img src="/images/murat-colak.jpg" alt="Murat Çolak" className="profile-photo" />
                    </div>
                </div>
            </div>

            <Profile />

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
    )
}

export default Home
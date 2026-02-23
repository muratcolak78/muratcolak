import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

function Contact() {
    return (
        <div className="contact">
            <h1>Kontakt</h1>

            <div className="contact-grid">
                <div className="contact-info">
                    <h2>Kontaktdaten</h2>

                    <div className="contact-item">
                        <FaEnvelope className="contact-icon" />
                        <div>
                            <strong>E-Mail:</strong><br />
                            <a href="mailto:colakmuratt78@gmail.com">colakmuratt78@gmail.com</a>
                        </div>
                    </div>

                    <div className="contact-item">
                        <FaGithub className="contact-icon" />
                        <div>
                            <strong>GitHub:</strong><br />
                            <a href="https://github.com/muratcolak78?tab=repositories" target="_blank" rel="noopener noreferrer">
                                github.com/muratcolak78
                            </a>
                        </div>
                    </div>

                    <div className="contact-item">
                        <FaLinkedin className="contact-icon" />
                        <div>
                            <strong>LinkedIn:</strong><br />
                            <a href="https://www.linkedin.com/in/murat-colak-640655232/" target="_blank" rel="noopener noreferrer">
                                linkedin.com/in/murat-colak
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
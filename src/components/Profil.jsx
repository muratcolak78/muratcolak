import './Profile.css'

function Profile() {
    return (
        <div className="profile-container">
            <h2 className="profile-title">Profil</h2>

            <div className="profile-grid">
                <div className="profile-item">
                    <span className="profile-label">Backend:</span>
                    <span className="profile-text">
                        Java Backend Developer (Spring Boot) mit Erfahrung in der Entwicklung
                        und Qualitätssicherung von REST-APIs und Microservices (RabbitMQ, Kafka).
                    </span>
                </div>

                <div className="profile-item">
                    <span className="profile-label">Grundlage:</span>
                    <span className="profile-text">
                        Fundierte Grundlage durch Umschulung zum Fachinformatiker für
                        Anwendungsentwicklung und produktives Praktikum.
                    </span>
                </div>

                <div className="profile-item">
                    <span className="profile-label">Code Qualität:</span>
                    <span className="profile-text">
                        Besonderer Wert auf sauberen, testbaren Code mit Unit- und
                        Integrationstests (JUnit, Mockito).
                    </span>
                </div>

                <div className="profile-item">
                    <span className="profile-label">Weitere Kenntnisse:</span>
                    <span className="profile-text">
                        Python, React, Docker sowie AI-gestützte Systeme (LLM / RAG).
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Profile
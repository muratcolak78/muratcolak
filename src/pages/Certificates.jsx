import { FaExternalLinkAlt, FaAward } from 'react-icons/fa'
import './Certificates.css'
import { certificates } from '../data/certificates';

function Certificates() {


    return (
        <div className="certificates-page">
            <div className="certificates-header">
                <h1>
                    <FaAward className="header-icon" />
                    Meine Zertifizierungen
                </h1>
                <p className="certificates-subtitle">
                    Fachliche Qualifikationen und Weiterbildungen
                </p>
            </div>

            <div className="certificates-stats">
                <div className="stat-card">
                    <span className="stat-number">{certificates.length}</span>
                    <span className="stat-label">Zertifikate</span>
                </div>

                <div className="stat-card">
                    <span className="stat-number">2025</span>
                    <span className="stat-label">Aktuelle Zertifikate</span>
                </div>
            </div>

            <div className="certificates-grid">
                {certificates.map(cert => (
                    <div key={cert.id} className="certificate-card">
                        <div className="certificate-image">
                            <img src={cert.image} alt={cert.title} />
                            <div className="certificate-overlay">
                                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="view-cert-btn">
                                    <FaExternalLinkAlt /> Zertifikat ansehen
                                </a>
                            </div>
                        </div>
                        <div className="certificate-content">
                            <h3>{cert.title}</h3>
                            <div className="certificate-meta">
                                <span className="cert-issuer">{cert.issuer}</span>
                                <span className="cert-date">{cert.date}</span>
                            </div>
                            {cert.credentialId && (
                                <div className="cert-credential">
                                    <strong>Credential ID:</strong> {cert.credentialId}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Certificates
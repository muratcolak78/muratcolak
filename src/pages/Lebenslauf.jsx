import { FaDownload } from 'react-icons/fa'

function Lebenslauf() {
    return (
        <div className="lebenslauf">
            <h1>Lebenslauf</h1>

            <div className="cv-download">
                <a href="/cv-murat-colak.pdf" download className="download-btn">
                    <FaDownload /> Lebenslauf als PDF herunterladen
                </a>
            </div>

            {/* BERUFSERFAHRUNG */}
            <div className="cv-section">
                <h2>Berufserfahrung</h2>

                <div className="cv-item">
                    <div className="cv-date">Jan 2025 – Nov 2025</div>
                    <div className="cv-content">
                        <h3>Backend Developer - Java / Spring Boot (Praktikum)</h3>
                        <div className="cv-company">allCompare GmbH, Aalen</div>
                        <ul>
                            <li>Entwicklung und Erweiterung von REST APIs mit Java und Spring Boot</li>
                            <li>Implementierung von Backend-Sicherheitsmechanismen mit JWT</li>
                            <li>Eventbasierte Kommunikation mit RabbitMQ (Producer / Consumer, Queue Processing)</li>
                            <li>Integration externer Services mit Spring WebClient</li>
                            <li>Transformation von JSON- zu XML-Daten (Jackson, JAXB)</li>
                            <li>Implementierung und Verarbeitung von XML/SOAP-Schnittstellen</li>
                            <li>Erstellung von SOAP-Envelopes inkl. Security-Header</li>
                            <li>Security Token Handling über STS-Schnittstellen (Token-Abruf & Caching)</li>
                            <li>Mitarbeit an Microservice-Architekturen und Schnittstellendesign</li>
                            <li>Entwicklung standardisierter Response- und Fehlerbehandlungsstrukturen</li>
                            <li>Implementierung von Unit- und Integrationstests (JUnit, Mockito) für zentrale Microservice-Komponenten</li>
                        </ul>
                    </div>
                </div>

                <div className="cv-item">
                    <div className="cv-date">Nov 2016 – Jul 2021</div>
                    <div className="cv-content">
                        <h3>Büromitarbeiter</h3>
                        <div className="cv-company">Colak Bau GmbH, Istanbul</div>
                    </div>
                </div>

                <div className="cv-item">
                    <div className="cv-date">Jul 2001 – Okt 2016</div>
                    <div className="cv-content">
                        <h3>Bundesbeamter</h3>
                        <div className="cv-company">Innenministerium der Türkei</div>
                        <ul>
                            <li>2014 – 2016: Polizeikommissar / Dienststellenleiter – Seben</li>
                            <li>2013 – 2014: Einsatzleiter – Regionale Sicherheitskräfte Ankara</li>
                            <li>2010 – 2013: Büroleiter – Polizeidirektion Mardin</li>
                            <li>2005 – 2010: Ausbilder – Polizeiausbildungszentrum Istanbul</li>
                            <li>2001 – 2005: Gruppenleiter – Bereitschaftspolizei Istanbul</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* AUSBILDUNG */}
            <div className="cv-section">
                <h2>Ausbildung</h2>

                <div className="cv-item">
                    <div className="cv-date">Nov 2023 – Nov 2025</div>
                    <div className="cv-content">
                        <h3>Umschulung – Fachinformatiker für Anwendungsentwicklung</h3>
                        <div className="cv-company">Lutz + Grub Academy, Leinfelden-Echterdingen</div>
                        <ul>
                            <li>Objektorientierte Programmierung und Softwareentwicklung (Java, C#, Python – Grundlagen)</li>
                            <li>Datenbankentwicklung und SQL-Programmierung</li>
                            <li>Web-Technologien (HTML, CSS, JavaScript)</li>
                            <li>Systemintegration und Netzwerkarchitekturen</li>
                            <li>Projektmanagement (SCRUM) inkl. IHK-Abschlussprojekt</li>
                        </ul>
                    </div>
                </div>

                <div className="cv-item">
                    <div className="cv-date">Sep 2011 – Jul 2013</div>
                    <div className="cv-content">
                        <h3>Master of Arts – Menschenrechte</h3>
                        <div className="cv-company">Maltepe Universität, Istanbul (anerkannt durch ZAB)</div>
                    </div>
                </div>

                <div className="cv-item">
                    <div className="cv-date">Sep 1997 – Jul 2001</div>
                    <div className="cv-content">
                        <h3>Bachelor of Arts – Sicherheitswissenschaften (Polizeiakademie)</h3>
                        <div className="cv-company">Polizeiakademie Ankara, Türkei (anerkannt durch ZAB)</div>
                    </div>
                </div>
            </div>

            {/* IHK ABSCHLUSSPROJEKT */}
            <div className="cv-section">
                <h2>IHK Abschlussprojekt</h2>
                <div className="cv-item">
                    <div className="cv-date">2025</div>
                    <div className="cv-content">
                        <h3>Microservice & Systemintegration</h3>
                        <p className="project-description">
                            Konzeption und Implementierung eines nachrichtenbasierten Spring Boot Microservices
                            zur Integration externer Versicherungssysteme. Asynchrone Event-Verarbeitung mit RabbitMQ,
                            JSON-Deserialisierung sowie XML-Mapping über JAXB gemäß BiPRO-Standards. Erstellung von
                            SOAP-Envelopes inkl. Security-Token, Anbindung externer Webservices und Verarbeitung der
                            Responses. Durchführung von Unit- und Integrationstests sowie Implementierung von Fehler-
                            und Logging-Mechanismen.
                        </p>
                        <p className="project-techs">
                            <strong>Technologien:</strong> Java, Spring Boot, RabbitMQ, SOAP, REST, XML, JWT
                        </p>
                    </div>
                </div>
            </div>

            {/* ZERTIFIZIERUNGEN */}
            <div className="cv-section">
                <h2>Zertifizierungen</h2>
                <ul className="cert-list">
                    <li>Oracle Certified Associate Java SE 8 Programmer (1Z0-808)</li>
                    <li>Generative AI for Java and Spring Development</li>
                    <li>Oracle SQL Certification</li>
                    <li>Retrieval Augmented Generation (RAG)</li>
                </ul>
            </div>

            {/* SPRACHEN */}
            <div className="cv-section">
                <h2>Sprachen</h2>
                <ul className="language-list">
                    <li><strong>Deutsch:</strong> Fließend in Wort und Schrift</li>
                    <li><strong>Englisch:</strong> Gute Kenntnisse</li>
                    <li><strong>Türkisch:</strong> Muttersprache</li>
                </ul>
            </div>

            {/* SOFTWAREPROJEKTE (kısa özet) */}
            <div className="cv-section">
                <h2>Softwareprojekte (Übersicht)</h2>
                <div className="project-summary">
                    <p><strong>E-Commerce Microservices Demo:</strong> Java, Spring Boot, Kafka, JWT, Docker</p>
                    <p><strong>Excel AI KPI Reporter:</strong> Java, Spring Boot, React, OpenAI API</p>
                    <p><strong>MyBooks Full-Stack:</strong> React, Node.js, Express, SQLite3</p>
                </div>
            </div>

            {/* SOFT SKILLS */}
            <div className="cv-section">
                <h2>Soft Skills</h2>
                <ul className="soft-skills-list">
                    <li>Teamfähigkeit</li>
                    <li>Analytisches Denken</li>
                    <li>Strukturierte Arbeitsweise</li>
                    <li>Zuverlässigkeit</li>
                    <li>Verantwortungsbewusstsein</li>
                </ul>
            </div>
        </div>
    )
}

export default Lebenslauf
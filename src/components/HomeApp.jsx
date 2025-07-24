import React from 'react'
import '../styles/Home.css'
export const HomeApp = () => {

    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><a href="#about">Sobre mi</a></li>
                        <li><a href="#education">Experiencia & Estudios</a></li>
                        <li><a href="#projects">Proyectos</a></li>
                        <li><a href="#skills">Conocimientos</a></li>
                    </ul>
                </nav>
                <h1>Carlos Jesús Ordaz Hoyos</h1>
                <p>Desarrollador Junior Fullstack | TypeScript • React.js • Node.js</p>
                <div>
                    <a className='icon' target='_blank' href="https://www.linkedin.com/in/carlos-jes%C3%BAs-ordaz-hoyos-904576284?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BKFuwo3iORQCvpzWJVBMkUw%3D%3D"><i className="fa-brands fa-linkedin"></i> LinkedIn</a>
                    <a className='icon' href="https://github.com/1234566778899" target='_blank'><i className="fa-brands fa-github"></i>GitHub</a>
                    <a className='icon' href="mailto:ordazhoyos2001@gmail.com" target='_blank'><i className="fa-solid fa-square-envelope"></i>ordazhoyos2001@gmail.com</a>
                    <a className='icon' href="https://carlosordaz.vercel.app/" target='_blank'><i className="fa-solid fa-globe"></i>Portfolio</a>
                </div>
                <img src="https://mattfarley.ca/img/mf-avatar.svg" alt="img" />
            </header>
            <section id='about'>
                <h2>SOBRE MI</h2>
                <br />
                <p>Soy Carlos Ordaz, Bachiller en Ingeniería de Sistemas de Información con 2 años de experiencia como Desarrollador Fullstack especializado en TypeScript, React.js y Node.js. Mi enfoque se centra en crear aplicaciones web escalables, implementar microservicios robustos y aplicar principios de Clean Architecture. Tengo experiencia comprobada mejorando sistemas en un 25% y reduciendo costos de infraestructura en 30%. Busco constantemente oportunidades para crecer profesionalmente y contribuir con soluciones innovadoras en equipos de desarrollo ágiles.</p>
            </section>
            <section id="habilities">
                <div>
                    <h2>ESPECIALIDADES</h2>
                    <div className='skills'>
                        <div>
                            <i className="fa-solid fa-code"></i>
                            <h5 className="title">DESARROLLO FULLSTACK</h5>
                            <p>Desarrollo completo de aplicaciones web usando React.js, TypeScript y Node.js, desde interfaces responsivas hasta APIs robustas y microservicios escalables.</p>
                        </div>
                        <div >
                            <i className="fa-solid fa-cloud"></i>
                            <h5 className="title">ARQUITECTURAS EN LA NUBE</h5>
                            <p>Diseño e implementación de soluciones cloud con AWS, Lambda, API Gateway y EC2, aplicando principios de Clean Architecture y buenas prácticas de DevOps.</p>
                        </div>
                        <div >
                            <i className="fa-solid fa-layer-group"></i>
                            <h5 className="title">MICROSERVICIOS & APIS</h5>
                            <p>Construcción de microservicios escalables y APIs RESTful que procesan miles de transacciones diarias, con testing unitario y documentación técnica completa.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="education">
                <div>
                    <h3 className='text-center'>EXPERIENCIA PROFESIONAL</h3>
                    <br />
                    <div className='contents'>
                        <div className="box">
                            <h6>Agosto 2023 - Julio 2025</h6>
                            <h6 className='main'>Practicante de TI - ACOMO Negocios Financieros S.A.C.</h6>
                            <ul>
                                <li>Desarrollo fullstack con React.js, TypeScript y Node.js, mejorando eficiencia 25%</li>
                                <li>Implementación de microservicios y APIs que procesan +1,000 transacciones diarias</li>
                                <li>Gestión de despliegues AWS (Lambda, API Gateway, EC2), reduciendo costos 30%</li>
                                <li>Automatización de procesos con Python y IA generativa</li>
                                <li>Testing unitario con cobertura superior al 85%</li>
                            </ul>
                        </div>
                        <div className="box">
                            <h6>Agosto 2022 - Agosto 2023</h6>
                            <h6 className='main'>Tutor de Programación - Universidad Peruana de Ciencias Aplicadas (UPC)</h6>
                            <ul>
                                <li>Tutoría personalizada en programación frontend y backend a +50 estudiantes</li>
                                <li>Enseñanza de fundamentos: HTML, CSS, JavaScript, React.js y Node.js</li>
                                <li>Desarrollo de habilidades de resolución de problemas técnicos</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className='text-center'>EDUCACIÓN & CERTIFICACIONES</h3>
                    <br />
                    <div className='contents'>
                        <div className="box">
                            <h6>2020 - 2025</h6>
                            <h6 className='main'>Universidad Peruana de Ciencias Aplicadas (UPC)</h6>
                            <ul>
                                <li>Bachiller en Ingeniería de Sistemas de Información</li>
                                <li>100% de avance académico | Décimo superior</li>
                            </ul>
                        </div>
                        <div className="box">
                            <h6>2025</h6>
                            <h6 className='main'>Certificaciones Técnicas</h6>
                            <ul>
                                <li>Hacking Ético - CIBERTEC</li>
                                <li>Databases and SQL for Data Science with Python - IBM</li>
                                <li>Power BI Avanzado - CIBERTEC</li>
                            </ul>
                        </div>
                        <div className="box">
                            <h6>2021 - Actual</h6>
                            <h6 className='main'>Aprendizaje Continuo</h6>
                            <ul>
                                <li>Desarrollo con TypeScript, React.js, Node.js, AWS</li>
                                <li>Microservicios, Clean Architecture, Testing</li>
                                <li>Plataformas: Udemy, Coursera, Platzi</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section id="projects">
                <h2 className='mt-5'>MIS PROYECTOS FULLSTACK</h2>
                <div className="box">
                    <div className="project">
                        <h5>FLYFAR</h5>
                        <p>Plataforma fullstack de desafíos de programación en tiempo real con arquitectura de microservicios. Soporta +500 usuarios concurrentes.</p>
                        <div className="tools">
                            <span>React.js</span>
                            <span>TypeScript</span>
                            <span>Node.js</span>
                            <span>MongoDB</span>
                            <span>AWS</span>
                        </div>
                        <a href="https://www.flyfar.website" target='_blank'>Visitar web</a>
                    </div>
                    <div className="project">
                        <h5>WASYPAY</h5>
                        <p>MVP fintech con frontend React.js y backend Node.js + TypeScript. Arquitectura de microservicios con contratos inteligentes.</p>
                        <div className="tools">
                            <span>React.js</span>
                            <span>Node.js</span>
                            <span>TypeScript</span>
                            <span>Near Protocol</span>
                            <span>Blockchain</span>
                        </div>
                        <a href="https://github.com/1234566778899/WASYPAY.git" target='_blank'>Código fuente</a>
                    </div>
                    <div className="project">
                        <h5>PREGUNTAS ANÓNIMAS</h5>
                        <p>Aplicación web completa con React.js frontend y Node.js backend. APIs RESTful, autenticación y manejo de estado con Redux.</p>
                        <div className="tools">
                            <span>React.js</span>
                            <span>TypeScript</span>
                            <span>Node.js</span>
                            <span>Socket.io</span>
                            <span>Redux</span>
                        </div>
                        <a href="https://preguntas-anonimas.vercel.app/" target='_blank'>Visitar web</a>
                    </div>
                    <div className="project">
                        <h5>SMARTBUY</h5>
                        <p>Aplicación web financiera fullstack que genera planes de pagos. Frontend React.js con backend Node.js y base de datos MongoDB.</p>
                        <div className="tools">
                            <span>React.js</span>
                            <span>Node.js</span>
                            <span>MongoDB</span>
                            <span>Express</span>
                        </div>
                        <a href="https://github.com/1234566778899/smartbuy-fronted.git" target='_blank'>Código fuente</a>
                    </div>
                    <div className="project">
                        <h5>MIDOC VIRTUAL</h5>
                        <p>Sistema de gestión de inventario para farmacias. Frontend Angular con backend Java Spring Boot y base de datos PostgreSQL.</p>
                        <div className="tools">
                            <span>Angular</span>
                            <span>TypeScript</span>
                            <span>Java Spring Boot</span>
                            <span>PostgreSQL</span>
                        </div>
                        <a href="https://github.com/1234566778899/midoc-final-2022-G2.git" target='_blank'>Código fuente</a>
                    </div>
                    <div className="project">
                        <h5>CALCULADORA MATEMÁTICA</h5>
                        <p>Aplicación web con HTML5, CSS3 y JavaScript ES6+ implementando componentes modulares y buenas prácticas de frontend.</p>
                        <div className="tools">
                            <span>HTML5</span>
                            <span>CSS3</span>
                            <span>JavaScript ES6+</span>
                        </div>
                        <a href="https://1234566778899.github.io/calcMath" target='_blank'>Visitar web</a>
                    </div>
                </div>
            </section>
            <section id="skills">
                <h2 style={{ fontWeight: 'bold', textAlign: 'center' }}>Stack Tecnológico Fullstack</h2>
                <br />
                <div className='items'>
                    <div>
                        <div className='item'>
                            <div className='head'>
                                <span>React.js</span>
                                <span>85%</span>
                            </div>
                            <div className='toolbar'>
                                <div className='percent' style={{ width: '85%' }}></div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='head'>
                                <span>TypeScript</span>
                                <span>80%</span>
                            </div>
                            <div className='toolbar'>
                                <div className='percent' style={{ width: '80%' }}></div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='head'>
                                <span>Node.js</span>
                                <span>85%</span>
                            </div>
                            <div className='toolbar'>
                                <div className='percent' style={{ width: '85%' }}></div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='head'>
                                <span>Express.js</span>
                                <span>80%</span>
                            </div>
                            <div className='toolbar'>
                                <div className='percent' style={{ width: '80%' }}></div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='head'>
                                <span>JavaScript ES6+</span>
                                <span>90%</span>
                            </div>
                            <div className='toolbar'>
                                <div className='percent' style={{ width: '90%' }}></div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='head'>
                                <span>HTML5 & CSS3</span>
                                <span>85%</span>
                            </div>
                            <div className='toolbar'>
                                <div className='percent' style={{ width: '85%' }}></div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='head'>
                                <span>Redux Toolkit</span>
                                <span>75%</span>
                            </div>
                            <div className='toolbar'>
                                <div className='percent' style={{ width: '75%' }}></div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='head'>
                                <span>APIs RESTful</span>
                                <span>85%</span>
                            </div>
                            <div className='toolbar'>
                                <div className='percent' style={{ width: '85%' }}></div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='head'>
                                <span>Microservicios</span>
                                <span>75%</span>
                            </div>
                            <div className='toolbar'>
                                <div className='percent' style={{ width: '75%' }}></div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='head'>
                                <span>Clean Architecture</span>
                                <span>70%</span>
                            </div>
                            <div className='toolbar'>
                                <div className='percent' style={{ width: '70%' }}></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='item'>
                            <div className='head'>
                                <span>MongoDB</span>
                                <span>80%</span>
                            </div>
                            <div className='toolbar'>
                                <div className='percent' style={{ width: '80%' }}></div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='head'>
                                <span>SQL Server</span>
                                <span>75%</span>
                            </div>
                            <div className='toolbar'>
                                <div className='percent' style={{ width: '75%' }}></div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='head'>
                                <span>AWS (Lambda, EC2, API Gateway)</span>
                                <span>70%</span>
                            </div>
                            <div className='toolbar'>
                                <div className='percent' style={{ width: '70%' }}></div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='head'>
                                <span>Git & GitHub</span>
                                <span>80%</span>
                            </div>
                            <div className='toolbar'>
                                <div className='percent' style={{ width: '80%' }}></div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='head'>
                                <span>Jest & Testing</span>
                                <span>65%</span>
                            </div>
                            <div className='toolbar'>
                                <div className='percent' style={{ width: '65%' }}></div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='head'>
                                <span>Docker & CI/CD</span>
                                <span>60%</span>
                            </div>
                            <div className='toolbar'>
                                <div className='percent' style={{ width: '60%' }}></div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='head'>
                                <span>Angular</span>
                                <span>70%</span>
                            </div>
                            <div className='toolbar'>
                                <div className='percent' style={{ width: '70%' }}></div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='head'>
                                <span>Python</span>
                                <span>60%</span>
                            </div>
                            <div className='toolbar'>
                                <div className='percent' style={{ width: '60%' }}></div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='head'>
                                <span>Postman & VS Code</span>
                                <span>85%</span>
                            </div>
                            <div className='toolbar'>
                                <div className='percent' style={{ width: '85%' }}></div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='head'>
                                <span>Scrum & Metodologías Ágiles</span>
                                <span>75%</span>
                            </div>
                            <div className='toolbar'>
                                <div className='percent' style={{ width: '75%' }}></div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <br />
            <br />
            <footer>
                <p style={{ fontSize: '1.5rem' }}>Desarrollando el futuro, una línea de código a la vez.</p>
                <div className='contacts'>
                    <a href="https://www.linkedin.com/in/carlos-jes%C3%BAs-ordaz-hoyos-904576284" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/1234566778899" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="mailto:ordazhoyos2001@gmail.com">
                        <i className="fa-solid fa-square-envelope"></i>
                    </a>
                </div>
                <p>Última actualización: Julio 2025</p>
                <p><span style={{ fontSize: '0.8rem' }}>Desarrollado con React.js por</span> Carlos Ordaz</p>
            </footer>
        </div>
    )
}
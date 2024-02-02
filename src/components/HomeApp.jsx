import React from 'react'
import '../styles/Home.css'
export const HomeApp = () => {

    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><a href="#about">Sobre mi</a></li>
                        <li><a href="#education">Mis estudios</a></li>
                        <li><a href="#projects">Proyectos</a></li>
                        <li><a href="#skills">Conocimientos</a></li>
                    </ul>
                </nav>
                <h1>Carlos Jesús Ordaz Hoyos</h1>
                <p>Estudiante de Ingeniería de Sistemas de Información</p>
                <div>
                    <a className='icon' target='_blank' href="https://www.linkedin.com/in/carlos-jes%C3%BAs-ordaz-hoyos-904576284?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BKFuwo3iORQCvpzWJVBMkUw%3D%3D"><i className="fa-brands fa-linkedin"></i> LinkedIn</a>
                    <a className='icon' href="https://github.com/1234566778899" target='_blank'><i className="fa-brands fa-github"></i>Github</a>
                    <a className='icon' href="mailto:ordazhoyos2001@gmail.com" target='_blank'><i className="fa-solid fa-square-envelope"></i>ordazhoyos2001@gmail.com</a>
                </div>
                <img src="https://mattfarley.ca/img/mf-avatar.svg" alt="img" />
            </header>
            <section id='about'>
                <h2>SOBRE MI</h2>
                <br />
                <p>Soy Carlos Ordaz, estudiante de 8vo ciclo de Ingeniería de Sistemas de Información apasionado por la tecnología y el desarrollo. Mi enfoque se centra en la automatización de procesos y la creación de soluciones innovadoras. Soy ágil para aprender, adaptable y me integro fácilmente en equipos de trabajo. Busco constantemente oportunidades para crecer y contribuir con entusiasmo y habilidades a proyectos desafiantes.</p>
            </section>
            <section id="habilities">
                <div>
                    <h2>HABILIDADES</h2>
                    <div className='skills'>
                        <div>
                            <i className="fa-solid fa-database"></i>
                            <h5 className="title">DISEÑO DE BASE DE DATOS</h5>
                            <p>Diseño y gestión de estructuras de almacenamiento de datos, garantizando la eficiencia y seguridad en la manipulación de la información.</p>
                        </div>
                        <div >
                            <i className="fa-solid fa-laptop-code"></i>
                            <h5 className="title">DESARROLLO DE APLICACIONES WEB</h5>
                            <p>Creación de aplicaciones web interactivas y dinámicas, utilizando tecnologías del lado del cliente y del servidor para ofrecer experiencias online innovadoras.</p>
                        </div>
                        <div >
                            <i className="fa-solid fa-layer-group"></i>
                            <h5 className="title">AUTOMATIZACIÓN DE PROCESOS</h5>
                            <p>Implementación de sistemas automáticos para optimizar procesos, desde scripts hasta soluciones avanzadas de automatización para mejorar la eficiencia.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="education">
                <div>
                    <h3 className='text-center'>EDUCACIÓN</h3>
                    <br />
                    <div className='contents'>
                        <div className="box">
                            <h6>2020 - Actual</h6>
                            <h6 className='main'>Universidad Peruana de Ciencias Aplicadas</h6>
                            <ul>
                                <li>Cursando el 8vo ciclo en la carrera de Ingeniería de Sistemas de Información.</li>
                            </ul>
                        </div>
                        <div className="box">
                            <h6>2023 enero - Actual</h6>
                            <h6 className='main'>Instituto Cultural Peruano Norteamericano (ICPNA)</h6>
                            <ul>
                                <li>Nivel de ingles intermedio (B2)</li>
                            </ul>
                        </div>
                        <div className="box">
                            <h6>2021 - Actual</h6>
                            <h6 className='main'>Plataformas en linea ( Udemy, Coursera, Edteam)</h6>
                            <ul>
                                <li>Aprendizaje de nuevas tecnologías (Flutter, ReactJs, NodeJs, AWS)</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className='text-center'>EXPERIENCIA</h3>
                    <br />
                    <div className='contents'>
                        <div className="box">
                            <h6>2023 agosto - Actual</h6>
                            <h6 className='main'>Practicante de TI en ACOMO</h6>
                            <ul>
                                <li>Desarrollo y mantenimiento de las aplicaciones de la empresa</li>
                                <li>Desarrollo de nuevas integraciones con servicios externos</li>
                                <li>Soporte a las áreas internas de la compañía</li>
                            </ul>
                            <p></p>

                        </div>
                        <div className="box">
                            <h6>2022 agosto- 2022 diciembre</h6>
                            <h6 className='main'>Tutor de Programación en UPC</h6>
                            <ul>
                                <li>Enseñanza personalizada a estudiantes de primeros ciclos en los cursos de programación.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section id="projects">
                <h2 className='mt-5'>MIS PROYECTOS</h2>
                <div className="box">
                    <div className="project">
                        <h5>SMARTBUY</h5>
                        <p>Aplicación web financiera que genera un plan de pagos utilizando el metodo frances vencido ordinario.</p>
                        <div className="tools">
                            <span>React</span>
                            <span>NodeJs</span>
                            <span>MongoDB</span>
                        </div>
                        <a href="https://github.com/1234566778899/smartbuy-fronted.git" target='_blank'>Código fuente</a>
                    </div>
                    <div className="project">
                        <h5>MIDOC VIRTUAL</h5>
                        <p>Aplicación web para gestionar el inventario de farmacias.</p>
                        <div className="tools">
                            <span>Angular</span>
                            <span>Java Spring Boot</span>
                            <span>PostgreSQL</span>
                        </div>
                        <a href="https://github.com/1234566778899/midoc-final-2022-G2.git" target='_blank'>Código fuente</a>
                    </div>
                    <div className="project">
                        <h5>MATECODE</h5>
                        <p>Tienda Online para la compra y venta de proyectos universitarios.</p>
                        <div className="tools">
                            <span>ReactJs</span>
                            <span>Firebase</span>
                            <span>Blob Storage Azure</span>
                        </div>
                        <a href="https://matecodeweb.vercel.app/" target='_blank'>Visitar web</a>
                    </div>
                    <div className="project">
                        <h5>PREGUNTAS ANONIMAS</h5>
                        <p>Juego en linea en tiempo de real para hacer preguntas y respuestas anónimas.</p>
                        <div className="tools">
                            <span>ReactJs</span>
                            <span>NodeJs</span>
                            <span>Socket.io</span>
                        </div>
                        <a href="https://preguntas-anonimas.vercel.app/" target='_blank'>Visitar web</a>
                    </div>
                    <div className="project">
                        <h5>TUTIFRUTI ONLINE</h5>
                        <p>Juego en linea en tiempo real sobre el juego de titufruti clásico.</p>
                        <div className="tools">
                            <span>ReactJs</span>
                            <span>NodeJs</span>
                            <span>Socket.io</span>
                        </div>
                        <a href="https://github.com/1234566778899/react-tutifruti.git" target='_blank'>Código fuente</a>
                    </div>
                    <div className="project">
                        <h5>PROCESADOR EXCEL</h5>
                        <p>Aplicación web para modificar archivos excel usando Javascript y luego exportarlo como un nuevo archivo.</p>
                        <div className="tools">
                            <span>ReactJs</span>
                        </div>
                        <a href="https://procesador-excel.vercel.app/" target='_blank'>Visitar web</a>
                    </div>
                </div>
            </section>
            <section id="skills">
                <h2 style={{ fontWeight: 'bold', textAlign: 'center' }}>Conocimientos de informática</h2>
                <br />
                <div className='items'>
                    <div>
                        <div className='item'>
                            <div className='head'>
                                <span>SQL Server</span>
                                <span>85%</span>
                            </div>
                            <div className='toolbar'>
                                <div className='percent' style={{ width: '85%' }}></div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='head'>
                                <span>Java Spring Boot</span>
                                <span>65%</span>
                            </div>
                            <div className='toolbar'>
                                <div className='percent' style={{ width: '65%' }}></div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='head'>
                                <span>JavaScript</span>
                                <span>95%</span>
                            </div>
                            <div className='toolbar'>
                                <div className='percent' style={{ width: '95%' }}> </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='head'>
                                <span>C# & .Net</span>
                                <span>60%</span>
                            </div>
                            <div className='toolbar'>
                                <div className='percent' style={{ width: '60%' }}> </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='head'>
                                <span>HTML & Css</span>
                                <span>85%</span>
                            </div>
                            <div className='toolbar'>
                                <div className='percent' style={{ width: '85%' }}></div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='head'>
                                <span>MongoDB</span>
                                <span>75%</span>
                            </div>
                            <div className='toolbar'>
                                <div className='percent' style={{ width: '75%' }}></div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='head'>
                                <span>ReactJs</span>
                                <span>80%</span>
                            </div>
                            <div className='toolbar'>
                                <div className='percent' style={{ width: '80%' }}></div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='head'>
                                <span>NodeJs</span>
                                <span>85%</span>
                            </div>
                            <div className='toolbar'>
                                <div className='percent' style={{ width: '85%' }}></div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='head'>
                                <span>Python</span>
                                <span>45%</span>
                            </div>
                            <div className='toolbar'>
                                <div className='percent' style={{ width: '45%' }}> </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='item'>
                            <div className='head'>
                                <span>Excel</span>
                                <span>75%</span>
                            </div>
                            <div className='toolbar'>
                                <div className='percent' style={{ width: '75%' }}></div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='head'>
                                <span>Power BI</span>
                                <span>60%</span>
                            </div>
                            <div className='toolbar'>
                                <div className='percent' style={{ width: '60%' }}></div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='head'>
                                <span>Power Automate</span>
                                <span>55%</span>
                            </div>
                            <div className='toolbar'>
                                <div className='percent' style={{ width: '55%' }}></div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='head'>
                                <span>Figma</span>
                                <span>75%</span>
                            </div>
                            <div className='toolbar'>
                                <div className='percent' style={{ width: '75%' }}> </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='head'>
                                <span>Azure</span>
                                <span>65%</span>
                            </div>
                            <div className='toolbar'>
                                <div className='percent' style={{ width: '65%' }}></div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='head'>
                                <span>Git</span>
                                <span>75%</span>
                            </div>
                            <div className='toolbar'>
                                <div className='percent' style={{ width: '75%' }}></div>
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
                                <span>C++</span>
                                <span>75%</span>
                            </div>
                            <div className='toolbar'>
                                <div className='percent' style={{ width: '75%' }}></div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='head'>
                                <span>Photoshop & Illustrator</span>
                                <span>65%</span>
                            </div>
                            <div className='toolbar'>
                                <div className='percent' style={{ width: '65%' }}> </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <br />
            <br />
            <footer>
                <p style={{ fontSize: '1.5rem' }}>Vivir, aprender y subir de nivel un día a la vez.</p>
                <div className='contacts'>
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-brands fa-github"></i>
                    <i className="fa-solid fa-square-envelope"></i>
                </div>
                <p>Ultima actualización 01/02/2024</p>
                <p><span style={{ fontSize: '0.8rem' }}>made by</span> Carlos Ordaz</p>
            </footer>
        </div>
    )
}

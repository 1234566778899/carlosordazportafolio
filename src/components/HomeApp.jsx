import React, { useEffect, useRef, useState, useCallback } from 'react'
import '../styles/Home.css'

/* ─── Three.js 3D Scene ─── */
const ThreeScene = () => {
    const mountRef = useRef(null)

    useEffect(() => {
        const currentMount = mountRef.current
        let THREE
        let renderer, scene, camera, frameId
        let icosahedron, torus, octahedron
        let particles
        let mouse = { x: 0, y: 0 }

        const init = async () => {
            THREE = await import('three')

            if (!currentMount) return

            const width = currentMount.clientWidth
            const height = currentMount.clientHeight

            scene = new THREE.Scene()
            camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
            camera.position.z = 30

            renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
            renderer.setSize(width, height)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
            renderer.setClearColor(0x000000, 0)
            currentMount.appendChild(renderer.domElement)

            /* Main Icosahedron */
            const icoGeo = new THREE.IcosahedronGeometry(8, 1)
            const icoMat = new THREE.MeshBasicMaterial({
                color: 0x00f0ff,
                wireframe: true,
                transparent: true,
                opacity: 0.25,
            })
            icosahedron = new THREE.Mesh(icoGeo, icoMat)
            scene.add(icosahedron)

            /* Torus */
            const torusGeo = new THREE.TorusGeometry(12, 0.3, 16, 100)
            const torusMat = new THREE.MeshBasicMaterial({
                color: 0x8b5cf6,
                wireframe: true,
                transparent: true,
                opacity: 0.2,
            })
            torus = new THREE.Mesh(torusGeo, torusMat)
            torus.rotation.x = Math.PI / 3
            scene.add(torus)

            /* Octahedron */
            const octGeo = new THREE.OctahedronGeometry(4, 0)
            const octMat = new THREE.MeshBasicMaterial({
                color: 0x00f0ff,
                wireframe: true,
                transparent: true,
                opacity: 0.15,
            })
            octahedron = new THREE.Mesh(octGeo, octMat)
            octahedron.position.set(10, -5, -5)
            scene.add(octahedron)

            /* Particles */
            const particleCount = 600
            const positions = new Float32Array(particleCount * 3)
            for (let i = 0; i < particleCount * 3; i++) {
                positions[i] = (Math.random() - 0.5) * 80
            }
            const particleGeo = new THREE.BufferGeometry()
            particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
            const particleMat = new THREE.PointsMaterial({
                color: 0x00f0ff,
                size: 0.08,
                transparent: true,
                opacity: 0.6,
            })
            particles = new THREE.Points(particleGeo, particleMat)
            scene.add(particles)

            animate()
        }

        const animate = () => {
            frameId = requestAnimationFrame(animate)

            const time = Date.now() * 0.001

            if (icosahedron) {
                icosahedron.rotation.x = time * 0.15 + mouse.y * 0.3
                icosahedron.rotation.y = time * 0.2 + mouse.x * 0.3
            }
            if (torus) {
                torus.rotation.z = time * 0.1
                torus.rotation.y = time * 0.05 + mouse.x * 0.1
            }
            if (octahedron) {
                octahedron.rotation.x = time * 0.3
                octahedron.rotation.y = time * 0.4
                octahedron.position.y = Math.sin(time) * 3 - 5
            }
            if (particles) {
                particles.rotation.y = time * 0.02
                particles.rotation.x = time * 0.01
            }

            if (renderer && scene && camera) {
                renderer.render(scene, camera)
            }
        }

        const onMouseMove = (e) => {
            mouse.x = (e.clientX / window.innerWidth) * 2 - 1
            mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
        }

        const onResize = () => {
            if (!currentMount || !camera || !renderer) return
            const w = currentMount.clientWidth
            const h = currentMount.clientHeight
            camera.aspect = w / h
            camera.updateProjectionMatrix()
            renderer.setSize(w, h)
        }

        init()
        window.addEventListener('mousemove', onMouseMove)
        window.addEventListener('resize', onResize)

        return () => {
            cancelAnimationFrame(frameId)
            window.removeEventListener('mousemove', onMouseMove)
            window.removeEventListener('resize', onResize)
            if (renderer && currentMount) {
                currentMount.removeChild(renderer.domElement)
                renderer.dispose()
            }
        }
    }, [])

    return <div ref={mountRef} className="three-canvas" />
}

/* ─── Scroll Reveal Hook ─── */
const useReveal = () => {
    const ref = useRef(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const current = ref.current
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true) },
            { threshold: 0.15 }
        )
        if (current) obs.observe(current)
        return () => { if (current) obs.unobserve(current) }
    }, [])

    return [ref, visible]
}

const RevealSection = ({ children, className = '', delay = 0 }) => {
    const [ref, visible] = useReveal()
    return (
        <div
            ref={ref}
            className={`reveal ${visible ? 'revealed' : ''} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    )
}

/* ─── Data ─── */
const experiences = [
    {
        period: 'Septiembre 2025 – Actualidad',
        role: 'Desarrollador Frontend Semi-Senior',
        company: 'Corsusa International S.A.C.',
        sector: 'Tecnología de la Información',
        items: [
            'Desarrollo y mantenimiento de aplicación web corporativa con Angular y TypeScript, liderando automatización de procesos de ventas, logística, proyectos y servicios.',
            'Desarrollo de app móvil para gestión de viáticos con tecnología OCR para detección automática de comprobantes.',
            'Creación de herramientas de automatización con Python (backend) y Tauri (escritorio) para reportes de comisiones.',
            'Digitalización de procesos críticos de múltiples áreas de la empresa.',
        ],
    },
    {
        period: 'Agosto 2023 – Septiembre 2025',
        role: 'Desarrollador Full-Stack Junior',
        company: 'Acomo Negocios Financieros S.A.C.',
        sector: 'Sector Financiero / Fintech',
        items: [
            'Desarrollo full stack con Angular + TypeScript, Node.js + Express y PostgreSQL para módulos críticos del sistema financiero.',
            'Administración de infraestructura cloud en AWS: EC2, Lambda y servicios asociados.',
            'Automatización de alertas SPLAFT para prevención de lavado de activos.',
            'Integración de BCP Host to Host para procesamiento automatizado de comprobantes de pago.',
            'Optimización de queries SQL, mejorando rendimiento de consultas críticas.',
        ],
    },
    {
        period: 'Agosto 2022 – Diciembre 2022',
        role: 'Tutor de Programación Orientada a Objetos',
        company: 'Universidad Peruana de Ciencias Aplicadas (UPC)',
        sector: 'Educación Superior',
        items: [
            'Enseñanza de Programación Orientada a Objetos (POO) con C++ a estudiantes de 1er y 2do ciclo.',
            'Tutoría personalizada enfocada en pensamiento lógico y resolución de problemas.',
        ],
    },
]

const projects = [
    {
        name: 'App de Conexión Social',
        desc: 'Aplicación móvil de descubrimiento social que conecta personas cercanas mediante Bluetooth Low Energy (BLE). Frontend React Native + backend Node.js.',
        tags: ['React Native', 'Node.js', 'BLE'],
        link: null,
        status: 'En desarrollo',
    },
    {
        name: 'FLYFAR',
        desc: 'Plataforma fullstack de desafíos de programación en tiempo real con arquitectura de microservicios. Soporta +500 usuarios concurrentes.',
        tags: ['React.js', 'TypeScript', 'Node.js', 'MongoDB', 'AWS'],
        link: 'https://www.flyfar.website',
        status: 'Live',
    },
    {
        name: 'WASYPAY',
        desc: 'MVP fintech con frontend React.js y backend Node.js + TypeScript. Arquitectura de microservicios con contratos inteligentes Near Protocol.',
        tags: ['React.js', 'Node.js', 'TypeScript', 'Blockchain'],
        link: 'https://github.com/1234566778899/WASYPAY.git',
        status: 'Completado',
    },
    {
        name: 'PREGUNTAS ANÓNIMAS',
        desc: 'Aplicación web completa con APIs RESTful, autenticación JWT, WebSockets en tiempo real y manejo de estado con Redux.',
        tags: ['React.js', 'TypeScript', 'Node.js', 'Socket.io', 'Redux'],
        link: 'https://preguntas-anonimas.vercel.app/',
        status: 'Live',
    },
    {
        name: 'SMARTBUY',
        desc: 'Aplicación web financiera fullstack que genera planes de pagos con frontend React.js, backend Node.js y MongoDB.',
        tags: ['React.js', 'Node.js', 'MongoDB', 'Express'],
        link: 'https://github.com/1234566778899/smartbuy-fronted.git',
        status: 'Completado',
    },
    {
        name: 'MIDOC VIRTUAL',
        desc: 'Sistema de gestión de inventario para farmacias. Frontend Angular con backend Java Spring Boot y PostgreSQL.',
        tags: ['Angular', 'Java Spring Boot', 'PostgreSQL'],
        link: 'https://github.com/1234566778899/midoc-final-2022-G2.git',
        status: 'Completado',
    },
]

const skillCategories = [
    {
        title: 'Frontend',
        skills: ['Angular', 'React.js', 'React Native', 'TypeScript', 'HTML5', 'CSS3', 'Astro', 'Tauri'],
    },
    {
        title: 'Backend',
        skills: ['Node.js', 'Express.js', 'Python', 'Java', 'C++'],
    },
    {
        title: 'Bases de Datos',
        skills: ['MongoDB', 'PostgreSQL', 'SQL Server'],
    },
    {
        title: 'Cloud & DevOps',
        skills: ['AWS (EC2, Lambda)', 'Microsoft Azure', 'CI/CD', 'Docker'],
    },
    {
        title: 'Móvil',
        skills: ['React Native', 'OCR', 'Bluetooth LE'],
    },
    {
        title: 'Herramientas',
        skills: ['Git', 'GitHub', 'Power BI', 'Figma', 'Postman'],
    },
]

const certifications = [
    { name: 'Databases and SQL for Data Science with Python', org: 'IBM', year: '2024' },
    { name: 'Computación en la Nube: Microsoft Azure', org: 'Microsoft', year: '2023 – 2024' },
    { name: 'Hackathon Data & Analytics', org: 'UTEC', year: '2024' },
    { name: 'Data Analytics Power BI – Nivel Avanzado', org: 'Cibertec', year: '2023' },
]

/* ─── Main Component ─── */
export const HomeApp = () => {
    const [activeNav, setActiveNav] = useState('')
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)

            const sections = ['about', 'experience', 'projects', 'skills', 'contact']
            const reversed = [...sections].reverse()
            for (const id of reversed) {
                const el = document.getElementById(id)
                if (el && el.getBoundingClientRect().top <= 200) {
                    setActiveNav(id)
                    break
                }
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollTo = useCallback((id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        setMenuOpen(false)
    }, [])

    return (
        <div className="portfolio">
            {/* ─── Navigation ─── */}
            <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
                <div className="nav__inner">
                    <a className="nav__logo" href="#hero" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}>
                        {'<CO/>'}
                    </a>
                    <button className="nav__toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                        <span className={menuOpen ? 'open' : ''} />
                    </button>
                    <ul className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}>
                        {[
                            ['about', 'Sobre mí'],
                            ['experience', 'Experiencia'],
                            ['projects', 'Proyectos'],
                            ['skills', 'Skills'],
                            ['contact', 'Contacto'],
                        ].map(([id, label]) => (
                            <li key={id}>
                                <a
                                    href={`#${id}`}
                                    className={activeNav === id ? 'active' : ''}
                                    onClick={(e) => { e.preventDefault(); scrollTo(id); }}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* ─── Hero ─── */}
            <section id="hero" className="hero">
                <ThreeScene />
                <div className="hero__content">
                    <p className="hero__greeting">Hola, soy</p>
                    <h1 className="hero__name">
                        Carlos<br />
                        <span className="hero__name--accent">Ordaz Hoyos</span>
                    </h1>
                    <p className="hero__title">
                        Desarrollador Full Stack&ensp;
                        <span className="hero__divider">|</span>
                        &ensp;Angular&ensp;·&ensp;Node.js&ensp;·&ensp;React Native
                    </p>
                    <div className="hero__links">
                        <a href="https://www.linkedin.com/in/carlos-jes%C3%BAs-ordaz-hoyos-904576284" target="_blank" rel="noreferrer" className="hero__link">
                            LinkedIn
                        </a>
                        <a href="https://github.com/1234566778899" target="_blank" rel="noreferrer" className="hero__link">
                            GitHub
                        </a>
                        <a href="mailto:ordazhoyos2001@gmail.com" className="hero__link hero__link--primary">
                            Contáctame
                        </a>
                    </div>
                </div>
                <div className="hero__scroll" onClick={() => scrollTo('about')} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter') scrollTo('about'); }}>
                    <span>Scroll</span>
                    <div className="hero__scroll-line" />
                </div>
            </section>

            {/* ─── About ─── */}
            <section id="about" className="about">
                <div className="container">
                    <RevealSection>
                        <span className="section-tag">01 — Sobre mí</span>
                        <h2 className="section-title">Construyendo el futuro,<br />una línea de código a la vez</h2>
                    </RevealSection>
                    <div className="about__grid">
                        <RevealSection className="about__text" delay={200}>
                            <p>
                                Bachiller en Ingeniería de Sistemas de Información con experiencia en desarrollo full stack y soluciones cloud. Especializado en <strong>Angular</strong>, <strong>React.js</strong>, <strong>React Native</strong>, <strong>Node.js</strong>, <strong>TypeScript</strong> y <strong>MongoDB</strong>, con capacidad demostrada para diseñar e implementar aplicaciones móviles, web y de escritorio de alto rendimiento.
                            </p>
                            <p>
                                Experiencia en administración de servicios AWS (EC2, Lambda), automatización de procesos empresariales y desarrollo de APIs RESTful. Orientado a resultados, con habilidades para optimizar rendimiento, integrar sistemas de pago y crear soluciones escalables. Apasionado por la innovación tecnológica y las metodologías ágiles.
                            </p>
                        </RevealSection>
                        <RevealSection className="about__stats" delay={400}>
                            <div className="stat">
                                <span className="stat__number">+3</span>
                                <span className="stat__label">Años de<br />experiencia</span>
                            </div>
                            <div className="stat">
                                <span className="stat__number">+6</span>
                                <span className="stat__label">Proyectos<br />completados</span>
                            </div>
                            <div className="stat">
                                <span className="stat__number">3</span>
                                <span className="stat__label">Empresas<br />colaboradas</span>
                            </div>
                            <div className="stat">
                                <span className="stat__number">4</span>
                                <span className="stat__label">Certificaciones<br />técnicas</span>
                            </div>
                        </RevealSection>
                    </div>
                </div>
            </section>

            {/* ─── Specialties ─── */}
            <section className="specialties">
                <div className="container">
                    <RevealSection>
                        <span className="section-tag">Lo que hago</span>
                    </RevealSection>
                    <div className="specialties__grid">
                        {[
                            {
                                icon: '⚡',
                                title: 'Desarrollo Full Stack',
                                desc: 'Aplicaciones web y móviles completas con Angular, React.js, React Native, Node.js y TypeScript. Desde interfaces responsivas hasta APIs robustas.',
                            },
                            {
                                icon: '☁️',
                                title: 'Cloud & DevOps',
                                desc: 'Soluciones cloud con AWS (EC2, Lambda), Microsoft Azure, CI/CD pipelines y Docker. Arquitecturas escalables y optimización de costos.',
                            },
                            {
                                icon: '🔧',
                                title: 'Automatización',
                                desc: 'Automatización de procesos empresariales con Python, OCR, herramientas de escritorio con Tauri, y sistemas de alertas inteligentes.',
                            },
                        ].map((item, i) => (
                            <RevealSection key={i} className="specialty-card" delay={i * 150}>
                                <span className="specialty-card__icon">{item.icon}</span>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Experience ─── */}
            <section id="experience" className="experience">
                <div className="container">
                    <RevealSection>
                        <span className="section-tag">02 — Trayectoria</span>
                        <h2 className="section-title">Experiencia Profesional</h2>
                    </RevealSection>
                    <div className="timeline">
                        {experiences.map((exp, i) => (
                            <RevealSection key={i} className="timeline__item" delay={i * 150}>
                                <div className="timeline__dot" />
                                <div className="timeline__content">
                                    <span className="timeline__period">{exp.period}</span>
                                    <span className="timeline__sector">{exp.sector}</span>
                                    <h3 className="timeline__role">{exp.role}</h3>
                                    <h4 className="timeline__company">{exp.company}</h4>
                                    <ul className="timeline__list">
                                        {exp.items.map((item, j) => (
                                            <li key={j}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </RevealSection>
                        ))}
                    </div>

                    {/* Education */}
                    <RevealSection>
                        <h2 className="section-title" style={{ marginTop: '80px' }}>Formación & Certificaciones</h2>
                    </RevealSection>
                    <div className="education-grid">
                        <RevealSection className="edu-card" delay={100}>
                            <span className="edu-card__year">2020 – 2025</span>
                            <h3>Universidad Peruana de Ciencias Aplicadas (UPC)</h3>
                            <p>Bachiller en Ingeniería de Sistemas de Información</p>
                            <span className="edu-card__badge">Décimo superior · Graduado</span>
                        </RevealSection>
                        <RevealSection className="edu-card" delay={250}>
                            <span className="edu-card__year">Certificaciones</span>
                            {certifications.map((c, i) => (
                                <div key={i} className="cert-item">
                                    <strong>{c.name}</strong>
                                    <span>{c.org} · {c.year}</span>
                                </div>
                            ))}
                        </RevealSection>
                    </div>
                </div>
            </section>

            {/* ─── Projects ─── */}
            <section id="projects" className="projects">
                <div className="container">
                    <RevealSection>
                        <span className="section-tag">03 — Portafolio</span>
                        <h2 className="section-title">Proyectos Destacados</h2>
                    </RevealSection>
                    <div className="projects__grid">
                        {projects.map((proj, i) => (
                            <RevealSection key={i} className="project-card" delay={i * 100}>
                                <div className="project-card__header">
                                    <h3>{proj.name}</h3>
                                    <span className={`project-card__status project-card__status--${proj.status === 'Live' ? 'live' : proj.status === 'En desarrollo' ? 'dev' : 'done'}`}>
                                        {proj.status}
                                    </span>
                                </div>
                                <p>{proj.desc}</p>
                                <div className="project-card__tags">
                                    {proj.tags.map((t, j) => (
                                        <span key={j}>{t}</span>
                                    ))}
                                </div>
                                {proj.link && (
                                    <a href={proj.link} target="_blank" rel="noreferrer" className="project-card__link">
                                        {proj.link.includes('github') ? 'Ver código' : 'Visitar sitio'} →
                                    </a>
                                )}
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Skills ─── */}
            <section id="skills" className="skills-section">
                <div className="container">
                    <RevealSection>
                        <span className="section-tag">04 — Herramientas</span>
                        <h2 className="section-title">Stack Tecnológico</h2>
                    </RevealSection>
                    <div className="skills__grid">
                        {skillCategories.map((cat, i) => (
                            <RevealSection key={i} className="skill-group" delay={i * 100}>
                                <h3>{cat.title}</h3>
                                <div className="skill-group__items">
                                    {cat.skills.map((s, j) => (
                                        <span key={j} className="skill-chip">{s}</span>
                                    ))}
                                </div>
                            </RevealSection>
                        ))}
                    </div>
                    <RevealSection delay={300}>
                        <div className="languages-box">
                            <h3>Idiomas</h3>
                            <p>Español — Nativo&ensp;·&ensp;Inglés — Intermedio / Avanzado</p>
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* ─── Contact ─── */}
            <section id="contact" className="contact">
                <div className="container">
                    <RevealSection>
                        <span className="section-tag">05 — Contacto</span>
                        <h2 className="section-title contact__title">¿Trabajamos juntos?</h2>
                        <p className="contact__subtitle">
                            Siempre estoy abierto a nuevas oportunidades y proyectos interesantes.
                        </p>
                    </RevealSection>
                    <RevealSection delay={200}>
                        <div className="contact__links">
                            <a href="mailto:ordazhoyos2001@gmail.com" className="contact__btn">
                                ordazhoyos2001@gmail.com
                            </a>
                            <a href="tel:+51904435631" className="contact__btn contact__btn--outline">
                                +51 904 435 631
                            </a>
                        </div>
                        <div className="contact__socials">
                            <a href="https://www.linkedin.com/in/carlos-jes%C3%BAs-ordaz-hoyos-904576284" target="_blank" rel="noreferrer">LinkedIn</a>
                            <a href="https://github.com/1234566778899" target="_blank" rel="noreferrer">GitHub</a>
                            <a href="https://carlosordaz.vercel.app/" target="_blank" rel="noreferrer">Portfolio</a>
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* ─── Footer ─── */}
            <footer className="footer">
                <div className="container footer__inner">
                    <span className="footer__logo">{'<CO/>'}</span>
                    <p>Diseñado y desarrollado por Carlos Ordaz · 2025</p>
                </div>
            </footer>
        </div>
    )
}
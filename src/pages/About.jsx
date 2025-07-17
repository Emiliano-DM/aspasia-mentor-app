import React from 'react';
import '../styles/About.css'; // Asegúrate de tener este CSS


const About = () => {
  const team = [
    { name: 'MIGUEL GARCIA MELGAR', role: 'Full Stack Developer',link:'https://www.linkedin.com/in/mikongame/'  },
    { name: 'CARLOS MARTINEZ GOMEZ', role: 'Full Stack Developer', link:'https://www.linkedin.com/in/carlosmartgom/' },
    { name: 'EMILIANO DI MASCOLO', role: 'Full Stack Developer', link:'https://www.linkedin.com/in/emiliano-dimascolo/'},
    { name: 'ARCHLY VOLCY', role: 'Full Stack Developer', link:'https://www.linkedin.com/in/archly-volcy-83b740187/' },
    { name: 'JESSICA SIRUNO ', role: 'Diseñadora UX/UI', link:'https://www.linkedin.com/in/jessica-siruno/' },
    { name: 'GISELA CARBALLO', role: 'Front-end Developer', link: 'https://www.linkedin.com/in/giselacarballourquidi/',},
  ];

  const images = {
    aspasia: { src: '/src/img/aspasia.png', link: 'https://grupoaspasia.com' },
    appsFactory: { src: '/src/img/apps_factory.png', link: 'https://appsfactory.cat/' },
  };

  return (
    <div className="about-container">
      <h1 className="about-title">Sobre Nosotros</h1>

      {/* Quiénes somos */}
      <section className="about-section">
        <div className="about-text">
          <h2>¿Quiénes somos?</h2>
          <p>
            Somos un grupo de jóvenes talentos formados en diseño, programación y marketing digital,
            gracias al programa totalmente subvencionado <span className='strong'>Apps Factory</span>.
          </p>
          <p>
            El objetivo del programa es formar a jóvenes menores de 30 años y facilitar su inserción laboral en el sector mobile.
            Este proyecto nos ha permitido aplicar los conocimientos adquiridos en una app real.
          </p>
        </div>
        <div className="about-image">
          <a href={images.aspasia.link} target="_blank"  >
            <img src={images.aspasia.src} alt="Aspasia" style={{width:'350px', padding:'40px'}} />
          </a>
          <a href={images.appsFactory.link} target="_blank">
            <img src={images.appsFactory.src} alt="Apps Factory" />
          </a>
        </div>
      </section>

      {/* Origen de la app */}
      <section className="about-section reverse">
        <div className="about-text">
          <h2>Origen de la aplicación</h2>
          <p >
            Esta app fue diseñada para facilitar la votación de los grupos y mentores que participan en la presentación final del programa <span className='strong'>Apps Factory</span>. La idea surgió por iniciativa de los orientadores y del profesorado, como parte de un ejercicio práctico que los propios alumnos desarrolladores, junto con una compañera de diseño, llevaron a cabo para crear esta solución.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-text full-width">
          <h2>Tecnologías utilizadas</h2>
          <div className="tech-icons">
            <div className="tech-icon">
              <i className="devicon-react-original colored"></i>
              <p>React</p>
            </div>
            <div className="tech-icon">
              <i className="devicon-css3-plain colored"></i>
              <p>CSS</p>
            </div>
            <div className="tech-icon">
              <i className="devicon-html5-plain colored"></i>
              <p>HTML</p>
            </div>
            <div className="tech-icon">
              <i className="devicon-nodejs-plain colored"></i>
              <p>Node.js</p>
            </div>
            <div className="tech-icon">
              <i className="devicon-express-original"></i>
              <p>Express</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestro equipo */}
      <section className="about-section">
        <div className="about-text full-width">
          <h2>Nuestro equipo</h2>
          <p>
            La aplicación fue creada por los propios alumnos del programa, combinando desarrollo y diseño para ofrecer una herramienta funcional y visualmente atractiva.
          </p>
          <div className="team-cards">
            {team.map(({ name, role,link}, i) => (
              <div className="team-card" key={i}>
                {link ? (
                    <a href={link} target='_blank' className='link-card'>
                      <h3>{name}</h3>
                      <p>{role}</p>
                    </a>
                ):(
                  <>  
                    <h3>{name}</h3>
                    <p>{role}</p>
                  </>
                )}  
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='about-section'>
        <div className='about-text full-width'>
            <h2>Agradecimientos</h2>
            <p>Queremos expresar nuestro más sincero agradecimiento a <span className='strong'>Apps Factory</span> y <span className='strong'>Aspasia</span> por brindarnos la oportunidad de participar en este bootcamp. Este programa no solo nos permitió adquirir conocimientos técnicos, sino también desarrollar habilidades clave como el trabajo en equipo, la resolución de problemas y la gestión de proyectos, fundamentales para la creación de esta aplicación de votación.</p>

            <p>También extendemos nuestra gratitud al profesor <span className='strong'><a href="https://pablomonteserin.com/" target="_blank">Pablo Monteserin</a></span>, por su dedicación, acompañamiento y enseñanza a lo largo del curso, así como a los orientadores <span className='strong'>Txabi López Anastasio</span>, <span className='strong'>Julia Mata</span> y <span className='strong'>Lorena Ruiz</span>, por su constante apoyo, orientación y confianza en nuestro crecimiento profesional.</p>
        </div>

      </section>
    </div>
  );
};

export default About;

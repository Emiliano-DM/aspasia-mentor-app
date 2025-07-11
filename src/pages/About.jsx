import React from 'react';
import '../styles/About.css'; // Asegúrate de tener este CSS

const About = () => {
  const team = [
    { name: 'MIGUEL GARCIA MELGAR', role: 'Full Stack Developer',  },
    { name: 'CARLOS MARTINEZ GOMEZ', role: 'Full Stack Developer',  },
    { name: 'EMILIANO DI MASCOLO', role: 'Full Stack Developer', },
    { name: 'ARCHLY VOLCY', role: 'Full Stack Developer',  },
    { name: 'JESSICA SIRUNO ', role: 'Diseñadora UX/UI',  },
    { name: 'GISELA CARBALLO', role: 'Front-end Developer',},
  ];

  const images = {
    aspacia: { src: '/src/img/aspasia.png', link: 'https://grupoaspasia.com' },
    appsFactory: { src: '/src/img/apps_factory.png', link: 'https://appsfactory.cat/' },
    // team: { src: 'https://planeo.vercel.app/assets/team-Bbb1gi90.svg'},
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
            gracias al programa totalmente subvencionado <strong>Apps Factory</strong>.
          </p>
          <p>
            El objetivo del programa es formar a jóvenes menores de 30 años y facilitar su inserción laboral en el sector mobile.
            Este proyecto nos ha permitido aplicar los conocimientos adquiridos en una app real.
          </p>
        </div>
        <div className="about-image">
          <a href={images.aspacia.link} target="_blank" rel="noopener noreferrer" >
            <img src={images.aspacia.src} alt="Aspasia" style={{width:'500px', padding:'40px'}} />
          </a>
          <a href={images.appsFactory.link} target="_blank" rel="noopener noreferrer">
            <img src={images.appsFactory.src} alt="Apps Factory" />
          </a>
        </div>
      </section>

      {/* Origen de la app */}
      <section className="about-section reverse">
        <div className="about-text">
          <h2>Origen de la aplicación</h2>
          <p>
            Esta app fue diseñada para facilitar la votación de los grupos y mentores que participan en la presentación
            final del programa <strong>Apps Factory</strong>. La idea surgió como parte de un ejercicio práctico en el que
            los propios alumnos desarrolladores, junto con una compañera de diseño, crearon esta solución.
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
            {team.map(({ name, role,}, i) => (
              <div className="team-card" key={i}>
                {/* <img src={photo} alt={`${name} foto`} /> */}
                <h3>{name}</h3>
                <p>{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

import styles from './ProjectsStyles.module.css';
import weatheryy from '../../assets/weatheryy.png';
import l0ck3r from '../../assets/l0ck3r.png';
import portfolio from '../../assets/portfolio.png';
import calculator from '../../assets/calculator.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={weatheryy}
          link="https://github.com/h1mzaHb/weather-app-js"
          h3="Weatheryy"
          p="weather forecast"
        />
        <ProjectCard
          src={l0ck3r}
          link="https://github.com/h1mzaHb/Password-generator"
          h3="l0ck3r"
          p="Password generator"
        />
        <ProjectCard
          src={portfolio}
          link="https://github.com/h1mzaHb/portfolio"
          h3="Portfolio"
          p="My React portfolio"
        />
        <ProjectCard
          src={calculator}
          link="https://github.com/h1mzaHb/calculator"
          h3="Calculator"
          p="Advanced calculator app"
        />
      </div>
    </section>
  );
}

export default Projects;

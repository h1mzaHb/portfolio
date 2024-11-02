import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Weatheryy"
          p="weather forecast"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="l0ck3r"
          p="Password generator"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Fresh pizza"
          p="Pizza restaurant website"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Calculator"
          p="Advanced calculator app"
        />
      </div>
    </section>
  );
}

export default Projects;

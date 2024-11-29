import uiux from '../../assets/fig.png';
import flutter from '../../assets/flutter.png';
import dotnet from '../../assets/vs1.png';
import web from '../../assets/web.png';
import ProjectCard from '../../common/ProjectCard';
import styles from './ProjectsStyles.module.css';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={dotnet}
          link="https://github.com/warundev/.NET-Development"
          h3=".NET"
          p="View on GitHub"
        />
        <ProjectCard
          src={flutter}
          link="https://github.com/warundev/Flutter-Development"
          h3="Flutter"
          p="View on GitHub"
        />
        <ProjectCard
          src={uiux}
          link="https://www.behance.net/warundev"
          h3="UI/UX"
          p="View on Behance"
        />
        <ProjectCard
          src={web}
          link="https://github.com/warundev/Web_Development_A_To_Z"
          h3="WEB"
          p="View on GitHub"
        />
      </div>
    </section>
  );
}

export default Projects;

import CV from '../../assets/CV.pdf';
import githubDark from '../../assets/github-dark.svg';
import githubLight from '../../assets/github-light.svg';
import heroImg from '../../assets/hero-img.png';
import linkedinDark from '../../assets/linkedin-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import moon from '../../assets/moon.svg';
import sun from '../../assets/sun.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import twitterLight from '../../assets/twitter-light.svg';
import { useTheme } from '../../common/ThemeContext';
import styles from './HeroStyles.module.css';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Waruna Liyanapathirana"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Waruna
          <br />
          Liyanapathirana
        </h1>
        <h2>app dev | UI/UX</h2>
        <span>
        <a href="https://www.linkedin.com/in/warundev/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="https://github.com/warundev" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://x.com/warun_dev" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
        </span>
        <p className={styles.description}>
        Hello! I'm a BICT (Hons.) Software Engineering undergraduate at the University of Jaffna. Passionate about UI/UX design, mobile app development, and .NET development. Open to exciting freelance opportunities and collaborations on innovative projects. Let's connect and create something amazing!
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;

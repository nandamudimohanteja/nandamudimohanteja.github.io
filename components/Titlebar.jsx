import styles from '../styles/Titlebar.module.css';
import user from '../data/user.json';
import { getAssetPath } from '../lib/utils';

const Titlebar = () => {
  return (
    <section className={styles.titlebar}>
      <img
        src={getAssetPath('/vscode_icon.svg')}
        alt="VSCode Icon"
        height={15}
        width={15}
        className={styles.icon}
      />
      <div className={styles.items}>
        <p>File</p>
        <p>Edit</p>
        <p>View</p>
        <p>Go</p>
        <p>Run</p>
        <p>Terminal</p>
        <p>Help</p>
      </div>
      <p className={styles.title}>{user.name} - Portfolio</p>
      <div className={styles.windowButtons} aria-hidden="true">
        <span className={styles.minimize} aria-label="Minimize"></span>
        <span className={styles.maximize} aria-label="Maximize"></span>
        <span className={styles.close} aria-label="Close"></span>
      </div>
    </section>
  );
};

export default Titlebar;

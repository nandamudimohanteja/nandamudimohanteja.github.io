import Link from 'next/link';
import { useRouter } from 'next/router';
import FilesIcon from './icons/FilesIcon';
import GithubIcon from './icons/GithubIcon';
import CodeIcon from './icons/CodeIcon';
import PencilIcon from './icons/PencilIcon';
import MailIcon from './icons/MailIcon';
import AccountIcon from './icons/AccountIcon';
import SettingsIcon from './icons/SettingsIcon';
import SourceControlIcon from './icons/SourceControlIcon';
import styles from '../styles/Sidebar.module.css';


const sidebarTopItems = [
  {
    Icon: FilesIcon,
    path: '/',
    label: 'Home',
  },
  {
    Icon: GithubIcon,
    path: '/github',
    label: 'GitHub',
  },
  {
    Icon: CodeIcon,
    path: '/projects',
    label: 'Projects',
  },
  {
    Icon: SourceControlIcon,
    path: '/experience',
    label: 'Experience',
  },
  {
    Icon: MailIcon,
    path: '/contact',
    label: 'Contact',
  },
];

const sidebarBottomItems = [
  {
    Icon: AccountIcon,
    path: '/about',
    label: 'About',
  },
  {
    Icon: SettingsIcon,
    path: '/settings',
    label: 'Settings',
  },
];

const Sidebar = () => {
  const router = useRouter();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        {sidebarTopItems.map(({ Icon, path, label }) => (
          <Link href={path} key={path} aria-label={label}>
            <div
              className={`${styles.iconContainer} ${
                router.pathname === path && styles.active
              }`}
            >
              <Icon
                fill={
                  router.pathname === path
                    ? 'rgb(225, 228, 232)'
                    : 'rgb(106, 115, 125)'
                }
                className={styles.icon}
                aria-hidden="true"
              />
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.sidebarBottom}>
        {sidebarBottomItems.map(({ Icon, path, label }) => (
          <div className={styles.iconContainer} key={path}>
            <Link href={path} aria-label={label}>
              <Icon
                fill={
                  router.pathname === path
                    ? 'rgb(225, 228, 232)'
                    : 'rgb(106, 115, 125)'
                }
                className={styles.icon}
                aria-hidden="true"
              />
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;

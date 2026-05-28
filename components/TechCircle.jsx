import styles from '../styles/TechCircle.module.css';
import { getAssetPath } from '../lib/utils';

// Outer ring tech items (12 items)
const outerTechItems = [
  { icon: 'react', name: 'React', color: '#61DAFB' },
  { icon: 'nodejs', name: 'Node.js', color: '#339933' },
  { icon: 'python', name: 'Python', color: '#3776AB' },
  { icon: 'tensorflow', name: 'TensorFlow', color: '#FF6F00' },
  { icon: 'docker', name: 'Docker', color: '#2496ED' },
  { icon: 'postgresql', name: 'PostgreSQL', color: '#4169E1' },
  { icon: 'aws', name: 'AWS', color: '#FF9900' },
  { icon: 'git', name: 'Git', color: '#F05032' },
  { icon: 'typescript', name: 'TypeScript', color: '#3178C6' },
  { icon: 'mongodb', name: 'MongoDB', color: '#47A248' },
  { icon: 'nextjs', name: 'Next.js', color: '#ffffff' },
  { icon: 'flask', name: 'Flask', color: '#ffffff' },
];

// Inner ring tech items (6 items)
const innerTechItems = [
  { icon: 'openai', name: 'OpenAI', color: '#10A37F' },
  { icon: 'java', name: 'Java', color: '#ED8B00' },
  { icon: 'kubernetes', name: 'Kubernetes', color: '#326CE5' },
  { icon: 'redis', name: 'Redis', color: '#DC382D' },
  { icon: 'graphql', name: 'GraphQL', color: '#E10098' },
  { icon: 'pytorch', name: 'PyTorch', color: '#EE4C2C' },
];

// SVG Icons as components
const icons = {
  react: (
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="2.5" fill="#61DAFB"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1" fill="none"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(120 12 12)"/>
    </svg>
  ),
  nodejs: (
    <svg viewBox="0 0 24 24">
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="#339933"/>
      <text x="12" y="14" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">JS</text>
    </svg>
  ),
  python: (
    <svg viewBox="0 0 24 24">
      <path d="M11.5 2c-2.5 0-4 1-4 3v2h4v1h-6c-2 0-3.5 1.5-3.5 4v2c0 2.5 1.5 4 3.5 4h2v-3c0-1.5 1-2.5 2.5-2.5h4c1.5 0 2.5-1 2.5-2.5v-4c0-2-1.5-3-4-3h-1zm-.5 1.5a1 1 0 110 2 1 1 0 010-2z" fill="#3776AB"/>
      <path d="M12.5 22c2.5 0 4-1 4-3v-2h-4v-1h6c2 0 3.5-1.5 3.5-4v-2c0-2.5-1.5-4-3.5-4h-2v3c0 1.5-1 2.5-2.5 2.5h-4c-1.5 0-2.5 1-2.5 2.5v4c0 2 1.5 3 4 3h1zm.5-1.5a1 1 0 110-2 1 1 0 010 2z" fill="#FFD43B"/>
    </svg>
  ),
  tensorflow: (
    <svg viewBox="0 0 24 24">
      <path d="M12 2L4 6v4l8 4v8l8-4v-4l-8-4V2z" fill="#FF6F00"/>
      <path d="M12 10l-8 4v4l8-4v-4z" fill="#FF9800" opacity="0.7"/>
    </svg>
  ),
  docker: (
    <svg viewBox="0 0 24 24">
      <path d="M4.5 11h2v2h-2v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zm3-3h2v2h-2V8zm-3 0h2v2h-2V8zm-3 0h2v2h-2V8zm-3 0h2v2h-2V8zm6-3h2v2h-2V5zm-3 0h2v2h-2V5z" fill="#2496ED"/>
      <path d="M23 11.5c-.5-.5-1.5-1-2.5-1-.2-1-1-2-2-2.5.5 1 .5 2 0 3-1 .5-2.5 1-4 1H2c0 3 1 5 3 6.5 2.5 2 6 2 9 1 3-.5 5-2 7-5 .5-1 1-2 1-3h1c.5 0 1-.5 1.5-1 .5-.5 0-1-.5-1z" fill="#2496ED"/>
    </svg>
  ),
  postgresql: (
    <svg viewBox="0 0 24 24">
      <ellipse cx="12" cy="6" rx="8" ry="3" fill="#336791"/>
      <path d="M4 6v10c0 1.7 3.6 3 8 3s8-1.3 8-3V6" fill="none" stroke="#336791" strokeWidth="2"/>
      <ellipse cx="12" cy="16" rx="8" ry="3" fill="none" stroke="#336791" strokeWidth="1.5"/>
      <path d="M4 11c0 1.7 3.6 3 8 3s8-1.3 8-3" fill="none" stroke="#336791" strokeWidth="1.2"/>
    </svg>
  ),
  aws: (
    <svg viewBox="0 0 24 24">
      <path d="M6.5 11l1.5-5h1l1.5 5h-1l-.3-1h-1.4l-.3 1h-1zm1.5-2h.8l-.4-1.5-.4 1.5z" fill="#FF9900"/>
      <path d="M11 6h1l.8 3.5.8-3.5h1l-1.3 5h-1L11 6z" fill="#FF9900"/>
      <path d="M15 8.5c0-.8.7-1.5 1.5-1.5.4 0 .7.1 1 .3l-.3.7c-.2-.1-.4-.2-.6-.2-.4 0-.6.3-.6.7 0 .4.2.7.6.7.2 0 .4-.1.6-.2l.3.7c-.3.2-.6.3-1 .3-.8 0-1.5-.7-1.5-1.5z" fill="#FF9900"/>
      <path d="M4 15c2.5 1.5 5.5 2.5 8.5 2.5s6-.5 8.5-2" stroke="#FF9900" strokeWidth="1.5" fill="none"/>
      <path d="M18.5 14l1-2.5 1.5 1-2.5 1.5z" fill="#FF9900"/>
    </svg>
  ),
  git: (
    <svg viewBox="0 0 24 24">
      <path d="M21.6 11.2L12.8 2.4c-.5-.5-1.3-.5-1.8 0l-1.8 1.8 2.3 2.3c.5-.2 1.1-.1 1.5.3.4.4.5 1 .3 1.5l2.2 2.2c.5-.2 1.1-.1 1.5.3.6.6.6 1.5 0 2.1-.6.6-1.5.6-2.1 0-.4-.4-.5-1.1-.3-1.6l-2.1-2.1v5.4c.1.1.3.2.4.3.6.6.6 1.5 0 2.1-.6.6-1.5.6-2.1 0-.6-.6-.6-1.5 0-2.1.2-.2.4-.3.6-.4V9.1c-.2-.1-.4-.2-.6-.4-.4-.4-.5-1-.3-1.5L8.3 4.9l-5.9 5.9c-.5.5-.5 1.3 0 1.8l8.8 8.8c.5.5 1.3.5 1.8 0l8.6-8.6c.5-.5.5-1.3 0-1.8z" fill="#F05032"/>
    </svg>
  ),
  typescript: (
    <svg viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="2" fill="#3178C6"/>
      <path d="M13.5 11h-2v6h-1.5v-6H8V9.5h5.5V11z" fill="white"/>
      <path d="M14.5 15.5c.3.2.7.4 1.2.4.5 0 .8-.2.8-.6 0-.4-.3-.5-.9-.7-.9-.3-1.5-.7-1.5-1.6 0-1 .8-1.6 2-1.6.6 0 1 .1 1.3.3l-.3.9c-.2-.1-.5-.2-.9-.2-.5 0-.7.2-.7.5 0 .3.3.5.9.7 1 .3 1.5.8 1.5 1.7 0 1-.7 1.7-2.1 1.7-.6 0-1.2-.2-1.5-.4l.2-.9z" fill="white"/>
    </svg>
  ),
  mongodb: (
    <svg viewBox="0 0 24 24">
      <path d="M12 2c0 0 .5 2 .5 4 0 1 .5 2 1 3 .5 1 1 2 1 3.5 0 2.5-1 5-1.5 6v2c0 .5-.5 1-1 1s-1-.5-1-1v-2c-.5-1-1.5-3.5-1.5-6 0-1.5.5-2.5 1-3.5.5-1 1-2 1-3 0-2 .5-4 .5-4z" fill="#47A248"/>
      <path d="M11.5 20v2c.3.3.5.3 1 0v-2h-1z" fill="#A6CE39"/>
    </svg>
  ),
  nextjs: (
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="white"/>
      <path d="M10 8v8l5-4-5-4z" fill="black"/>
      <rect x="16" y="8" width="1.5" height="8" fill="black"/>
    </svg>
  ),
  flask: (
    <svg viewBox="0 0 24 24">
      <path d="M9 3v5L4 18c-.5 1 .2 2 1.3 2h13.4c1.1 0 1.8-1 1.3-2l-5-10V3H9z" fill="none" stroke="white" strokeWidth="1.5"/>
      <path d="M9 3h6" stroke="white" strokeWidth="1.5"/>
      <circle cx="8" cy="15" r="1.2" fill="white"/>
      <circle cx="12" cy="17" r="1.5" fill="white"/>
      <circle cx="15" cy="14" r="1" fill="white"/>
    </svg>
  ),
  openai: (
    <svg viewBox="0 0 24 24">
      <path d="M22.2 14.5c.3-1 .4-2 .2-3-.2-1-.6-2-1.2-2.8.5-1 .7-2.1.5-3.2-.2-1.1-.7-2-1.5-2.8-1-.8-2.2-1.3-3.5-1.3-1 0-2 .3-2.8.8-.7-.5-1.6-.8-2.5-.8-1.1 0-2.1.4-3 1-.8.7-1.4 1.6-1.6 2.6-1 .2-2 .6-2.7 1.3-.8.7-1.3 1.6-1.5 2.6-.2 1.3.1 2.6.8 3.7-.3 1-.4 2-.2 3 .2 1 .6 2 1.2 2.8-.5 1-.7 2.1-.5 3.2.2 1.1.7 2 1.5 2.8 1 .8 2.2 1.3 3.5 1.3 1 0 2-.3 2.8-.8.7.5 1.6.8 2.5.8 1.1 0 2.1-.4 3-1 .8-.7 1.4-1.6 1.6-2.6 1-.2 2-.6 2.7-1.3.8-.7 1.3-1.6 1.5-2.6.2-1.3-.1-2.6-.8-3.7z" fill="none" stroke="#10A37F" strokeWidth="1.5"/>
      <path d="M12 8v8M8 12h8" stroke="#10A37F" strokeWidth="1.5"/>
    </svg>
  ),
  java: (
    <svg viewBox="0 0 24 24">
      <path d="M8.5 17s-1 .5.8.7c2 .2 3.2.2 5.5-.3 0 0 .5.3 1.2.6-4 1.7-9-.1-7.5-.4z" fill="#ED8B00"/>
      <path d="M8 14.5s-1 .7.7.9c2.2.2 4 .2 7-.4 0 0 .3.3.8.5-4.8 1.4-10 .1-8.5-.5z" fill="#ED8B00"/>
      <path d="M13 10c1.2 1.4-.3 2.6-.3 2.6s3-1.5 1.6-3.4c-1.3-1.8-2.3-2.6 3-5.6 0 0-8 2-4.3 6.4z" fill="#ED8B00"/>
      <path d="M17 18.5s.6.5-.6 1c-2.5.7-10 .9-12.2 0-.8-.3.7-.8 1.1-.9.5-.1.7-.1.7-.1-.8-.5-5 1-2.2 1.5 8 1.3 14.5-.6 13.2-1.5z" fill="#ED8B00"/>
      <path d="M8.5 12.5s-3.5 1-1.2 1.2c1 .1 3 .1 4.8-.1 1.5-.1 3-.4 3-.4s-.5.2-.8.4c-3.5.9-10 .5-8-1 1.6-1 2.2-.1 2.2-.1z" fill="#ED8B00"/>
    </svg>
  ),
  kubernetes: (
    <svg viewBox="0 0 24 24">
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="#326CE5"/>
      <circle cx="12" cy="12" r="3" fill="white"/>
      <path d="M12 6v2M12 16v2M7 9l1.5 1M15.5 14l1.5 1M7 15l1.5-1M15.5 10l1.5-1" stroke="white" strokeWidth="1.2"/>
    </svg>
  ),
  redis: (
    <svg viewBox="0 0 24 24">
      <ellipse cx="12" cy="7" rx="9" ry="4" fill="#DC382D"/>
      <path d="M3 7v4c0 2.2 4 4 9 4s9-1.8 9-4V7" fill="#A41E11"/>
      <ellipse cx="12" cy="11" rx="9" ry="4" fill="#DC382D"/>
      <path d="M3 11v4c0 2.2 4 4 9 4s9-1.8 9-4v-4" fill="#A41E11"/>
      <ellipse cx="12" cy="15" rx="9" ry="4" fill="#DC382D"/>
    </svg>
  ),
  graphql: (
    <svg viewBox="0 0 24 24">
      <path d="M12 3L4 7.5v9L12 21l8-4.5v-9L12 3z" fill="none" stroke="#E10098" strokeWidth="1.5"/>
      <circle cx="12" cy="3" r="1.5" fill="#E10098"/>
      <circle cx="4" cy="7.5" r="1.5" fill="#E10098"/>
      <circle cx="4" cy="16.5" r="1.5" fill="#E10098"/>
      <circle cx="12" cy="21" r="1.5" fill="#E10098"/>
      <circle cx="20" cy="16.5" r="1.5" fill="#E10098"/>
      <circle cx="20" cy="7.5" r="1.5" fill="#E10098"/>
      <path d="M4 7.5L20 16.5M4 16.5L20 7.5M12 3v18" stroke="#E10098" strokeWidth="0.8"/>
    </svg>
  ),
  pytorch: (
    <svg viewBox="0 0 24 24">
      <path d="M12 2l-5 5 1 1 4-4 4 4 1-1-5-5z" fill="#EE4C2C"/>
      <circle cx="12" cy="14" r="6" fill="none" stroke="#EE4C2C" strokeWidth="2"/>
      <circle cx="15" cy="7" r="1.5" fill="#EE4C2C"/>
    </svg>
  ),
};

const TechCircle = () => {
  return (
    <div className={styles.container}>
      {/* Glow effect behind */}
      <div className={styles.glowEffect}></div>

      {/* Outer dashed ring */}
      <div className={styles.outerDashedRing}></div>

      {/* Outer rotating ring with tech items */}
      <div className={styles.outerRing}>
        {outerTechItems.map((tech, index) => {
          const angle = (360 / outerTechItems.length) * index;
          return (
            <div
              key={tech.name}
              className={styles.techItem}
              style={{
                '--angle': `${angle}deg`,
                '--delay': `${index * 0.08}s`,
                '--glow-color': tech.color,
              }}
              title={tech.name}
            >
              <div className={styles.techIcon}>{icons[tech.icon]}</div>
            </div>
          );
        })}
      </div>

      {/* Middle dashed ring */}
      <div className={styles.middleDashedRing}></div>

      {/* Inner rotating ring with tech items */}
      <div className={styles.innerRing}>
        {innerTechItems.map((tech, index) => {
          const angle = (360 / innerTechItems.length) * index;
          return (
            <div
              key={tech.name}
              className={styles.innerTechItem}
              style={{
                '--angle': `${angle}deg`,
                '--delay': `${index * 0.1}s`,
                '--glow-color': tech.color,
              }}
              title={tech.name}
            >
              <div className={styles.techIcon}>{icons[tech.icon]}</div>
            </div>
          );
        })}
      </div>

      {/* Center circle with code icon */}
      <div className={styles.centerCircle}>
        <span className={styles.centerIcon}>{'</>'}</span>
      </div>
    </div>
  );
};

export default TechCircle;

import { useState, useEffect } from 'react';
import GitHubCalendar from 'react-github-calendar';
import RepoCard from '../components/RepoCard';
import styles from '../styles/GithubPage.module.css';
import githubData from '../data/github.json';
import { getAssetPath } from '../lib/utils';

const GithubPage = ({ repos, user }) => {
  const [calendarLoaded, setCalendarLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading delay for calendar
    const timer = setTimeout(() => setCalendarLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const theme = {
    level0: '#161B22',
    level1: '#0e4429',
    level2: '#006d32',
    level3: '#26a641',
    level4: '#39d353',
  };

  return (
    <>
      <div className={styles.user}>
        <div>
          <img
            src={user.avatar_url}
            className={styles.avatar}
            alt={`${user.login}'s GitHub avatar`}
            width={50}
            height={50}
            loading="lazy"
          />
          <h3 className={styles.username}>{user.login}</h3>
        </div>
        <div>
          <h3>{user.public_repos} repos</h3>
        </div>
        <div>
          <h3>{user.followers} followers</h3>
        </div>
      </div>
      <div className={styles.container}>
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
      <div className={styles.contributions}>
        {calendarLoaded ? (
          <GitHubCalendar
            username={user.login}
            theme={theme}
            hideColorLegend
            hideMonthLabels
          />
        ) : (
          <div style={{ textAlign: 'center', padding: '2rem', color: '#9ca3af' }}>
            Loading contribution graph...
          </div>
        )}
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      title: 'GitHub',
      repos: githubData.repos,
      user: githubData.user
    },
  };
}

export default GithubPage;

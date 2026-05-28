import Titlebar from '../components/Titlebar'
import Sidebar from '../components/Sidebar'
import Explorer from '../components/Explorer'
import Bottombar from '../components/Bottombar'
import Tabsbar from './Tabsbar'
import styles from '../styles/Layout.module.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Layout = ({ children }) => {
  const router = useRouter()
  const [showScrollTop, setShowScrollTop] = useState(false)

  // set scroll to top of main content on url pathname change
  useEffect(() => {
    const main = document.getElementById('main-editor')
    main.scrollTop = 0
  }, [router.pathname])

  // Handle scroll visibility for scroll-to-top button
  useEffect(() => {
    const main = document.getElementById('main-editor')
    const handleScroll = () => {
      setShowScrollTop(main.scrollTop > 200)
    }
    main.addEventListener('scroll', handleScroll)
    return () => main.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    const main = document.getElementById('main-editor')
    main.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <Titlebar />
      <div className={styles.main}>
        <Sidebar />
        <Explorer />
        <div style={{ width: '100%', overflow: 'hidden', position: 'relative' }}>
          <Tabsbar />
          <main id="main-editor" className={styles.content}>
            {children}
          </main>
          {showScrollTop && (
            <button
              className={styles.scrollTopBtn}
              onClick={scrollToTop}
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 15l-6-6-6 6"/>
              </svg>
            </button>
          )}
        </div>
      </div>
      <Bottombar />
    </>
  )
}

export default Layout

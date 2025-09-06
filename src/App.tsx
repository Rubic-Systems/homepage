import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { Home } from './pages/Home'
import { Jotwell } from './pages/Jotwell'
import { Tkyo } from './pages/Tkyo'
import { Docketeer } from './pages/Docketeer'
import ErrorBoundary from './components/ErrorBoundary'
import { ThemeProvider } from './contexts/ThemeContext'
import { isJotwellSubdomain, isTkyoSubdomain, isDocketeerSubdomain } from './utils/subdomain'
import './styles/global.css'

function App() {
  // Check if we're on any subdomain
  const isJotwell = isJotwellSubdomain();
  const isTkyo = isTkyoSubdomain();
  const isDocketeer = isDocketeerSubdomain();
  
  // If on Jotwell subdomain, show Jotwell page directly without main layout
  if (isJotwell) {
    return (
      <ErrorBoundary>
        <ThemeProvider>
          <Jotwell />
        </ThemeProvider>
      </ErrorBoundary>
    );
  }
  
  // If on TKYO subdomain, show TKYO page directly without main layout
  if (isTkyo) {
    return (
      <ErrorBoundary>
        <ThemeProvider>
          <Tkyo />
        </ThemeProvider>
      </ErrorBoundary>
    );
  }
  
  // If on Docketeer subdomain, show Docketeer page directly without main layout
  if (isDocketeer) {
    return (
      <ErrorBoundary>
        <ThemeProvider>
          <Docketeer />
        </ThemeProvider>
      </ErrorBoundary>
    );
  }
  
  // Regular routing for main site
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
          <MainLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/jotwell" element={<Jotwell />} />
              <Route path="/tkyo" element={<Tkyo />} />
              <Route path="/docketeer" element={<Docketeer />} />
            </Routes>
          </MainLayout>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App

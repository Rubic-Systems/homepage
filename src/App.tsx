import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { Home } from './pages/Home'
import { Jotwell } from './pages/Jotwell'
import ErrorBoundary from './components/ErrorBoundary'
import { ThemeProvider } from './contexts/ThemeContext'
import { isJotwellSubdomain } from './utils/subdomain'
import './styles/global.css'

function App() {
  // Check if we're on the Jotwell subdomain
  const isJotwell = isJotwellSubdomain();
  
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
  
  // Regular routing for main site
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
          <MainLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/jotwell" element={<Jotwell />} />
            </Routes>
          </MainLayout>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App

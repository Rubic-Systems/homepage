import { ReactNode, useState, useRef, useEffect } from 'react';
import { InteractiveLogo } from '../components/InteractiveLogo';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const handleContactClick = () => {
    window.location.href = 'mailto:contact@rubic.ltd';
  };
  
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='main-layout'>
      <header className='header' role='banner'>
        <div className='container'>
          <nav aria-label='Main navigation'>
            <div className='logo-container'>
              <InteractiveLogo />
              <h1 onClick={() => window.location.href = '/'} style={{ cursor: 'pointer' }}>Rubic Systems</h1>
            </div>
            <div className='nav-links'>
              <div className='dropdown' ref={dropdownRef}>
                <button 
                  onClick={toggleDropdown} 
                  className='dropdown-button' 
                  aria-label='Our Work'
                  aria-haspopup='true'
                  aria-expanded={dropdownOpen}
                >
                  Our Work
                  <span className='dropdown-arrow'>{dropdownOpen ? '▲' : '▼'}</span>
                </button>
                {dropdownOpen && (
                  <div className='dropdown-menu'>
                    <button 
                      onClick={() => {
                        const subdomain = window.location.hostname.includes('localhost') 
                          ? 'http://jotwell.localhost:5173' 
                          : 'https://jotwell.rubicsystems.com';
                        window.location.href = subdomain;
                      }}
                      className='dropdown-item'
                      aria-label='Visit Jotwell'
                    >
                      Jotwell
                    </button>
                    <button 
                      onClick={() => {
                        const subdomain = window.location.hostname.includes('localhost') 
                          ? 'http://tkyo.localhost:5173' 
                          : 'https://tkyo.rubicsystems.com';
                        window.location.href = subdomain;
                      }}
                      className='dropdown-item'
                      aria-label='Visit TKYODrift'
                    >
                      TKYODrift
                    </button>
                    <button 
                      onClick={() => {
                        const subdomain = window.location.hostname.includes('localhost') 
                          ? 'http://docketeer.localhost:5173' 
                          : 'https://docketeer.rubicsystems.com';
                        window.location.href = subdomain;
                      }}
                      className='dropdown-item'
                      aria-label='Visit Docketeer'
                    >
                      Docketeer
                    </button>
                  </div>
                )}
              </div>
              <button onClick={handleContactClick} className='contact-button' aria-label='Contact us via email'>
                Contact Us
              </button>
            </div>
          </nav>
        </div>
      </header>
      <main className='main-content' role='main'>{children}</main>
      <footer className='footer' role='contentinfo'>
        <div className='container'>
          <p>
            &copy; {new Date().getFullYear()} Rubic Systems. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

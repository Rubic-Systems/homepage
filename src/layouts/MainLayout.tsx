import { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const handleContactClick = () => {
    window.location.href = 'mailto:contact@rubic.ltd';
  };

  return (
    <div className="main-layout">
      <header className="header">
        <div className="container">
          <nav>
            <div className="logo-container">
              <img src="/logo.svg" alt="Rubic Systems Logo" />
              <h1>Rubic Systems</h1>
            </div>
            <div className="nav-links">
              <button onClick={handleContactClick} className="contact-button">
                Contact Us
              </button>
            </div>
          </nav>
        </div>
      </header>
      <main className="main-content">
        {children}
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Rubic Systems. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}; 
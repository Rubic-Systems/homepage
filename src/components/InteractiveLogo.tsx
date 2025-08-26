import { useTheme } from '../contexts/ThemeContext';
import './InteractiveLogo.css';

export const InteractiveLogo = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button 
      className={`interactive-logo ${theme === 'dark' ? 'dark-mode' : ''}`}
      onClick={toggleTheme}
      aria-label={`Rubic Systems logo - Click to switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Click to switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="logo-3d-container">
        {/* Outer cube - starts large, shrinks in dark mode */}
        <div className="cube-outer">
          <div className="cube-face outer-front"></div>
          <div className="cube-face outer-back"></div>
          <div className="cube-face outer-right"></div>
          <div className="cube-face outer-left"></div>
          <div className="cube-face outer-top"></div>
          <div className="cube-face outer-bottom"></div>
        </div>
        
        {/* Inner cube - starts small, grows in dark mode */}
        <div className="cube-inner">
          <div className="cube-face inner-front"></div>
          <div className="cube-face inner-back"></div>
          <div className="cube-face inner-right"></div>
          <div className="cube-face inner-left"></div>
          <div className="cube-face inner-top"></div>
          <div className="cube-face inner-bottom"></div>
        </div>
        
      </div>
    </button>
  );
};
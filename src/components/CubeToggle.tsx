import { useTheme } from '../contexts/ThemeContext';
import './CubeToggle.css';

export const CubeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button 
      className={`cube-toggle ${theme === 'dark' ? 'dark-mode' : ''}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="cube-container">
        <div className="cube">
          {/* All 6 cube faces */}
          <div className="face front"></div>
          <div className="face back"></div>
          <div className="face right"></div>
          <div className="face left"></div>
          <div className="face top"></div>
          <div className="face bottom"></div>
        </div>
      </div>
    </button>
  );
};
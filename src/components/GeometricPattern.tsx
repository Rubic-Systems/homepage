import React from 'react'

interface GeometricPatternProps {
  type?: 'grid' | 'hexagon' | 'diagonal' | 'dots'
  opacity?: number
  color?: string
  className?: string
}

export const GeometricPattern: React.FC<GeometricPatternProps> = ({
  type = 'grid',
  opacity = 0.3,
  color = 'var(--gray-200)',
  className = ''
}) => {
  const patterns = {
    grid: (
      <pattern id="grid-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <rect x="0" y="0" width="1" height="40" fill={color} opacity={opacity} />
        <rect x="0" y="0" width="40" height="1" fill={color} opacity={opacity} />
      </pattern>
    ),
    hexagon: (
      <pattern id="hexagon-pattern" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
        <polygon 
          points="30,0 45,8.66 45,26 30,34.64 15,26 15,8.66" 
          fill="none" 
          stroke={color} 
          strokeWidth="1" 
          opacity={opacity}
        />
      </pattern>
    ),
    diagonal: (
      <pattern id="diagonal-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <path 
          d="M0,40 L40,0" 
          stroke={color} 
          strokeWidth="1" 
          opacity={opacity}
        />
        <path 
          d="M-10,10 L10,-10" 
          stroke={color} 
          strokeWidth="1" 
          opacity={opacity}
        />
        <path 
          d="M30,50 L50,30" 
          stroke={color} 
          strokeWidth="1" 
          opacity={opacity}
        />
      </pattern>
    ),
    dots: (
      <pattern id="dots-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="10" cy="10" r="1.5" fill={color} opacity={opacity} />
      </pattern>
    )
  }

  return (
    <svg 
      className={`geometric-pattern ${className}`}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0
      }}
    >
      <defs>
        {patterns[type]}
      </defs>
      <rect width="100%" height="100%" fill={`url(#${type}-pattern)`} />
    </svg>
  )
}

export default GeometricPattern
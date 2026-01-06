// src/utils/patternUtils.js

const PATTERN_SVGS = {
  diagonalBlack: `
    <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
      <rect width="18" height="18" fill="green"/>
      <path d="M12 -4 L-4 12" stroke="black" stroke-width="3"/>
      <path d="M16 0 L0 16" stroke="black" stroke-width="3"/>
      <path d="M20 4 L4 20" stroke="black" stroke-width="3"/>
      <path d="M24 8 L8 24" stroke="black" stroke-width="3"/>
    </svg>
  `,

  diagonalYellow: `
    <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
      <rect width="18" height="18" fill="green"/>
      <path d="M12 -4 L-4 12" stroke="#d0ff73" stroke-width="3"/>
      <path d="M16 0 L0 16" stroke="#d0ff73" stroke-width="3"/>
      <path d="M20 4 L4 20" stroke="#d0ff73" stroke-width="3"/>
      <path d="M24 8 L8 24" stroke="#d0ff73" stroke-width="3"/>
    </svg>
  `,

  diagonalGray: `
    <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
      <rect width="18" height="18" fill="#55ff00"/>
      <path d="M12 -4 L-4 12" stroke="#828282" stroke-width="3"/>
      <path d="M16 0 L0 16" stroke="#828282" stroke-width="3"/>
      <path d="M20 4 L4 20" stroke="#828282" stroke-width="3"/>
      <path d="M24 8 L8 24" stroke="#828282" stroke-width="3"/>
    </svg>
  `,

  diagonalGray1: `
    <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
      <rect width="18" height="18" fill="white"/>
      <path d="M12 -4 L-4 12" stroke="#828282" stroke-width="3"/>
      <path d="M16 0 L0 16" stroke="#828282" stroke-width="3"/>
      <path d="M20 4 L4 20" stroke="#828282" stroke-width="3"/>
      <path d="M24 8 L8 24" stroke="#828282" stroke-width="3"/>
    </svg>
  `,

  diagonalGray2: `
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <rect width="12" height="12" fill="yellow"/>
      <path d="M0 2 L12 2" stroke="#777" stroke-width="2.5"/>
      <path d="M0 6 L12 6" stroke="#777" stroke-width="2.5"/>
      <path d="M0 10 L12 10" stroke="#777" stroke-width="2.5"/>
    </svg>
  `,

  diagonalPurple: `
    <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
      <rect width="18" height="18" fill="#e1e1e1"/>
      <path d="M12 -4 L-4 12" stroke="#df72ff" stroke-width="3"/>
      <path d="M16 0 L0 16" stroke="#df72ff" stroke-width="3"/>
      <path d="M20 4 L4 20" stroke="#df72ff" stroke-width="3"/>
      <path d="M24 8 L8 24" stroke="#df72ff" stroke-width="3"/>
    </svg>
  `,

  diagonalPink: `
    <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
      <rect width="18" height="18" fill="#e1e1e1"/>
      <path d="M20 6 L8 -4" stroke="#840053" stroke-width="3"/>
      <path d="M0 -4 L24 18" stroke="#840053" stroke-width="3"/>
      <path d="M0 4 L24 26" stroke="#840053" stroke-width="3"/>
      <path d="M0 12 L12 24" stroke="#840053" stroke-width="3"/>
    </svg>
  `,

  diagonalBrown: `
    <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
      <rect width="18" height="18" fill="#ffff00"/>
      <path d="M12 -4 L-4 12" stroke="#535423" stroke-width="1.5"/>
      <path d="M16 0 L0 16" stroke="#535423" stroke-width="1.5"/>
      <path d="M20 4 L4 20" stroke="#535423" stroke-width="1.5"/>
      <path d="M24 8 L8 24" stroke="#535423" stroke-width="1.5"/>
    </svg>
  `,

  diagonalBlack2: `
    <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
      <rect width="18" height="18" fill="#aec8e1"/>
      <path d="M26 -38 L-8 26" stroke="black" stroke-width="1"/>
      <path d="M26 -19 L-1 26" stroke="black" stroke-width="1"/>
      <path d="M26 -8 L8 26" stroke="black" stroke-width="1"/>
    </svg>
  `,

  diagonalBlue: `
    <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
      <rect width="18" height="18" fill="black"/>
      <path d="M12 -4 L-4 12" stroke="#aec8e1" stroke-width="5"/>
      <path d="M16 0 L0 16" stroke="#aec8e1" stroke-width="5"/>
      <path d="M20 4 L4 20" stroke="#aec8e1" stroke-width="5"/>
      <path d="M24 8 L8 24" stroke="#aec8e1" stroke-width="5"/>
    </svg>
  `,

  dashedVerticalYellow: `
    <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
      <rect width="14" height="24" fill="white"/>
      <path d="M7,0 L7,24" stroke="#e2c720" stroke-width="5" stroke-dasharray="8,8"/>
    </svg>
  `,
};

export const getPatternSvg = (key) => {
  const svg = PATTERN_SVGS[key] || PATTERN_SVGS.diagonalBlack;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

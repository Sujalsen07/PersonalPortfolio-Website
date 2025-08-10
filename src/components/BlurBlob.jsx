import React from 'react';

const BlurBlob = ({ position, size }) => {
  return (
    <div
      className="absolute rounded-full mix-blend-multiply opacity-50 blur-3xl animate-float z-0"
      style={{
        top: position?.top || '30%',
        left: position?.left || '20%',
        width: size?.width || '300px',
        height: size?.height || '300px',
        backgroundColor: '#8245ec',
      }}
    ></div>
  );
};

export default BlurBlob;

import React from 'react';
import css from '../css/loader.css'

const Loader = () => {
    const loaderOverlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
    };

    const loaderStyle = {
        width: '70px',
        height: '70px',
        borderRadius: '50%',
        position: 'relative',
        perspective: '800px',
    };

    const spinnerStyle = {
        width: '100%',
        height: '100%',
        border: '4px solid transparent',
        borderTopColor: '#fff',
        borderRadius: '50%',
        animation: 'spin 1.5s linear infinite',
    };

    const keyframesStyle = `
    @keyframes spin {
      0% {
        transform: rotateY(0deg);
      }
      50% {
        transform: rotateY(180deg) scale(0.8);
        opacity: 0.6;
      }
      100% {
        transform: rotateY(360deg);
      }
    }
  `;

    return (
        // <div style={loaderOverlayStyle}>
        //     <div style={loaderStyle}>
        //         <div style={spinnerStyle} />
        //     </div>
        //     <style>{keyframesStyle}</style>
        // </div>
        <div className="loader-container">
            <div className="spinner"></div>
        </div>
    );
};

export default Loader;

import React from 'react';


interface ShinyTextProps {
    text: string;
    disabled?: boolean;
    speed?: number;
    className?: string;
    onClick?: () => void;
}

const ShinyText: React.FC<ShinyTextProps> = ({ text, disabled = false, speed = 5, className = '', onClick }) => {
    const animationDuration = `${speed}s`;

    return (
            <button
            onClick={onClick}
            // Disable the button if the disabled prop is true
            disabled={disabled}
            className={`relative px-4 py-2 rounded-lg bg-transparent border-none cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
            >
            <span 
            className={`text-[#b5b5b5a4] bg-clip-text inline-block ${disabled ? '' : 'animate-shine'}`}
            style={{
                backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                animationDuration: animationDuration,
            }}
        >
            {text}
        </span>
        </button>
   
    );
};

export default ShinyText;


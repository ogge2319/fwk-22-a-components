import PropTypes from 'prop-types';
import styles from './Button.module.css';

export default function Button({ 
    children = "Klicka här", 
    onClick, 
    onStartGame, 
    disabled = false,
    type = "button",
    ...props 
}) {
    const handleClick = (e) => {
        if (disabled) return;
        
        onClick?.(e);
        onStartGame?.(e);
    };

    return (
        <button 
            className={styles.button}
            onClick={handleClick}
            disabled={disabled}
            type={type}
            {...props}
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    onStartGame: PropTypes.func,
    disabled: PropTypes.bool,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
};
  
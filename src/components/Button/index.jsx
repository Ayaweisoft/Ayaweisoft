import React from 'react'
import clsx from "clsx";
import PropTypes from 'prop-types';
import { useState } from 'react';


const Button = ({ inverse, className, override, children, type, onClickFunc, ...rest }) => {
    const [effect, setEffect] = useState(false);

    const styles = (inverse, className, override, effect) => clsx(
        className,
        ['border px-8 py-4 font-medium rounded-full border-black'],
        // Products/Marketplace
        inverse && 'text-white bg-green border-none',
        override && 'text-white bg-green border-none',
        // Default
        effect && 'animate-button_click'
        
    );
    return(
        // <Link {...rest} onClick={() => { setEffect(true) }} onAnimationEnd={() => { setEffect(false) }} className={styles(inverse, className, override, effect)} to={`/${to}`}>
        //     {children}
        // </Link>
    // ) : (
        <button {...rest} onClick={() => { setEffect(true); onClickFunc() }} onAnimationEnd={() => { setEffect(false) }} type={type} className={styles( inverse, className, override, effect)}>
            {children}
        </button>
    );
}

Button.defaultProps = {
    inverse: false,
    className: '',
    override: false,
    type: 'button',
    onClickFunc: () => { console.log('Button clicked') }
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    inverse: PropTypes.bool,
    className: PropTypes.string,
    override: PropTypes.bool,
    type: PropTypes.string,
    onClickFunc: PropTypes.func
};


export default Button
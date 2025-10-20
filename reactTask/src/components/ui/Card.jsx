import React from 'react';
import PropTypes from 'prop-types';

export default function Card({title, children, className = '', ...rest}) {
  const baseClasses = 'bg-white shadow-md rounded-lg p-4';
  const cardClasses = `${baseClasses} ${className}`;

  return (
    <div className={cardClasses} {...rest}>
        {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
        {children}
    </div>
    );
}
Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};


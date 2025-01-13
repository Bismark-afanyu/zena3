import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, title, icon, variant, borderColor }) => {
  return React.createElement(
    'button',
    {
      className: `flex items-center justify-center gap-1 rounded-full px-4 py-2 text-sm md:text-base lg:text-lg ${variant} border ${borderColor}`,
      type: type
    },
    React.createElement('span', { className: 'mr-2' }, title),
    //icon && React.createElement('span', { className: 'ml-2' }, icon)
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]).isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.node,
  variant: PropTypes.string,
  borderColor: PropTypes.string,
};

export default Button;

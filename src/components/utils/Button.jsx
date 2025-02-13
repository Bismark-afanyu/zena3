import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, title, icon, variant, borderColor }) => {
  return React.createElement(
    'button',
    {
      className: `flex items-center justify-center rounded-full text-xs md:text-sm lg:text-base font-semibold ${variant} border ${borderColor}`,
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

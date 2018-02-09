import React from 'react';
import PropTypes from 'prop-types';

const Link = ({
  active, children, onClick,
}) => {
  if (active) {
    return <span>{ children }</span>;
  }

  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      { children }
    </div>
  );
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;

import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({
  onClick, onKeyPress, completed, text, tabIndex,
}) => (
  <li>
    <div
      role="button"
      onClick={onClick}
      onKeyPress={onKeyPress}
      tabIndex={tabIndex}
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
    >
      {text}
    </div>
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func.isRequired,
  tabIndex: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;

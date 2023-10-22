import React from 'react';
import PropTypes from 'prop-types';
export const Section = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
};

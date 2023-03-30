import PropTypes from 'prop-types';
import React from 'react';
import css from '../Section/Section.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={css.container} key={title}>
      <h2 className={css.title}>{title}</h2>
      {children}
    </div>
  );
}

export default Section;

Section.propType = {
  title: PropTypes.string,
  children:PropTypes.node,
}
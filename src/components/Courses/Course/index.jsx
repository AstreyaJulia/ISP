import React from 'react';
import PropTypes from 'prop-types';
import { demoSteps } from '../../../@mock/SampleData';

const getCourseStep = (id) = demoSteps.find(x => x.id === id);

const Course = ({ prop }) => {
  return <div className={prop} />;
};

Course.propTypes = {
  /** React Prop Types */
  prop: PropTypes.string,
};

export default Course;

import React from 'react';
import PropTypes from 'prop-types';

const defaultProps = {
  title: '',
};

const propTypes = {
  title: PropTypes.string,
};

const Jumbotron = props => (
  <div className="jumbotron">
    <h1>{props.title}</h1>
    <p className="lead">Kickin&lsquo; it old school.</p>
    <p><a className="btn btn-lg btn-success" href="#hello-world">Hello world</a></p>
  </div>
);

Jumbotron.defaultProps = defaultProps;
Jumbotron.propTypes = propTypes;

export default Jumbotron;

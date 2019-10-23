import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root';

import Main from './Main';

const App = ({ title }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
      }}
    >
      <div
        style={{
          fontWeight: 'bold',
          fontSize: '16px',
          background: '#3f3f3f',
          textAlign: 'center',
          color: 'white',
        }}
      >
        {title}
      </div>
      <Main />
    </div>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default hot(App);

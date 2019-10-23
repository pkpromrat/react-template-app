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
          height: 60,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#3f3f3f',
        }}
      >
        <div
          style={{
            fontWeight: 'bold',
            fontSize: '16px',
            textAlign: 'center',
            color: 'white',
          }}
        >
          {title}
        </div>
      </div>
      <Main />
    </div>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default hot(App);

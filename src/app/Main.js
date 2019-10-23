import React from 'react';

import pngImg from '../images/pngImg.png';
import jpgImg from '../images/jpgImg.jpg';
import svgImg from '../images/svgImg.svg';

const Main = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div>
        {count}
        <button
          type="button"
          onClick={() => {
            setCount(count + 1);
          }}
          style={{ width: '120px', height: '44px', margin: '0 24px' }}
        >
          Add
        </button>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '40px 0',
          width: '100%',
        }}
      >
        <img
          src={pngImg}
          alt="png"
          height="120px"
          width="120px"
          style={{ margin: '0 14px' }}
        />
        <img
          src={jpgImg}
          alt="png"
          height="120px"
          width="120px"
          style={{ margin: '0 14px' }}
        />
        <img
          src={svgImg}
          alt="png"
          height="120px"
          width="120px"
          style={{ margin: '0 14px' }}
        />
      </div>
    </div>
  );
};

export default Main;

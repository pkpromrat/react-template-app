import React from 'react';

const Main = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
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
  );
};

export default Main;

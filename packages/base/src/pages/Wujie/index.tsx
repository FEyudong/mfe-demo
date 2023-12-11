import React from 'react';
import WujieReact from 'wujie-react';
const Demo: React.FC = () => {
  return (
    <WujieReact
      width="100%"
      height="100%"
      name="app1"
      url="http://127.0.0.1:5173/"
      sync
    />
  );
};
export default Demo;

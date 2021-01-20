import * as React from 'react';

import './Button.css';

export const Button: React.FunctionComponent = (props) => {
  const { children } = props;
  return (
    <button className="button">{children}</button>
  );
}

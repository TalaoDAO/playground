import React from 'react';

import { ReactComponent as MenuSvg } from './svgs/menu.svg';

const iconsMap = {
  'hamburger-menu': MenuSvg,
}

const Icon = ({
  name,
  className,
  color,
  size= 'medium',
  ...props
}) => {
  const sizes = {
    tiny: '0.5rem',
    small: '1rem',
    medium: '1.5rem',
    large: '2rem',
    xLarge: '3rem',
    huge: '5rem',
  };

  const Component = iconsMap[name];

  if (!Component)
    return <div />;

  return (
    <Component width={sizes[size]} height={sizes[size]} className={className} style={{ color }} {...props} />
  );
};

export default Icon;

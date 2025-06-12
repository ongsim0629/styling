import React from 'react';
import Icon from '@/components/atoms/Icon/Icon';

const Utils: React.FC = () => {
  return (
    <div className="utils" style={{ display: 'flex', gap: '10px' }}>
      <Icon type="search" className="icon-header" />
      <Icon type="home" className="icon-header" />
      <Icon type="user" className="icon-header" />
      <Icon
        type="menu"
        activeType="x"
        isActive={false}
        className="icon-header"
      />
    </div>
  );
};

export default Utils;

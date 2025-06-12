import React from 'react';
import Styles from './Header.module.css';
import Icon from '@/components/atoms/Icon/Icon';
import Utils from '@/components/molcules/Utils/Utils';
import CircleButton from '@/components/atoms/CircleButton/CircleButton';

const Header: React.FC = () => {
  return (
    <header
      className="header"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 20px',
        borderBottom: '1px solid #ccc',
      }}
    >
      <Icon type="logo" className="icon-logo" />
      <Utils />
      <CircleButton type="down" className="circle-down" />
    </header>
  );
};

export default Header;

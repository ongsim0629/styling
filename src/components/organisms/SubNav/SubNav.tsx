import React from 'react';
import Styles from './Header.module.css';
import Icon from '@/components/atoms/Icon/Icon';
import Accordion from '@/components/atoms/Accordion/Accordion';

const Header: React.FC = () => {
  return (
    <div
      className="header"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 20px',
        borderBottom: '1px solid #ccc',
      }}
    >
      <Icon type="home" className="icon-nav" />
      <Accordion text="My 건강검진"></Accordion>
      <Accordion text="선택"></Accordion>
    </div>
  );
};

export default Header;

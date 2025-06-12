import React from 'react';
import styles from './CircleButton.module.css';
import Icon from '@/components/atoms/Icon/Icon';

interface CircleButtonProps {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  type?: 'down' | 'custom';
}

const CircleButton: React.FC<CircleButtonProps> = ({
  onClick,
  className,
  children,
  type,
}) => {
  return type === 'down' ? (
    <button
      className={className ? styles[className] : undefined}
      onClick={onClick}
    >
      <Icon type="down_arrow" className={styles['circle-icon']} />
    </button>
  ) : (
    <button
      className={className ? styles[className] : undefined}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

export default CircleButton;

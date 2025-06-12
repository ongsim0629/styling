import React from 'react';
import styles from './Icon.module.css';
import { ReactComponent as DownArrowIcon } from '@/assets/icons/down.svg';
import { ReactComponent as HomeIcon } from '@/assets/icons/home.svg';
import { ReactComponent as LogoIcon } from '@/assets/icons/logo.svg';
import { ReactComponent as MenuIcon } from '@/assets/icons/menu.svg';
import { ReactComponent as SearchIcon } from '@/assets/icons/search.svg';
import { ReactComponent as UserIcon } from '@/assets/icons/user.svg';
import { ReactComponent as XIcon } from '@/assets/icons/x.svg';
import { ReactComponent as UpArrowIcon } from '@/assets/icons/up.svg'; // Assuming you have an up icon

const iconMap = {
  down_arrow: DownArrowIcon,
  home: HomeIcon,
  logo: LogoIcon,
  menu: MenuIcon,
  search: SearchIcon,
  up_arrow: UpArrowIcon,
  user: UserIcon,
  x: XIcon,
};

interface IconProps {
  type: keyof typeof iconMap;
  activeType?: keyof typeof iconMap;
  className?: string;
  link?: string;
  isActive?: boolean;
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({
  type,
  activeType,
  className,
  link,
  isActive = false,
  onClick,
}) => {
  const iconKey = isActive && activeType ? activeType : type;
  const IconComponent = iconMap[iconKey];

  if (!IconComponent) {
    console.log('존재하지 않는 아이콘 타입입니다:', iconKey);
    return null;
  }

  const content = (
    <IconComponent
      className={className ? styles[className] : undefined}
      onClick={onClick}
    />
  );

  if (link) {
    return (
      <a href={link} className={styles['icon-wrapper']}>
        {content}
      </a>
    );
  } else {
    return <div className={styles['icon-wrapper']}>{content}</div>;
  }
};

export default Icon;

import {FC, memo, useState} from 'react';

import {classNames} from 'shared/lib/classNames/classNames';
import {ThemeSwitcher} from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import {LangSwitcher} from 'shared/ui/LangSwitcher/LangSwitcher';

import classes from './Sidebar.module.scss'

export interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = memo(({className}) => {
  const [collapsed, setCollapsed] = useState(false);

  const onButtonClick = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <div className={classNames(classes.sidebar, {[classes.collapsed]: collapsed}, [className])}>
      <button onClick={onButtonClick}>-/+</button>
      <div className={classes.switchers}>
        <ThemeSwitcher/>
        <LangSwitcher/>
      </div>
    </div>
  );
});


    
    
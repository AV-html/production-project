import {FC} from 'react';

import {classNames} from 'shared/lib/classNames/classNames';
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink';
import {ThemeSwitcher} from '../../ThemeSwitcher';

import classes from './Navbar.module.scss'

export interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({className}) => {

  return (
    <div className={classNames(classes.navbar, {}, [className])}>
      <div>
        <ThemeSwitcher/>
      </div>
      <div className={classes.links}>
        <AppLink
          to={'/'}
          className={classes.main}
          theme={AppLinkTheme.INVERTED}
        >
          Главная
        </AppLink>
        <AppLink
          to={'/about'}
          theme={AppLinkTheme.INVERTED}
        >
          О сайте
        </AppLink>
      </div>
    </div>
  );
};
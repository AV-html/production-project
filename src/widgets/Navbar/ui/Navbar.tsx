import {FC} from 'react';

import {classNames} from 'shared/lib/classNames/classNames';
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink';

import classes from './Navbar.module.scss'
import {useTranslation} from 'react-i18next';

export interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({className}) => {
  const {t} = useTranslation()

  return (
    <div className={classNames(classes.navbar, {}, [className])}>
      <div>
      </div>
      <div className={classes.links}>
        <AppLink
          to={'/'}
          className={classes.main}
          theme={AppLinkTheme.INVERTED}
        >
          {t('translation:main')}
        </AppLink>
        <AppLink
          to={'/about'}
          theme={AppLinkTheme.INVERTED}
        >
          {t('translation:about')}
        </AppLink>
      </div>
    </div>
  );
};
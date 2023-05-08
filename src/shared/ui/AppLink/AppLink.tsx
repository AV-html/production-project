import {FC, memo} from 'react';

import {Link, LinkProps} from 'react-router-dom';
import {classNames} from '../../lib/classNames/classNames';
import {ValueOf} from '../../types/ValueOf';

import classes from './AppLink.module.scss';

export type AppLinkTheme = ValueOf<typeof AppLinkTheme>
export const AppLinkTheme = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  INVERTED: 'inverted'
} as const

export interface AppLinkModuleProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkModuleProps> = memo((props) => {
  const {
    className,
    theme = AppLinkTheme.PRIMARY,
    ...rest
  } = props;
  return (
    <Link {...rest} className={classNames(classes.link, {}, [className, classes[theme]])}/>
  );
});
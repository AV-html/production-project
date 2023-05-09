import { FC, memo } from 'react';

import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '../../lib/classNames/classNames';

import classes from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    INVERTED = 'inverted',
}

export interface AppLinkModuleProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkModuleProps> = memo(({
    className,
    theme = AppLinkTheme.PRIMARY,
    ...rest
}) => (
    <Link {...rest} className={classNames(classes.link, {}, [className, classes[theme]])} />
));

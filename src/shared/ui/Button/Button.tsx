import {ButtonHTMLAttributes, FC, memo} from 'react';

import {classNames} from '../../lib/classNames/classNames';

import classes from './Button.module.scss'

export enum ThemeButton {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  OUTLINE = 'outline',
  CLEAR = 'clear'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ThemeButton
}

export const Button: FC<ButtonProps> = memo((props) => {
  const {
    className,
    theme,
    ...rest
  } = props

  return (
    <button
      {...rest}
      className={classNames(classes.button, {}, [className, theme])}
    />
  );
});
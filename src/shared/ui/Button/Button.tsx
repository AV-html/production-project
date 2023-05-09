import {ButtonHTMLAttributes, FC, memo} from 'react';

import {classNames} from '../../lib/classNames/classNames';

import classes from './Button.module.scss'

export enum VariantButton {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  OUTLINE = 'outline',
  CLEAR = 'clear'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantButton
}

export const Button: FC<ButtonProps> = memo((props) => {
  const {
    className,
    variant,
    ...rest
  } = props

  return (
    <button
      {...rest}
      className={classNames(classes.button, {}, [className, classes[variant]])}
    />
  );
});
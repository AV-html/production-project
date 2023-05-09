import { ButtonHTMLAttributes, FC, memo } from 'react';

import { classNames } from '../../lib/classNames/classNames';

import classes from './Button.module.scss';

export enum VariantButton {
  PRIMARY = 'primary',
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
        type = 'button',
        ...rest
    } = props;

    return (
        <button
            {...rest}
            type={type}
            className={classNames(classes.button, {}, [className, classes[variant]])}
        />
    );
});

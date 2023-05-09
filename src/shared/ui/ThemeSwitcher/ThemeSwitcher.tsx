import {FC} from 'react';

import {useTheme} from 'app/providers/ThemeProvider';
import {classNames} from '../../lib/classNames/classNames';
import {Button, VariantButton} from '../Button/Button';
import ThemeIcon from '../../assets/theme.svg'

import classes from './ThemeSwitcher.module.scss'

export interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className}) => {
  const {toggleTheme} = useTheme()

  return (
    <Button
      className={classNames(classes.themeSwitcher, {}, [className])}
      onClick={toggleTheme}
      variant={VariantButton.CLEAR}
    >
      <ThemeIcon fill={'var(--tab-color)'}/>
    </Button>
  );
};
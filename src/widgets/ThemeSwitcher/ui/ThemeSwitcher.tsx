import {FC} from 'react';

import {useTheme} from 'app/providers/ThemeProvider';
import {classNames} from 'shared/lib/classNames/classNames';
import {Button, ThemeButton} from 'shared/ui/Button/Button';
import ThemeIcon from 'shared/assets/theme.svg'

import classes from './ThemeSwitcher.module.scss'

export interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className}) => {
  const {toggleTheme} = useTheme()

  return (
    <Button
      className={classNames(classes.button, {}, [className])}
      onClick={toggleTheme}
      theme={ThemeButton.CLEAR}
    >
      <ThemeIcon fill={'var(--tab-color)'}/>
    </Button>
  );
};
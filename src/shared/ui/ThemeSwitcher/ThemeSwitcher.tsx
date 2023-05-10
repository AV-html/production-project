import { FC } from 'react';

import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from '../../lib/classNames/classNames';
import { Button, VariantButton } from '../Button/Button';
import ThemeIcon from '../../assets/theme.svg';

export interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { toggleTheme } = useTheme();

    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
            variant={VariantButton.CLEAR}
        >
            <ThemeIcon />
        </Button>
    );
};

import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, VariantButton } from '../Button/Button';

export interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = memo(({ className }) => {
    const { t, i18n } = useTranslation();

    const toggleLang = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <div className={classNames('', {}, [className])}>
            <Button
                variant={VariantButton.CLEAR}
                onClick={toggleLang}
            >
                {t('Язык')}
            </Button>
        </div>
    );
});

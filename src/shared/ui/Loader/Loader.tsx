import { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import classes from './Loader.module.scss';

export interface LoaderProps {
    className?: string
}

export const Loader: FC<LoaderProps> = ({ className }) => (
    <div className={classNames(classes.loader, {}, [className])}>
        {Array(12).fill(0).map(() => <div />)}
    </div>
);

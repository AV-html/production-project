import { RouteProps } from 'react-router-dom';

import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFound } from 'pages/NotFoundPage';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not-found'
}

export interface RouteConfig extends RouteProps {
  name: AppRoutes
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: RouteConfig[] = [
    {
        name: AppRoutes.MAIN,
        path: RoutePath.main,
        element: <MainPage />,
    },
    {
        name: AppRoutes.ABOUT,
        path: RoutePath.about,
        element: <AboutPage />,
    },
    {
        name: AppRoutes.NOT_FOUND,
        path: RoutePath['not-found'],
        element: <NotFound />,
    },
];

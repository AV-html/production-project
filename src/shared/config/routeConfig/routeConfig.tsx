import { RouteProps } from 'react-router-dom';

import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
}

export interface RouteConfig extends RouteProps {
  name: AppRoutes
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
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
];

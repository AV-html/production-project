import {RouteProps} from 'react-router-dom';

import {ValueOf} from 'shared/types/ValueOf';
import {MainPage} from 'pages/MainPage';
import {AboutPage} from 'pages/AboutPage';

export type AppRoutes = ValueOf<typeof AppRoutes>
export const AppRoutes = {
  MAIN: 'main',
  ABOUT: 'about'
} as const

export interface RouteConfig extends RouteProps {
  name: AppRoutes
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
}

export const routeConfig: RouteConfig[] = [
  {
    name: AppRoutes.MAIN,
    path: RoutePath.main,
    element: <MainPage/>
  },
  {
    name: AppRoutes.ABOUT,
    path: RoutePath.about,
    element: <AboutPage/>
  },
]
import { Suspense } from 'react';
import {Route, Routes} from 'react-router-dom';

import {useTheme} from './providers/ThemeProvider';
import {MainPage} from 'pages/MainPage';
import {AboutPage} from 'pages/AboutPage';
import {classNames} from 'shared/lib/classNames/classNames';

import './styles/index.scss';

export const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Сменить тему</button>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path={'/'} element={<MainPage/>}/>
          <Route path={'/about'} element={<AboutPage/>}/>
        </Routes>
      </Suspense>
    </div>
  )
}
import {Route, Routes} from 'react-router-dom';

import {useTheme} from './theme/useTheme';
import {classNames} from './helpers/classNames/classNames';

import './styles/index.scss';

export const App = () => {
  const {theme, toggleTheme} = useTheme();

  console.log(theme)

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Сменить тему</button>
      {/*<Routes>*/}
      {/*  <Route path={'/about'}>*/}

      {/*  </Route>*/}
      {/*</Routes>*/}
    </div>
  )
}
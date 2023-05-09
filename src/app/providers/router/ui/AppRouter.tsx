import {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';

import {routeConfig} from 'shared/config/routeConfig/routeConfig';

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>...</div>}>
      <Routes>
        {routeConfig.map(({path, element}) => <Route
            key={path}
            path={path}
            element={(
              <div className={"page-wrapper"}>
                {element}
              </div>
            )}
          />
        )}
      </Routes>
    </Suspense>
  );
};
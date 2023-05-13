import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLoader } from 'widgets/PageLoader';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

export const AppRouter = () => (
    <Routes>
        {routeConfig.map(({ path, element }) => (
            <Route
                key={path}
                path={path}
                element={(
                    <Suspense fallback={<PageLoader />}>
                        <div className="page-wrapper">
                            {element}
                        </div>
                    </Suspense>
                )}
            />
        ))}
    </Routes>
);

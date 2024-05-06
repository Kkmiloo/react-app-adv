import {
  BrowserRouter,
  NavLink,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import { routes } from './routes';
import { Suspense } from 'react';

export const Navigation = () => {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <nav className='mr-4 bg-zinc-800 h-screen text-center w-64'>
          <ul className=' flex gap-4 items-center flex-col justify-center pl-0'>
            {routes.map((route) => (
              <li key={route.name}>
                <NavLink
                  to={route.to}
                  className={'text-zinc-400 aria-[current=page]:text-white'}
                >
                  {route.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Routes>
          {routes.map((route) => (
            <Route
              key={route.name}
              path={route.path}
              element={<route.Component />}
            ></Route>
          ))}
          <Route path='/*' element={<Navigate to={routes[0].to} replace />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

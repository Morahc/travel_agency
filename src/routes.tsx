import { createBrowserRouter } from 'react-router-dom';
import React from 'react';

const Layout = React.lazy(() =>
  import('./components/Layout')
    .then(({ Layout }) => ({ default: Layout })),
);

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        async lazy() {
          const { Home } = await import('./pages/Home');
          return { Component: Home };
        },
      },
      {
        path: '/faqs',
        async lazy() {
          const { Faqs } = await import('./pages/Faqs');
          return { Component: Faqs };
        },
      },
      {
        path: '/about-us',
        async lazy() {
          const { About } = await import('./pages/About');
          return { Component: About };
        },
      }
    ],
  },
]);

export default Routes;

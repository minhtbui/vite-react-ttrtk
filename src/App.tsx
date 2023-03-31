import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';
import Home from './pages/home';
import Layout from './pages/layout';
import NotFound from './pages/notFound';

export const routesConfig: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        errorElement: <NotFound />,
      },
    ],
  },
];

function App() {
  const router = createBrowserRouter(routesConfig);
  return <RouterProvider router={router} />;
}

export default App;

import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './styles/index.css';
import App from './App';
import Hero from './components/Hero';
import ErrorPage from './components/ErrorPage';
import Projects from './components/Projects';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <App />
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
      {
        path: '/componennts/navbar/Projects',
        element: <Projects />,
      },
      {
        path: 'hero',
        element: <Hero />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

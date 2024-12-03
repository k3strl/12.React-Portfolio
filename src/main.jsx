import ReactDOM from 'react-dom/client';
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './App';
import Hero from './components/navbar/Hero';
import ErrorPage from './components/ErrorPage';
import Projects from './components/navbar/Projects';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: '/components/navbar/Hero',
        element: <Hero />,
      },
      {
        path: '/components/navbar/projects',
        element: <Projects />,
      },
      {
        path: '/components/navbar/hero',
        element: <Hero />,
      },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);















// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./styles/index.css";
// import App from "./App.jsx";
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     component: <App />,
//   },
//   {
//     path: '/Header',
//     component: <Header />,
//   },
//   {
//     path: '/Navbar',
//     component: <Navbar />,
//   },
//   {
//     path: '/Hero',
//     component: <Hero />,
//   },
//   {
//     path: '/Projects',
//     component: <Projects />,
//   },
//   {
//     path: '/Contact',
//     component: <Contact />,
//   },
//   {
//     path: '/Footer',
//     component: <Footer />,
//   }
// ]);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     {/* <App /> -- Remove this so that we can defer the actual rendering of our components to React Router*/}
//     <RouterProvider router={router}>
//       <App />
//     </RouterProvider>
//   </StrictMode>
// );

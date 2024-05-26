import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import IntroPage from './pages/Intro';
import ErrorPage from './pages/Error';
import WorkPage from './pages/Work';
import ReactPage from './pages/React';
import RootLayout from './components/RootLayout';
import IntroLayout from './components/IntroLayout';
import WorkLayout from './components/WorkLayout';
import IntroDetailPage from './pages/IntroDetail';
import ReactLayout from './components/ReactLayout';

import './App.css';
import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: 'intro',
        element: <IntroLayout/>,
        children: [
          {
            index: true,
            element: <IntroPage />
          },
          {
            path: ':id',
            element: <IntroDetailPage/>
          }
        ]
      },
     {
      path: 'work',
      element: <WorkLayout/>,
      children: [
        {
          index: true,
          element: <WorkPage/>
        },
        {
          index: false,
          element: <ErrorPage/>
        }
      ]
     },
     {
      path: 'react',
      element: <ReactLayout/>,
      children: [
        {
          index: true,
          element: <ReactPage/>
        },
        {
          index: false,
          element: <ErrorPage/>
        }
      ]
     },
    ],
  },

]);


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App

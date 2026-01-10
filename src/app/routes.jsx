import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Skills from '../pages/Skills/Skills';
import Projects from '../pages/Projects/Projects';
import Experience from '../pages/Experience/Experience';
import Contact from '../pages/Contact/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'skills',
        element: <Skills />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'experience',
        element: <Experience />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

export default router;

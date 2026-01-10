import { RouterProvider } from 'react-router-dom';
import router from './routes';
import '../styles/globals.css';
import '../components/ui/Card.css';
import '../components/common/Loader.css';

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

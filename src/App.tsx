import { RouterProvider } from 'react-router-dom';
import router from './routes';

const test = '';

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

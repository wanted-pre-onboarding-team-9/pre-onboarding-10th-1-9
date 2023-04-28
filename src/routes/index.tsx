import { createBrowserRouter } from 'react-router-dom';
import { Main, TodoList, SignUp, SignIn } from '../pages';
import Auth from './Auth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Auth />,
    children: [
      {
        path: '',
        element: <Main />,
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
      {
        path: 'signin',
        element: <SignIn />,
      },
      {
        path: 'todo',
        element: <TodoList />,
      },
    ],
  },
]);

export default router;

import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { loaderFunction as loader, loaderFunctionOnLogin as loaderOnLogin } from './loader.js';
import {  } from './loader.js';
import { Home } from './Pages/Home.tsx';
import {Login} from './Pages/Login.tsx';
import { Signup } from './Pages/Signup.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    loader: loader
  },
  {
    path: "/login",
    element: <Login/>, 
    loader: loaderOnLogin 
  },
  {
    path: "/signin",
    element: <Signup/>,
    loader: loaderOnLogin
  },
]);


function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;

// Working on login, redirect when I user is already logged in
import "./App.css";
// eslint-disable-next-line
import * as ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// importing pages
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);

  return (
    <div className="max-h-screen overflow-hidden">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/bubble-sort",
      element: <div>Bubble Sort</div>,
    },
    {
      path: "/selection-sort",
      element: <div>Selection Sort</div>,
    },
  ],
  { basename: "/sortifyv2" },
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Outlet />
    </>
  );
}

export default App;

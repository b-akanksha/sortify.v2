import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
  },
  {
    path: "/bubble-sort",
    element: <div>Bubble Sort</div>,
  },
  {
    path: "/selection-sort",
    element: <div>Selection Sort</div>,
  },
], { basename: '/sortifyv2'});

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Outlet />
    </>
  );
}

export default App;

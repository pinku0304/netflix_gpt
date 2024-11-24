import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },

    {
      path: "/browse",
      element: <Browse />,
    },

    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return (
    <div className="container pt-5">
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Body;

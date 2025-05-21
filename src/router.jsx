import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "add",
        element: <AddPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    basename: "/skillTrack",
  },
]);
export default router;

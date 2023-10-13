import App from "./App";
import HomePage from "./pages/HomePage";
import Form from "./pages/Form";
import ViewAll from "./pages/ViewAll";
import ViewOne from "./pages/ViewOne";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/form",
        element: <Form />,
      },
      {
        path: "/all",
        element: <ViewAll />,
      },
      {
        path: "/all/:id",
        element: <ViewOne />,
      },
    ],
  },
];

export default routes;

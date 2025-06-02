import App from "./App";
import Homepage from "./components/HomePage";
import ItemsPage from "./components/ItemsPage";
import CategoriesPage from "./components/CategoriesPage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/items",
        element: <ItemsPage />,
      },
      {
        path: "/categories",
        element: <CategoriesPage />,
      },
    ],
  },
];

export default routes;

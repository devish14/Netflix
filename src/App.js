import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import appStore from "./utils/AppStore";
import Login from "./components/Login";
import Browse from "./components/Browse.js";
import { Provider } from "react-redux";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import "./utils/fontAwesome.js"; // Ensure this import comes before components using FontAwesomeIcon

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Provider store={appStore}>
        <Body />
        <Outlet />
      </Provider>
    </div>
  );
};

const bodyRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={bodyRouter}></RouterProvider>);

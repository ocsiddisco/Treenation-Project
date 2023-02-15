import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import List from "./Routes/List";
import Card from "./Routes/Card";
import CardDetails from "./Routes/CardDetails";
import ErrorPage from "./Routes/ErrorPage";
import CounterWrapper from "./Components/CounterWrapper";
import { store } from "./app/store";
import "./Font/OpenSans/OpenSans-Light.ttf";
import "./Font/OpenSans/OpenSans-Regular.ttf";

const router = createBrowserRouter([
  {
    path: "/",
    element: <List />,
    errorElement: <ErrorPage />,
  },
  {
    path: "project/:id",
    element: <Card />,
    errorElement: <ErrorPage />,
  },
  {
    path: "tree/:id",
    element: <CardDetails />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <CounterWrapper />
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

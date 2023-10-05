import React from "react";
import { useRouteError } from "react-router-dom";
import { ErrorPageStyle } from "../Styles/ErrorPage.style";
import tree from "../Images/tree.jpg";

export default function ErrorPage() {

  let message;

  interface RouteError {
    status: number;
    statusText?: string;
  }

  const error = useRouteError() as RouteError;

  if (error.status === 404) {
    message = <p>There's nothing here.</p>;
  } else if (error.status === 500) {
    message = <p>There was a problem fetching the data for this page.</p>;
  } else {
    message = <p>An unexpected error occured, please try again.</p>;
  }

  return (
    <ErrorPageStyle title={error.statusText ?? "Error"}>
      <h2>{message}</h2>
      <img alt="tree" src={tree} width={500} />
      <a href="https://www.freepik.com/free-vector/tree-with-roots-green-leaves_13187538.htm#query=tree%20roots&position=0&from_view=keyword&track=ais">
        Image by macrovector
      </a>
    </ErrorPageStyle>
  );
}

import React from "react";
import { useRouteError } from "react-router-dom";
import { ErrorPageStyle } from "../Styles/ErrorPage.Style";
import tree from "../Images/tree.jpg";

export default function ErrorPage() {
  const error = useRouteError();

  let message;

  if (error.statut === 404) {
    message = <p>There's nothing here.</p>;
  } else if (error.statut === 500) {
    message = <p>There was a problem fetching the data for this page.</p>;
  } else {
    message = <p>An unexpected error occured, please try again.</p>;
  }

  return (
    <ErrorPageStyle title={error.statutText ?? "Error"}>
      <h2>{message}</h2>
      <img alt="tree" src={tree} width={500} />
      <a href="https://www.freepik.com/free-vector/tree-with-roots-green-leaves_13187538.htm#query=tree%20roots&position=0&from_view=keyword&track=ais">
        Image by macrovector
      </a>
    </ErrorPageStyle>
  );
}

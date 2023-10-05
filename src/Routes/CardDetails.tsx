import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import LoadingSpinner from "../Components/Spinner/Spinner.tsx";
import { useGetDetailsQuery } from "../Features/TreenationApi.tsx";
import { useAppDispatch } from "../app/hooks.tsx";
import { decrement } from "../Features/CounterSlice";
import { BackButton } from "../Styles/Button.style";
import { Main } from "../Styles/Main.style.ts";

import { DetailsStyle } from "../Styles/Details.style.ts";
import {
  ComponentCenter,
  ComponentTwo,
  ComponentThree,
} from "../Styles/Div.style.ts";

export default function CardDetails() {
  // useParams retrieves the ID from the URL, allowing us to use it as props for the API on cardDetails.
  const { id } = useParams<{id?: string}>();
  const { data, isLoading } = useGetDetailsQuery(id ?? '');
  const dispatch = useAppDispatch();
  let navigate = useNavigate();
  let goBack = () => {
    navigate(-1);
  };

  const handleClick = () => {
    goBack();
    dispatch(decrement());
  };

  return (
    <Main>
    <ComponentCenter>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
      <>
        {data !== undefined && (
        <DetailsStyle key={data.id}>
          <ComponentCenter>
            <h4>{data.name}</h4>
          </ComponentCenter>

          <ComponentTwo>
            <div>
              <p>
                <strong>Life Time CO2: </strong>
                {data.life_time_CO2} Kg
              </p>
              <p>
                <strong>Price: </strong>
                {data.price} euros
              </p>
              <p>
                <strong>Family: </strong>
                {data.family}
              </p>
              <p>
                <strong>Average Natural Life Span: </strong>
                {data.average_natural_life_span} years
              </p>
              <p>
                <strong>Stock: </strong>
                {data.stock}
              </p>
              <p>
                <strong>Foliage: </strong>
                {data.foliage_type?.name}
              </p>
              <p>
                <strong>Origin type: </strong>
                {data.origin_type?.name}
              </p>
            </div>
            <div>
              <img
                src={data.image}
                alt="tree"
                style={{
                  maxWidth: "300px",
                  height: "auto",
                  border: "1px solid",
                  borderRadius: "20px",
                }}
              />
            </div>
          </ComponentTwo>

          <ComponentThree>
            <p>
              <strong>What makes this tree special?</strong>
              <br />
              {data.particularities}
            </p>
            <p>
              <strong> Why do planters like this tree?</strong>

              <br />
              {data.planter_likes}
            </p>
          </ComponentThree>

         
        </DetailsStyle>
              )} <BackButton onClick={handleClick}>
            Back to list of trees.
          </BackButton>
        </>)}
    </ComponentCenter>
    </Main>
  );
}

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
              <p className="column">
                <span className="bold">Life Time CO2: </span>
                <span>{data.life_time_CO2} Kg</span>
              </p>
              <p className="column">
                <span  className="bold">Price: </span>
                <span>{data.price} euros</span>
              </p>
              <p className="column">
                <span  className="bold">Family: </span>
                <span>{data.family}</span>
              </p>
              <p className="column">
                <span  className="bold">Average Natural Life Span: </span>
                <span>{data.average_natural_life_span} years</span>
              </p>
              <p className="column">
                <span  className="bold">Stock: </span>
                <span>{data.stock}</span>
              </p>
              <p className="column">
                <span  className="bold">Foliage: </span>
                <span>{data.foliage_type?.name}</span>
              </p>
              <p className="column">
                <span  className="bold">Origin type: </span>
                <span>{data.origin_type?.name}</span>
              </p>
            </div>
              <img
                src={data.image}
                alt="tree"
                style={{
                  border: "1px solid",
                  borderRadius: "20px",
                  marginBottom: "20px"
                }}
              />
          </ComponentTwo>

          <ComponentThree>
            <p>
              <span  className="bold">What makes this tree special?</span>
              <br />
              <span className="space">{data.particularities}</span>
            </p>
            <p>
              <span  className="bold"> Why do planters like this tree?</span>

              <br />
              <span className="space">{data.planter_likes}</span>
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

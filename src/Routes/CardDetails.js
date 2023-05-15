import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import LoadingSpinner from "../Components/Spinner/Spinner.js";
import { useGetDetailsQuery } from "../Features/TreenationApi.js";
import { useDispatch } from "react-redux";
import { decrement } from "../Features/CounterSlice";
import { BackButton } from "../Styles/Button.style.js";
import { DetailsStyle } from "../Styles/Details.Style.js";
import {
  ComponentCenter,
  ComponentTwo,
  ComponentThree,
} from "../Styles/Div.Style";

export default function CardDetails() {
  // useParams retrieves the ID from the URL, allowing us to use it as props for the API on cardDetails.
  const { id } = useParams();

  const { data, isLoading } = useGetDetailsQuery(id);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  let goBack = () => {
    navigate(-1);
  };

  const handleClick = () => {
    goBack();
    dispatch(decrement());
  };

  return (
    <ComponentCenter>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <DetailsStyle key={data.id}>
          <ComponentCenter>
            <h1>{data.name}</h1>
          </ComponentCenter>

          <ComponentTwo>
            <div>
              <h4>
                <strong>Life Time CO2: </strong>
                {data.life_time_CO2} Kg
              </h4>
              <h4>
                <strong>Price: </strong>
                {data.price} euros
              </h4>
              <h4>
                <strong>Family: </strong>
                {data.family}
              </h4>
              <h4>
                <strong>Average Natural Life Span: </strong>
                {data.average_natural_life_span} years
              </h4>
              <h4>
                <strong>Stock: </strong>
                {data.stock}
              </h4>
              <h4>
                <strong>Foliage: </strong>
                {data.foliage_type.name}
              </h4>
              <h4>
                <strong>Origin type: </strong>
                {data.origin_type.name}
              </h4>
            </div>
            <div>
              <img
                src={data.image}
                alt=" "
                width="300px"
                height="auto"
                style={{
                  border: "1px",
                  borderRadius: "20px",
                }}
              />
            </div>
          </ComponentTwo>

          <ComponentThree>
            <h4>
              <strong>What makes this tree special?</strong>
              <br />
              {data.particularities}
            </h4>
            <h4>
              <strong> Why do planters like this tree?</strong>

              <br />
              {data.planter_likes}
            </h4>
          </ComponentThree>

          <BackButton onClick={handleClick}>
            Back to the list of trees.
          </BackButton>
        </DetailsStyle>
      )}
    </ComponentCenter>
  );
}

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
              <h4>Life Time CO2: {data.life_time_CO2} Kg</h4>
              <h4>Price: {data.price} euros</h4>
              <h4>Family: {data.family}</h4>
              <h4>
                Average Natural Life Span: {data.average_natural_life_span}{" "}
                years
              </h4>
              <h4>Stock: {data.stock}</h4>
              <h4>Foliage: {data.foliage_type.name}</h4>
              <h4>Origin type: {data.origin_type.name}</h4>
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
                  marginTop: "20px",
                }}
              />
            </div>
          </ComponentTwo>

          <ComponentThree>
            <h4>
              What makes this tree special?
              <br />
              {data.particularities}
            </h4>
            <h4>
              Why do planters like this tree?
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

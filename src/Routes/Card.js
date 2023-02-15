import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import LoadingSpinner from "../Components/Spinner/Spinner.js";
import { useGetAllQuery } from "../Features/TreenationApi";
import { useDispatch } from "react-redux";
import { decrement } from "../Features/CounterSlice";
import { BackButton } from "../Styles/Button.style";
import { StyledCard } from "../Styles/Cards.style.js";
import { Title } from "../Styles/Title.style";
import { CardsWrapper } from "../Styles/CardsWrapper.style";
import { RenderBarChart } from "../Components/Graph";
import { ComponentCenterColumn, ComponentCenter } from "../Styles/Div.Style";
import chart from "../Images/chart.png";

export default function Card() {
  const { id } = useParams();
  const { data, isLoading } = useGetAllQuery(id);
  const [showed, setShowed] = useState(false);

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
    <div>
      <BackButton onClick={handleClick}>
        Go back to the projects page
      </BackButton>
      <ComponentCenter>
        <Title>List of trees planted in this project</Title>
      </ComponentCenter>
      {isLoading ? (
        <ComponentCenter>
          <LoadingSpinner />
        </ComponentCenter>
      ) : (
        <div>
          <ComponentCenterColumn>
            <img
              alt="chart"
              src={chart}
              onClick={() => setShowed(!showed)}
              style={{ cursor: "pointer" }}
            />
            {showed && <RenderBarChart data={data} />}
          </ComponentCenterColumn>

          <CardsWrapper>
            {data.map((tree) => {
              return (
                <StyledCard key={tree.id} onClick={() => dispatch(decrement())}>
                  <Link
                    to={`/tree/${tree.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <h1>{tree.name}</h1>
                    <h4>Life Time CO2: {tree.life_time_CO2} Kg</h4>
                    <h4>Price per tree: {tree.price} euros</h4>
                  </Link>
                </StyledCard>
              );
            })}
          </CardsWrapper>

          <BackButton onClick={handleClick}>
            Go back to the projects page
          </BackButton>
        </div>
      )}
    </div>
  );
}

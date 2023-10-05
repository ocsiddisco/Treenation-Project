import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import LoadingSpinner from "../Components/Spinner/Spinner.tsx";
import { useGetAllQuery } from "../Features/TreenationApi.tsx";
import { useAppDispatch } from "../app/hooks.tsx";
import { decrement } from "../Features/CounterSlice.tsx";
import { BackButton } from "../Styles/Button.style.ts";
import { StyledCard } from "../Styles/Cards.style.ts";
import { Title } from "../Styles/Title.style.ts";
import { Main } from "../Styles/Main.style.ts";

import { CardsWrapper } from "../Styles/CardsWrapper.style.ts";
import { RenderBarChart } from "../Components/Graph.tsx";
import Scroll from "../Components/Scroll.tsx";

import { ComponentCenterColumn, ComponentCenter } from "../Styles/Div.style.ts";
import chart from "../Images/chart.png";

export default function Card() {
  const { id } = useParams<{ id?: string }>();
  // if (!id) { return}
  // const { data, isLoading } = useGetAllQuery(id);
  const [showed, setShowed] = useState(false);
  const dispatch = useAppDispatch();
  let navigate = useNavigate();


  let goBack = () => {
    navigate(-1);
  };

  const handleClick = () => {
    goBack();
    dispatch(decrement());
  };

  const { data, isLoading } = useGetAllQuery(id ?? '');

  return (
    <Main>
      <BackButton onClick={handleClick}>
        Back to projects page
      </BackButton>
      <ComponentCenter>
        <Title>
          <h1>Trees</h1>
          <p>Discover the story of the trees rooted in this project. Explore their journey, their impact, and the vital role they play in our ecosystem. Get to know the trees we've planted and the positive change they bring.</p>
        </Title>
      </ComponentCenter>
      {isLoading ? (
        <ComponentCenter>
          <LoadingSpinner />
        </ComponentCenter>
      ) : (
        <>
          {data !== undefined && (
            <ComponentCenterColumn>
              <img
                alt="chart"
                src={chart}
                onClick={() => setShowed(!showed)}
                style={{ cursor: "pointer" }}
              />
              {showed && <RenderBarChart data={data} />}
            </ComponentCenterColumn>
          )}

          <CardsWrapper>
            {data !== undefined && ([...data].sort((a, b) => (b.name < a.name ? 1 : -1)).map((tree) => (
              <StyledCard key={tree.id} onClick={() => dispatch(decrement())}>
                <Link to={`/tree/${tree.id}`} style={{ textDecoration: "none" }}>
                  <h4>{tree.name}</h4>
                  <p>
                    <strong>Life Time CO2: </strong>
                    {tree.life_time_CO2} Kg
                  </p>
                  <p>
                    <strong>Price per tree:</strong> {tree.price} euros
                  </p>
                </Link>
              </StyledCard>
            )))}
            <Scroll />
          </CardsWrapper>
        </>
      )}
      <BackButton onClick={handleClick}>
         Back to projects page
      </BackButton>
    </Main>
  );
}

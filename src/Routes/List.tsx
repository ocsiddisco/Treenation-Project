import { Link } from "react-router-dom";
import React from "react";
import LoadingSpinner from "../Components/Spinner/Spinner.tsx";
import Scroll from "../Components/Scroll.tsx";
import { Main } from "../Styles/Main.style.ts";
import { useGetProjectsQuery } from "../Features/TreenationApi.tsx";
import { decrement } from "../Features/CounterSlice.tsx";
// import { useDispatch } from "react-redux";
import { useAppDispatch } from "../app/hooks.tsx";
import { Title } from "../Styles/Title.style.ts";
import { StyledCard } from "../Styles/Cards.style.ts";
import { CardsWrapper } from "../Styles/CardsWrapper.style.ts";
import { ComponentCenter } from "../Styles/Div.style.ts";



export default function List() {

  const { data, isLoading } = useGetProjectsQuery();

const dispatch = useAppDispatch();


  return (
    <Main>
      <Title>
        <h1>Treenation </h1>
        <p>Explore the Treenation projects ready for your support. These initiatives are currently seeking funding to make a positive impact on our environment and communities.</p>
      </Title>
      {isLoading ? (
        <ComponentCenter>
          <LoadingSpinner />
        </ComponentCenter>
      ) : (
        <CardsWrapper>
          {data!== undefined && ([...data]
            .sort((a, b) => (b.name < a.name ? 1 : -1))
            .map((project) => {
              return (
                <StyledCard
                  key={project.id}
                  onClick={() => dispatch(decrement())}
                >
                  <Link
                    to={`/project/${project.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <h4>{project.name}</h4>
                    <p>
                      <strong>{project.location}</strong>
                    </p>
                    <p>{project.description}</p>
                  </Link>
                </StyledCard>
              );
            }))}
          <Scroll />
        </CardsWrapper>
      )}
    </Main>
  );
}

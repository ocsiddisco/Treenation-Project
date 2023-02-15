import { Link } from "react-router-dom";
import React from "react";
import LoadingSpinner from "../Components/Spinner/Spinner.js";
import { useGetProjectsQuery } from "../Features/TreenationApi";
import { decrement } from "../Features/CounterSlice";
import { useDispatch } from "react-redux";
import { Title } from "../Styles/Title.style";
import { StyledCard } from "../Styles/Cards.style.js";
import { CardsWrapper } from "../Styles/CardsWrapper.style.js";

export default function List() {
  const { data, isLoading } = useGetProjectsQuery();
  const dispatch = useDispatch();

  return (
    <div>
      <Title>Projects currently available for funding</Title>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <CardsWrapper>
          {data.map((project) => {
            return (
              <StyledCard
                key={project.id}
                onClick={() => dispatch(decrement())}
              >
                <Link
                  to={`/project/${project.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <h1>{project.name}</h1>
                  <h4>Country: {project.location}</h4>
                  <h4>{project.description}</h4>
                </Link>
              </StyledCard>
            );
          })}
        </CardsWrapper>
      )}
    </div>
  );
}

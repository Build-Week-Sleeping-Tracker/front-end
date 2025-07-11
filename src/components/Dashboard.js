import React, { useEffect } from "react";

import EntryForm from "./EntryForm";

import SleepList from "./SleepList";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { fetchSleep } from "../actions";

const Dashboard = () => {
  const { entries, stateError, isFetching } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSleep());
  }, [dispatch]);

  if (isFetching) return <h2>Loading Entries...</h2>;
  else if (!isFetching && stateError) return <h2>{stateError}</h2>;

  return (
    <>
      <EntryForm />
      <FlexCards>
        <SleepList />
      </FlexCards>
    </>
  );
};

export default Dashboard;

const FlexCards = styled.div`
  width: 100%;
`;

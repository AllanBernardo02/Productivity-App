import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { getSuperHeroes } from "../../api/api";

const Fetch = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["super-heroes"],
    queryFn: getSuperHeroes,
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <div>
        <h2>Fetch Using React Query</h2>
        {data?.map((o, index) => (
          <h1 key={index}>{o.name}</h1>
        ))}
      </div>
    </>
  );
};

export default Fetch;

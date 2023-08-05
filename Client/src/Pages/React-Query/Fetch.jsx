import axios from "axios";
import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { createSuperHeroes, getSuperHeroes } from "../../api/api";

const Fetch = () => {
  const [form, setForm] = useState({
    id: "",
    name: "",
    alterEgo: "",
  });
  const queryClient = useQueryClient();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["super-heroes"],
    queryFn: getSuperHeroes,
  });

  const mutation = useMutation({
    mutationKey: ["superHeroes"],
    mutationFn: createSuperHeroes,
    onSuccess: () => {
      queryClient.invalidateQueries(["super-heroes"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    mutation.mutate({ ...form });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setForm({ ...form, [e.target.id]: value });
    console.log("Change", form);
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
        <div>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Input ID"
              onChange={handleChange}
              id="id"
              className="form-control mb-3"
            />
            <input
              placeholder="Input Name"
              onChange={handleChange}
              id="name"
              className="form-control mb-3"
            />
            <input
              placeholder="Input AlterEgo"
              onChange={handleChange}
              id="alterEgo"
              className="form-control mb-3"
            />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div>
          <h2>Fetch Using React Query</h2>
          {data?.map((o, index) => (
            <h1 key={index}>{o.name}</h1>
          ))}
        </div>
      </div>
    </>
  );
};

export default Fetch;

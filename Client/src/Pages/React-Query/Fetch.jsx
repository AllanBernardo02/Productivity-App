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
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input placeholder="Input ID" onChange={handleChange} id="id" />
          <input placeholder="Input Name" onChange={handleChange} id="name" />
          <input
            placeholder="Input AlterEgo"
            onChange={handleChange}
            id="alterEgo"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
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

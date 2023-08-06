import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { createTodo, getTodo } from "../../api/api";

const Todo = () => {
  const [form, setForm] = useState({
    todoName: "",
  });

  const queryClient = useQueryClient();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["todo"],
    queryFn: getTodo,
  });

  const mutation = useMutation({
    mutationKey: ["create-todo"],
    mutationFn: createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todo"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    mutation.mutate({ ...form });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setForm({ ...form, [e.target.id]: value });
    console.log(form);
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  console.log("Get Todo", data?.data);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <div>
        <h2 className="text-center mb-3">Todo List App</h2>
      </div>
      <div>
        <form className="d-flex" onSubmit={(e) => handleSubmit(e)}>
          <input
            id="todoName"
            className="form-control me-3"
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <div>
        <ul>
          {data?.data.map((o) => (
            <li>{o.todoName}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;

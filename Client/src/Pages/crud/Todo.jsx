import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { createTodo, deleteTodo, getTodo } from "../../api/api";
import { toast } from "react-hot-toast";

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

  //delete
  const deleteMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todo"]);
      toast.success("Deleted SuccessFully");
    },
  });

  const handleDelete = (id) => {
    console.log("Delete", id);
    deleteMutation.mutate(id);
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
      <div className="mt-3">
        {data?.data.map((o, index) => (
          <div key={index} className="card shadow p-3 mt-2 d-flex flex-row">
            <div className="m-2">
              <h6>{o.todoName}</h6>
            </div>
            <div className="ms-auto">
              <button className="btn btn-outline-primary me-2">
                <i className="bi bi-pencil-square"></i>
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => handleDelete(o._id)}
              >
                <i className="bi bi-trash-fill"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;

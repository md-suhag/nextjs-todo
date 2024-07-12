"use client";
import Todo from "@/components/Todo";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [todoData, setTodoData] = useState([]);
  const fetchTodos = async () => {
    const response = await axios.get("/api");
    setTodoData(response.data.todos);
  };
  const deleteTodo = async (id) => {
    const response = await axios.delete("/api", {
      params: {
        mongoId: id,
      },
    });
    toast.success(response.data.msg);
    fetchTodos();
  };

  const completeTodo = async (id) => {
    const response = await axios.put(
      "/api",
      {},
      {
        params: {
          mongoId: id,
        },
      }
    );
    toast.success(response.data.msg);
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((form) => ({ ...form, [name]: value }));
    console.log(formData);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      // api code

      const response = await axios.post("/api", formData);

      toast.success(response.data.msg);
      setFormData({
        title: "",
        description: "",
      });
      await fetchTodos();
    } catch (error) {
      toast.error("error");
    }
  };
  return (
    <>
      <ToastContainer theme="dark" />
      <form
        className="flex flex-col items-start gap-4 max-w-screen-md mx-auto my-10"
        onSubmit={submitHandler}
      >
        <input
          type="text"
          name="title"
          placeholder="Enter title"
          className="w-full px-3 py-2 border-2 outline-none"
          onChange={handleChange}
          value={formData.title}
        />
        <textarea
          name="description"
          placeholder="Enter description"
          className="px-3 py-2 border-2 w-full resize-none outline-none"
          onChange={handleChange}
          value={formData.description}
        ></textarea>
        <button
          type="submit"
          className="bg-purple-600 px-4 py-2 text-white transition hover:scale-105"
        >
          Add Todo
        </button>
      </form>

      <div className="relative overflow-x-auto mt-24 max-w-screen-md mx-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {todoData.map((item, index) => {
              return (
                <Todo
                  key={index}
                  id={index}
                  title={item.title}
                  description={item.description}
                  complete={item.isCompleted}
                  mongoId={item._id}
                  deleteTodo={deleteTodo}
                  completeTodo={completeTodo}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

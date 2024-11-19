import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Addbooks = () => {
  const [state, setState] = useState({
    bookName: "",
    des: "",
    author: "",
    image: "",
    price: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:1234/addBook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      });
      const result = await response.json();

      if (response.ok) {
        // Navigate only when the response is successful
        navigate("/allbooks");
      } else {
        console.error("Failed to add book:", result.message);
      }
    } catch (error) {
      console.error("Error during submission:", error);
    }
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book Name"
          name="bookName"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Description"
          name="des"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Author"
          name="author"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder=" Image URL"
          name="image"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Price"
          name="price"
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default Addbooks;

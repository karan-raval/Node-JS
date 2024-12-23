import { React, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Input from '@mui/material/Input';
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import '../assets/css/createblog.css'
const CreateBlog = () => {
  const [sort, setSort] = useState("");

  const today = new Date();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = monthNames[today.getMonth()];

  const date = today.getDate();
  const year = today.getFullYear();

  let all = date + " " + month + " " + year;

  const navigate = useNavigate();
  const [fromdata, setState] = useState({
    blogname: "",
    heading: "",
    des: "",
    imgURL: "",
    all:all
  });

  const handleChange = async(e) => {
    let { name, value } = e.target;
    setState({ ...fromdata, [name]: value });
  };

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(fromdata)
   
    try {
      const response = await fetch(`http://localhost:3333/createblog`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fromdata),
      });

      const result = await response.json();
      if (response.ok) {
        alert("BLog Data Added Successfull")
        navigate("/");
      } else {
        console.error("Failed to add BLog Data:", result.message);
      }
    } catch (error) {
      console.error("Error during submission:", error);
    }

  setState({
    blogname: "",
    heading: "",
    des: "",
    imgURL: "",
  });
  };

  let { blogname, heading, des, imgURL } = fromdata;
  return (
    <>
      <Header />
      <section className="s-content--narrow">
        <div className="comments-wrapp">
          <div id="comments" className="row">
            <div className="col-full">
              <div className="respond">
                <h3 className="h2">Write Your Blog </h3>

                <form onSubmit={handleSubmit}>
                  <fieldset>
                    <div className="form-field">
                      <input
                        onChange={handleChange}
                        value={blogname}
                        name="blogname"
                        type="text"
                        className="full-width"
                        placeholder="Your Name"
                      />
                    </div>

                    <div className="form-field">
                      <input
                        onChange={handleChange}
                        name="heading"
                        value={heading}
                        type="text"
                        className="full-width"
                        placeholder="Enter Heading"
                      />
                    </div>

                    <div className="form-field">
                      <input
                        onChange={handleChange}
                        value={des}
                        name="des"
                        type="text"
                        className="full-width"
                        placeholder="Enter description"
                      />
                    </div>
                    <div className="form-field" >
                      <Box>
                        <FormControl  size="big" error  fullWidth>
                          <InputLabel  id="demo-simple-select" labelId="demo-simple-select-label" >
                            Categories
                          </InputLabel>
                          <Select
                            onChange={handleSort}
                          >
                            <MenuItem  value={"Lifestyle"}>Lifestyle</MenuItem>
                            <MenuItem value={"Health"}>Health</MenuItem>
                            <MenuItem value={"Family"}>Family</MenuItem>
                            <MenuItem value={"Management"}>Management</MenuItem>
                            <MenuItem value={"Travel"}>Travel</MenuItem>
                            <MenuItem value={"Work"}>Work</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                      
                    </div>
                    <div className="form-field">
                      <input
                        onChange={handleChange}
                        value={imgURL}
                        name="imgURL"
                        type="text"
                        className="full-width"
                        placeholder="Your Image Link"
                      />
                    </div>

                    <button
                      type="submit"
                      className="submit btn--primary btn--large full-width"
                    >
                      Submit
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CreateBlog;

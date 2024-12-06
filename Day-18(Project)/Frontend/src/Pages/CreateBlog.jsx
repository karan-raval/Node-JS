import { React, useState } from "react";
import { addData } from "../Redux/Product/action";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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


  const handleChangee = (event) => {
    setAge(event.target.value);
  };

  const dispatch = useDispatch();
  const state = useSelector((s) => s.proReducer);
  const navigate = useNavigate();
  console.log(state);
  const [fromdata, setState] = useState({
    blogname: "",
    heading: "",
    des: "",
    imgURL: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...fromdata, [name]: value });
  };

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      blogname,
      heading,
      des,
      imgURL,
      all,
      sort,
    };

    dispatch(addData)(obj);
    navigate("/");
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
                    <div className="form-field">
                      <Box className="h2">
                        <FormControl fullWidth>
                          <InputLabel >
                            Categories
                          </InputLabel>
                          <Select
                            
                            onChange={handleSort}
                          >
                            <MenuItem value={"Lifestyle"}>Lifestyle</MenuItem>
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

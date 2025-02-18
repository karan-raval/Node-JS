import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import axios from "axios";
import "./admin.css";
import AdminHeader from "../Components/AdminHeader";
import $ from "jquery"; // Ensure jQuery is imported

const AddCategory = () => {
  useEffect(() => {
    $("#sidebarToggle, #sidebarToggleTop").on("click", function () {
      $("body").toggleClass("sidebar-toggled");
      $(".sidebar").toggleClass("toggled");
      if ($(".sidebar").hasClass("toggled")) {
        $(".sidebar .collapse").collapse("hide");
      }
    });

    $(window).resize(function () {
      if ($(window).width() < 768) {
        $(".sidebar .collapse").collapse("hide");
      }
      if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
        $("body").addClass("sidebar-toggled");
        $(".sidebar").addClass("toggled");
        $(".sidebar .collapse").collapse("hide");
      }
    });

    // Prevent scrolling when the sidebar is hovered
    $("body.fixed-nav .sidebar").on(
      "mousewheel DOMMouseScroll wheel",
      function (e) {
        if ($(window).width() > 768) {
          const o = e.originalEvent.wheelDelta || -e.originalEvent.detail;
          this.scrollTop += 30 * (o < 0 ? 1 : -1);
          e.preventDefault();
        }
      }
    );

    $(document).on("scroll", function () {
      if ($(this).scrollTop() > 100) {
        $(".scroll-to-top").fadeIn();
      } else {
        $(".scroll-to-top").fadeOut();
      }
    });

    $(document).on("click", "a.scroll-to-top", function (e) {
      const target = $(this).attr("href");
      $("html, body").animate(
        { scrollTop: $(target).offset().top },
        1000,
        "easeInOutExpo"
      );
      e.preventDefault();
    });

    return () => {
      // Cleanup event listeners
      $("#sidebarToggle, #sidebarToggleTop").off("click");
      $(window).off("resize");
      $("body.fixed-nav .sidebar").off("mousewheel DOMMouseScroll wheel");
      $(document).off("scroll click");
    };
  }, []);
  const [category, setcategory] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = sessionStorage.getItem("token");
      await axios.post(
        "http://localhost:5532/category/add",
        { category },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSuccess("Category added successfully");
      setName("");
      setError("");
      console.log(category)
    } catch (error) {
      setError(error.response?.data?.message || "Failed to add category");
      setSuccess("");
    }
  };

  return (
    <>
      {/* <body id="page-top"> */}

      {/* Page Wrapper */}
      <div id="wrapper">
        {/* Sidebar */}
        <Sidebar />

        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            {/* Topbar */}
            <AdminHeader />
            {/* End of Topbar */}

            {/* */}
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                  <div className="container mt-5">
                    <div className="row justify-content-center">
                      <div className="col-12 col-sm-10 col-md-8 col-lg-6">
                        <div className="card shadow-lg p-4">
                          <h3 className="text-center mb-4">Add Category</h3>
                          {success && (
                            <div className="alert alert-success">{success}</div>
                          )}
                          {error && (
                            <div className="alert alert-danger">{error}</div>
                          )}
                          <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                              <label htmlFor="category" className="form-label">
                                Category Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="category"
                                name="category"
                                placeholder="Enter category name"
                                value={category}
                                onChange={(e) => setcategory(e.target.value)}
                                required
                              />
                            </div>
                            <button
                              type="submit"
                              className="btn btn-primary w-100"
                            >
                              Submit
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
    </>
  );
};

export default AddCategory;

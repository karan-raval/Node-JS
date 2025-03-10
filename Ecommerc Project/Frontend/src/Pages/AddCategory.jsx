import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import AdminHeader from "../Components/AdminHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ManageCategory = () => {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [editCategory, setEditCategory] = useState(null);
  const [newCategoryName, setNewCategoryName] = useState("");

  useEffect(() => {
    fetchCategories();
  }, []);

  // Fetch Categories
  const fetchCategories = async () => {
    try {
      const response = await fetch("http://localhost:5532/categories");
      if (!response.ok) throw new Error("Failed to fetch categories");

      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
      toast.error("Failed to fetch categories");
    }
  };

  // Add Category
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const token = sessionStorage.getItem("token");  // Fetch token from localStorage
    console.log("Token being sent:", token);      // Debugging

    if (!token) {
        console.error("No token found!");
        return alert("You must be logged in to add a category.");
    }

    try {
        const response = await fetch("http://localhost:5532/category", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,  // Ensure token is prefixed with 'Bearer '
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: "New Category" })
        });

        const data = await response.json();
        console.log("Response Data:", data);

        if (!response.ok) {
            throw new Error(data.message || "Failed to add category");
        }

        alert("Category added successfully!");
    } catch (error) {
        console.error("API Error:", error);
        alert(error.message);
    }
};

  // Edit Category
  const handleEdit = async () => {
    if (!editCategory) return;

    try {
      const token = sessionStorage.getItem("token");
      const response = await fetch(`http://localhost:5532/category/${editCategory._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ category: newCategoryName }),
      });

      if (!response.ok) throw new Error("Failed to update category");

      toast.success("Category updated successfully");
      setEditCategory(null);
      fetchCategories();
    } catch (error) {
      console.error("Error updating category:", error);
      toast.error("Failed to update category");
    }
  };

  // Delete Category
  const handleDelete = async (id) => {
    try {
      const token = sessionStorage.getItem("token");
      const response = await fetch(`http://localhost:5532/category/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error("Failed to delete category");

      toast.success("Category deleted successfully");
      fetchCategories();
    } catch (error) {
      console.error("Error deleting category:", error);
      toast.error("Failed to delete category");
    }
  };

  return (
    <>
      <ToastContainer />
      <div id="wrapper">
        <Sidebar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <AdminHeader />

            <div className="container-fluid">
              <div className="row">
                <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                  <div className="container mt-5">
                    <div className="row justify-content-center">
                      <div className="col-12 col-sm-10 col-md-8 col-lg-6">
                        <div className="card shadow-lg p-4">
                          <h3 className="text-center mb-4">Add Category</h3>
                          <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                              <label htmlFor="category" className="form-label">Category Name</label>
                              <input
                                type="text"
                                className="form-control"
                                id="category"
                                placeholder="Enter category name"
                                name="category"
                                onChange={(e) => setCategory(e.target.value)}
                                required
                              />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Submit</button>
                          </form>
                        </div>

                        {/* Category Table */}
                        <div className="mt-4">
                          <h4>Manage Categories</h4>
                          <table className="table table-bordered">
                            <thead className="table-dark">
                              <tr>
                                <th>#</th>
                                <th>Category Name</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {categories.map((cat, index) => (
                                <tr key={cat._id}>
                                  <td>{index + 1}</td>
                                  <td>{cat.category}</td>
                                  <td>
                                    <button
                                      className="btn btn-warning me-2"
                                      onClick={() => {
                                        setEditCategory(cat);
                                        setNewCategoryName(cat.category);
                                      }}
                                    >
                                      Edit
                                    </button>
                                    <button
                                      className="btn btn-danger"
                                      onClick={() => handleDelete(cat._id)}
                                    >
                                      Delete
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        {/* Edit Modal */}
                        {editCategory && (
                          <div className="modal show d-block" tabIndex="-1" role="dialog">
                            <div className="modal-dialog" role="document">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5 className="modal-title">Edit Category</h5>
                                  <button type="button" className="close" onClick={() => setEditCategory(null)}>
                                    <span>&times;</span>
                                  </button>
                                </div>
                                <div className="modal-body">
                                  <input
                                    type="text"
                                    className="form-control"
                                    value={newCategoryName}
                                    onChange={(e) => setNewCategoryName(e.target.value)}
                                  />
                                </div>
                                <div className="modal-footer">
                                  <button type="button" className="btn btn-secondary" onClick={() => setEditCategory(null)}>
                                    Cancel
                                  </button>
                                  <button type="button" className="btn btn-primary" onClick={handleEdit}>
                                    Save Changes
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ManageCategory;

import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import axios from "axios";
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

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:5532/categories");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
      toast.error("Failed to fetch categories");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = sessionStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:5532/category",
        { category },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.status === 200 || response.status === 201) {
        toast.success("Category added successfully");
        setCategory("");
        fetchCategories();
      } else {
        throw new Error("Unexpected API response");
      }
    } catch (error) {
      console.error("API Error:", error);
      const errorMsg = error.response?.data?.message || "Failed to add category";
      toast.error(errorMsg);
    }
  };

  const handleEdit = async () => {
    if (!editCategory) return;

    try {
      const token = sessionStorage.getItem("token");
      await axios.put(
        `http://localhost:5532/category/${editCategory._id}`,
        { category: newCategoryName },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      toast.success("Category updated successfully");
      setEditCategory(null);
      fetchCategories();
    } catch (error) {
      console.error("Error updating category:", error);
      toast.error("Failed to update category");
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = sessionStorage.getItem("token");
      await axios.delete(`http://localhost:5532/category/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

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
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                required
                                name="category"
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
                                    <button className="btn btn-warning me-2" onClick={() => { 
                                      setEditCategory(cat); 
                                      setNewCategoryName(cat.category);
                                    }}>Edit</button>
                                    <button className="btn btn-danger" onClick={() => handleDelete(cat._id)}>Delete</button>
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
                                  <button type="button" className="btn btn-secondary" onClick={() => setEditCategory(null)}>Cancel</button>
                                  <button type="button" className="btn btn-primary" onClick={handleEdit}>Save Changes</button>
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

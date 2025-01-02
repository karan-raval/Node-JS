import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const UserBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserBlogs = async () => {
      try {
        const response = await fetch("http://localhost:5010/myBlogs", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user blogs");
        }

        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching user blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserBlogs();
  }, []);

  const handleEdit = (id) => {
    // Implement edit functionality here
    console.log(`Edit blog with ID: ${id}`);
  };

  const handleDelete = async (id) => {
    // Implement delete functionality here
    try {
      const response = await fetch(`http://localhost:5010/blogs/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete blog");
      }

      // Remove the deleted blog from the state
      setBlogs(blogs.filter((blog) => blog._id !== id));
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <section className="s-content">
        <div className="row masonry-wrap">
          <div className="masonry" id="sy3">
            <div className="grid-sizer"></div>

            {blogs.map((el) => (
              <article
                key={el.id}
                className="masonry__brick entry format-standard aos-init aos-animate"
                data-aos="fade-up"
                id={`sy${el.id}`}
              >
                <div className="entry__thumb">
                  <a className="entry__thumb-link">
                    <img src={el.image} alt="" />
                  </a>
                </div>

                <div className="entry__text">
                  <div className="entry__header">
                    <div className="entry__date">
                      <a>{el.date}</a>
                    </div>
                    <h1 className="entry__title">
                        {el.title}

                    </h1>
                  </div>
                  <div className="entry__excerpt">
                    <p>
                          {el.description}

                    </p>
                  </div>
                  <br />
                  <div className="entry__meta">
                    <span className="entry__meta-links">
                      <a>{el.category}</a>
                    </span>
                  </div>
                  <br /><br />
                  <div className="entry__actions">
                  <button onClick={() => handleEdit(el._id)}>Edit</button>
                  <button onClick={() => handleDelete(el._id)}>Delete</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default UserBlogs;
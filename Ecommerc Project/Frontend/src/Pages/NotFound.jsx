import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div class="container-fluid">
        {/* <!-- 404 Error Text --> */}
        <div class="text-center">
          <div class="error mx-auto" data-text="404">
            404
          </div>
          <p class="lead text-gray-800 mb-5">Page Not Found</p>
          <p class="text-gray-500 mb-0">
            It looks like you found a glitch in the matrix...
          </p>
          <Link to={'/admin'}>&larr; Back to Dashboard</Link>
        </div>
      </div>
      {/* <!-- /.container-fluid --> */}

      {/* </div> */}
    </>
  );
};

export default NotFound;

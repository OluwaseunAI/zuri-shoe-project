import React from "react";
import { Link } from "react-router-dom";
import Layout from "./../components/Layout/Layout-main";

const Pnf= () => {
  return (
    <Layout title={"go back to home. Page not found"}>
      <div className="pnf">
        <h1 className="pnf-title">Error 404</h1>
        <h2 className="pnf-heading">Oops! We can not find that page</h2>
        <Link to="/" className="pnf-btn">
          Go Back
        </Link>
      </div>
    </Layout>
  );
};

export default Pnf;

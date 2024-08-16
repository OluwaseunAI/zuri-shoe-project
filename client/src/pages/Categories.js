import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout-main";
import useCategory from "../hooks/useCategory";

const Categories = () => {
  const categories = useCategory();

  return (
    <Layout title={"All Categories"}>
      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {categories.map((c) => (
            <div className="col" key={c._id}>
              <div className="card h-100">
                <Link
                  to={`/category/${c.slug}`}
                  className="btn cat-btn w-100 h-100 d-flex align-items-center justify-content-center"
                >
                  {c.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
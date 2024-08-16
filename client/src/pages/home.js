import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Checkbox, Radio } from "antd";
import Layout from "./../components/Layout/Layout";import { Prices } from "../components/Prices";
import { useCart } from "../contextAPI/index";
import axios from "axios";
import toast from "react-hot-toast";

import { AiOutlineReload } from "react-icons/ai";
import "../styles/Homepage.css";

const HomePage = () => {

  return (
    <Layout title="ALl Products - Best offers">
      <img src="../images/SHOES/downlad (3).jpg" className="banner-img" alt="bannerimage" width="100%" />
      <div className="container-fluid row mt-3 hom">
        <div className="col-md-3 fltrs">
          <h4 className="text-center">Filter By Category</h4>
          <div className="d-flex flex-column">
            {categories?.map((c) => (
              <Checkbox key={c._id} onChange={(e) => handleFilter(e.target.checked, c._id)}>
                {c.name}
              </Checkbox>
            ))}
          </div>
          {/* price filter */}
          <h4 className="text-center mt-4">Filter By Amount</h4>
          <div className="d-flex flex-column">
            <Radio.Group onChange={(e) => setRadio(e.target.value)}>
              {Prices?.map((p) => (
                <div key={p._id}>
                  <Radio value={p.array}>{p.name}</Radio>
                </div>
              ))}
            </Radio.Group>
          </div>
          <div className="d-flex flex-column">
            <button className="btn btn-danger" onClick={() => window.location.reload()}>
              RESET
            </button>
          </div>
        </div>
        <div className="col-md-9">
          <h1 className="text-center">All Products</h1>
          <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <div className="cad m-2" key={p._id}>
                <img src={`/api/v1/product/product-photo/${p._id}`} className="cad-img-top" alt={p.name} />
                <div className="cad-body">
                  <div className="cad-name-price">
                    <h5 className="cad-title">{p.name}</h5>
                    <h5 className="cad-title cad-price">
                      {p.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}
                    </h5>
                  </div>
                  <p className="cad-text">{p.description.substring(0, 60)}...</p>
                  <div className="cad-name-price">
                    <button className="btn btn-info ms-1" onClick={() => navigate(`/product/${p.slug}`)}>
                      More Details
                    </button>
                    <button
                      className="btn btn-dark ms-1"
                      onClick={() => {
                        setCart([...cart, p]);
                        localStorage.setItem("cart", JSON.stringify([...cart, p]));
                        toast.success("Added to cart");
                      }}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="m-2 p-3">
            {products && products.length < total && (
              <button className="btn loadmore" onClick={(e) => {
                e.preventDefault();
                setPage(page + 1);
              }}>
                {loading ? "Loading ..." : (
                  <>
                    {" "}
                    Loadmore <AiOutlineReload />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="container mt-5">
        <div className="row contactus">
          <div className="col-lg-6 col-md-12 mb-4">
            <img
              src="/images/contactus.jpeg"
              alt="contactus"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-lg-4 col-md-12">
            <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
            <p className="text-justify mt-2">
              For enquiries, complaints and info about products. We are reachable by:            </p>
            <p className="mt-3">
              <BiMailSend /> : www.theshoeplace@mern.com
            </p>
            <p className="mt-3">
              <BiPhoneCall /> : +2348012456789
            </p>
            <p className="mt-3">
              <BiSupport /> : 1800-0000-0000 (toll free)
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
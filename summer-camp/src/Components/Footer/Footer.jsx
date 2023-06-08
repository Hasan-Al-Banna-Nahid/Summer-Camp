/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content font-semibold">
        <div>
          <p>
            Vedhak Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Contact</span>
          <a className="link link-hover">+8801896085259</a>
          <a className="link link-hover">IamNahid591998@gmail.com</a>
        </div>
        <div>
          <span className="footer-title">Address</span>
          <a className="link link-hover">Feni,Chittagong</a>
          <a className="link link-hover">Bangladesh</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

import React from "react";

const Footer = () => {
  return (
    <>
      <footer className=" hidden lg:grid  footer sm:footer-horizontal bg-cyan-800 text-base-300 p-10">
        <aside>
          <img className="w-20 border-white" src="/realEstate.svg" alt="" />
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable Service since 1998
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Renting</a>
          <a className="link link-hover">Buying</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </>
  );
};

export default Footer;

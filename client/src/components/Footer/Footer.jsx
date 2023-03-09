import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 pt-12 pb-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap mb-4">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold text-white">About us</h5>
            <p className="mb-4 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              porttitor laoreet diam, at cursus lorem maximus eu.
            </p>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold text-white">Contact</h5>
            <p className="mb-4 text-gray-400">Email: info@example.com</p>
            <p className="mb-4 text-gray-400">Phone: +1 (123) 456-7890</p>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold text-white">Follow us</h5>
            <div className="flex justify-center md:justify-start">
              <a
                href="#"
                className="bg-gray-600 hover:bg-gray-700 rounded-full text-white mr-4"
              >
                <i className="fab fa-facebook-f py-3 px-4"></i>
              </a>
              <a
                href="#"
                className="bg-gray-600 hover:bg-gray-700 rounded-full text-white mr-4"
              >
                <i className="fab fa-twitter py-3 px-4"></i>
              </a>
              <a
                href="#"
                className="bg-gray-600 hover:bg-gray-700 rounded-full text-white mr-4"
              >
                <i className="fab fa-instagram py-3 px-4"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-gray-400">© 2023 My Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

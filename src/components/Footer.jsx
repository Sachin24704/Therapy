import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 relative">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="lg:w-1/2 lg:text-right mb-8 lg:mb-0 order-2">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="mb-2">104 Area</p>
          <p className="mb-2">Visakhapatnam, India</p>
          <p className="mb-2">Email: sachin24704@gmail.com</p>
          <p>Phone: 08309160478</p>
        </div>
        <div className="lg:w-1/2 lg:text-center mb-8 lg:mb-0 order-1">
          <h1 className="text-3xl font-extrabold text-blue-600 mb-4">Zenexa</h1>
          <p className="mb-4">
            If you are a therapist, please fill out our{" "}
            <a
              className="text-blue-400 hover:underline"
              href="https://your-google-form-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Form
            </a>
            .
          </p>
        </div>
      </div>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-[-1]"
        style={{ backgroundImage: 'url("/path/to/your/image.jpg")' }}
      ></div>
      {/* Divider Line */}
      <hr className="mt-12 border-t border-blue-600 opacity-25" />
      {/* Attribution */}
      <div className="text-center mt-4">
        <p className="text-sm text-gray-400">
          © 2023 Zenexa. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

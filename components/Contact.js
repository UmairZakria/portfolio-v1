import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Contact = (Props) => {
  const [image, setImage] = useState("https://img.icons8.com/material-outlined/24/FFFFFF/copy.png");

  const copyto = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setImage("https://img.icons8.com/material-rounded/24/FFFFFF/checkmark--v1.png");
        setTimeout(() => {
          setImage("https://img.icons8.com/material-outlined/24/FFFFFF/copy.png");
        }, 1000);
      })
      .catch(() => {
        alert("Failed to copy text!");
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.8 }}
      className="fixed flex items-center justify-center top-0 left-0 text-white bg-[#00000079] w-full h-screen z-[1000]"
    >
      <motion.img
        whileTap={{ rotate: 360 }}
        className="fixed top-6 z-[100] right-6 cursor-pointer"
        onClick={Props.onClose}
        width="50"
        height="50"
        src="https://img.icons8.com/ios-filled/50/FFFFFF/multiply-2.png"
        alt="Close"
      />
      <motion.div
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.4, type: "spring", stiffness: 150 }}
        className="w-[90%] max-w-[600px] p-6 bg-[#121212] rounded-xl shadow-lg"
      >
        <h1 className="text-3xl font-bold text-center mb-6">Lets Connect</h1>
        <div className="space-y-4">
          {/* WhatsApp Section */}
          <div className="flex items-center justify-between bg-[#1f1f1f] p-4 rounded-lg">
            <div className="flex items-center gap-3">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/water-color/50/whatsapp.png"
                alt="WhatsApp"
              />
              <div>
                <p className="text-lg font-medium">WhatsApp</p>
                <p className="text-blue-400 underline">+92 318 4394363</p>
              </div>
            </div>
            <button
              className="p-2 bg-blue-600 hover:bg-blue-700 rounded-full"
              onClick={() => copyto("+92 318 4394363")}
            >
              <img width="24" height="24" src={image} alt="Copy" />
            </button>
          </div>

          {/* Email Section */}
          <div className="flex items-center justify-between bg-[#1f1f1f] p-4 rounded-lg">
            <div className="flex items-center gap-3">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/papercut/60/new-post.png"
                alt="Email"
              />
              <div>
                <p className="text-lg font-medium">Email</p>
                <p className="text-blue-400 underline">umairzakria6@gmail.com</p>
              </div>
            </div>
            <button
              className="p-2 bg-blue-600 hover:bg-blue-700 rounded-full"
              onClick={() => copyto("umairzakria6@gmail.com")}
            >
              <img width="24" height="24" src={image} alt="Copy" />
            </button>
          </div>

          {/* LinkedIn Section */}
          <div className="flex items-center justify-between bg-[#1f1f1f] p-4 rounded-lg">
            <div className="flex items-center gap-3">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/color/48/linkedin.png"
                alt="LinkedIn"
              />
              <div>
                <p className="text-lg font-medium">LinkedIn</p>
                <p className="text-blue-400 underline">Umair Zakria</p>
              </div>
            </div>
            <button
              className="p-2 bg-blue-600 hover:bg-blue-700 rounded-full"
              onClick={() => copyto("https://linkedin.com/in/umair-zakria-67477b33a")}
            >
              <img width="24" height="24" src={image} alt="Copy" />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;

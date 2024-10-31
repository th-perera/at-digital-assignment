"use client";
import React from 'react'
import Footer from "./Footer/Footer";
import NavBar from "./Navbar/Navbar";

function MainLayout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}

export default MainLayout
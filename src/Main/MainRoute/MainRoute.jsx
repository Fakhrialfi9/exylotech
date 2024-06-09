import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "../MainStyle/App.css";

import FunctionSelectProduct from "./../../Resources/Function/FunctionSelectProduct";

import { lazy, Suspense } from "react";
const Sidebar = lazy(() => import("../../Resources/View/Components/Sidebar/Sidebar"));
const Navbar = lazy(() => import("../../Resources/View/Pages/Home/Section/Navbar"));
const DashBoard = lazy(() => import("../../Resources/View/Pages/Home/DashBoard"));
const Footer = lazy(() => import("../../Resources/View/Components/Footer/Footer"));

function MainRoute() {
  const { selectedProduct, handleSelectProduct } = FunctionSelectProduct();

  return (
    <main id="MainLayout">
      <Suspense
        fallback={
          <div className="LazyLoading">
            <h5>Loading...</h5>
          </div>
        }
      >
        <section className="MainLayout">
          <div className="SideBarLayout">
            <div className="SideBarLayout-Left">
              <Routes>
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route path="/" Component={Sidebar} />
                <Route path="/dashboard" Component={Sidebar} />
                <Route path="/orders" Component={Sidebar} />
                <Route path="/product" Component={Sidebar} />
                <Route path="/customers" Component={Sidebar} />
                <Route path="/overview" Component={Sidebar} />
                <Route path="/invoice" Component={Sidebar} />
                <Route path="/setting" Component={Sidebar} />
                <Route path="/support" Component={Sidebar} />
              </Routes>
            </div>
            <div className="PageContentLayout-Right">
              <Routes>
                <Route path="/" Component={Navbar} />
                <Route path="/dashboard" element={<Navbar selectedProduct={selectedProduct} handleSelectProduct={handleSelectProduct} />} />
                <Route path="/orders" Component={Navbar} />
                <Route path="/product" Component={Navbar} />
                <Route path="/customers" Component={Navbar} />
                <Route path="/overview" Component={Navbar} />
                <Route path="/invoice" Component={Navbar} />
                <Route path="/setting" Component={Navbar} />
                <Route path="/support" Component={Navbar} />
              </Routes>
              <Routes>
                <Route path="/dashboard" element={<DashBoard selectedProduct={selectedProduct} />} />
              </Routes>
            </div>
          </div>
          <footer className="FooterLayout">
            <Routes>
              <Route path="/" Component={Footer} />
              <Route path="/dashboard" Component={Footer} />
              <Route path="/orders" Component={Footer} />
              <Route path="/product" Component={Footer} />
              <Route path="/customers" Component={Footer} />
              <Route path="/overview" Component={Footer} />
              <Route path="/invoice" Component={Footer} />
              <Route path="/setting" Component={Footer} />
              <Route path="/support" Component={Footer} />
            </Routes>
          </footer>
        </section>
      </Suspense>
    </main>
  );
}

export default MainRoute;

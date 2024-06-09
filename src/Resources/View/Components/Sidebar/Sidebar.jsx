import "../../../Style/Components/Sidebar/Sidebar.css";
import { NavLink } from "react-router-dom";

import Logoexylotech from "../../../Asset/Logo/LogoExylo.webp";
import IconDashBoard from "../../../Asset/Icon/DashBoard.svg";
import IconCart from "../../../Asset/Icon/Cart.svg";
import IconProduct from "../../../Asset/Icon/Basket.svg";
import IconPerson from "../../../Asset/Icon/Person.svg";
import IconChart from "../../../Asset/Icon/ChartView.svg";
import IconInvoice from "../../../Asset/Icon/Invoice.svg";
import IconSetting from "../../../Asset/Icon/Setting.svg";
import IconSupport from "../../../Asset/Icon/Support.svg";
import IconLogout from "../../../Asset/Icon/Logout.svg";

function Sidebar() {
  return (
    <main id="MainSidebar">
      <section className="MainSidebar">
        <nav className="Sidebar">
          <div className="SidebarContainer">
            <div className="SidebarContent">
              <div className="SidebarContentTop">
                <NavLink to="/">
                  <img src={Logoexylotech}></img>
                </NavLink>
              </div>
              <div className="SidebarContentCenter">
                <ul>
                  <li>
                    <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "Active" : "")}>
                      <img src={IconDashBoard} /> Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/orders" className={({ isActive }) => (isActive ? "Active" : "")}>
                      <img src={IconCart} /> Orders
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/product" className={({ isActive }) => (isActive ? "Active" : "")}>
                      <img src={IconProduct} alt="Product" /> Product
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/customers" className={({ isActive }) => (isActive ? "Active" : "")}>
                      <img src={IconPerson} /> Customers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/overview" className={({ isActive }) => (isActive ? "Active" : "")}>
                      <img src={IconChart} /> Overview
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/invoice" className={({ isActive }) => (isActive ? "Active" : "")}>
                      <img src={IconInvoice} /> Invoice
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/setting" className={({ isActive }) => (isActive ? "Active" : "")}>
                      <img src={IconSetting} /> Setting
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/support" className={({ isActive }) => (isActive ? "Active" : "")}>
                      <img src={IconSupport} /> Support
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="SidebarContentBottom">
                <ul className="SidebarContentBottom-Menu">
                  <li className="SidebarContentBottom-Item">
                    <a className="SidebarContentBottom-Link">
                      <img src={IconLogout}></img> Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </main>
  );
}

export default Sidebar;

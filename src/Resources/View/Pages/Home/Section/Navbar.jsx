import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "../../../../Style/Pages/Home/DashBoard.css";
import SelectProduct from "../../../Components/Navbar/SelectProduct";
import SelectDate from "../../../Components/Navbar/SelectDate";
import SearchTables from "../../../Components/Navbar/SearchTables";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function NavbarDashBoard({ selectedProduct, handleSelectProduct }) {
  const location = useLocation();

  const pathTitles = {
    "/dashboard": "Dashboard",
    "/orders": "Orders",
    "/product": "Product",
    "/customers": "Customers",
    "/overview": "Overview",
    "/invoice": "Invoice",
    "/setting": "Setting",
    "/support": "Support",
  };

  const title = pathTitles[location.pathname] || "Dashboard";

  return (
    <nav className="NavbarDashBoard">
      <div className="NavbarDashBoardContainer">
        <div className="NavbarDashBoardContent">
          {/* Start Navbar Dashboard Top */}
          <div className="NavbarDashBoardTop">
            <div className="NavbarDashBoardTop-Left">
              <h5>{title}</h5>
            </div>
            <div className="NavbarDashBoardTop-Center">
              <SearchTables />
            </div>
            <div className="NavbarDashBoardTop-Right">
              <button>
                <span className="BadgeNavbar">3</span>
                <FontAwesomeIcon icon={faBell} className="Icon-Bell" />
              </button>
              <button>
                <span className="BadgeNavbar">5</span>
                <FontAwesomeIcon icon={faEnvelope} className="Icon-Envelope" />
              </button>
            </div>
          </div>
          {/* End Navbar Dashboard Top */}

          {/* Start Navbar Dashboard Bottom */}
          <div className="NavbarDashBoardBottom">
            <div className="NavbarDashBoardBottom-Left">
              <SelectProduct selectedProducts={selectedProduct} onSelectProduct={handleSelectProduct} />
            </div>

            <div className="NavbarDashBoardBottom-Right">
              <SelectDate />
            </div>
          </div>
          {/* End Navbar Dashboard Bottom */}
        </div>
      </div>
    </nav>
  );
}

export default NavbarDashBoard;

import React from "react";

import "../../../../Style/Pages/Home/DashBoard.css";
import TableSales from "../../../Components/Table/Table";

function TableSalesDashboard() {
  return (
    <div className="TableSalesDashBoard">
      <div className="TableSalesDashBoardContainer">
        <div className="TableSalesDashBoardContent">
          <div className="Box-TableSalesDashBoard">
            <TableSales />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableSalesDashboard;
